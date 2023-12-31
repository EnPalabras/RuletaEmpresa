'use client'

import { useState, useEffect } from 'react'
import { PREGUNTAS_EMPRESAS } from '@/utils/preguntas'
import SuscribeModal from '@/components/SuscribeModal'
import Footer from '@/components/Footer'
import RandomCard from '@/components/RandomCard'

const cardsShown: string[] = ['Lanza una nueva carta para empezar a jugar']

export default function CompanyPage({
  children,
  currentBg,
}: {
  children: React.ReactNode
  currentBg: boolean
}) {
  const [counter, setCounter] = useState<number>(0)
  const [openModal, setOpenModal] = useState<string | undefined>()
  const [hasCompletedModal, setHasCompletedModal] = useState<boolean>(false)
  const [emailFromLocalStorage, setEmailFromLocalStorage] = useState<
    string | null
  >('')

  useEffect(() => {
    setEmailFromLocalStorage(localStorage.getItem('email'))
  }, [])

  const handleSuscribe = () => {
    if (counter === 4) {
      if (!hasCompletedModal) {
        setOpenModal('form-elements')
        setHasCompletedModal(true)
        return
      }
    }

    setCounter(counter + 1) // Hacer validaciones para que el modal
    // no se muestre en caso que el usuario esté suscripto
    // O ya haya completado esto

    if (PREGUNTAS_EMPRESAS.length === 0) return
    const randomIndex = Math.floor(Math.random() * PREGUNTAS_EMPRESAS.length)

    cardsShown.push(PREGUNTAS_EMPRESAS[randomIndex])

    if (cardsShown.length > 4) {
      cardsShown.splice(0, 1)
    }

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailFromLocalStorage,
        question: PREGUNTAS_EMPRESAS[randomIndex],
        type: 'EMPRESA',
      }),
    })
  }

  return (
    <main
      className="flex justify-between flex-col h-[calc(100dvh)]"
      id={
        currentBg
          ? 'company-page'
          : 'bg-[#F2F2F2] dark:bg-[#1F1F1F] dark:text-white'
      }
    >
      {children}
      {counter === 4 && (
        <SuscribeModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <RandomCard
        typeUser="COMPANY"
        cardsShown={cardsShown}
        counter={counter}
      />

      <Footer
        buttonAction={() => {
          handleSuscribe()
        }}
        buttonText="NUEVA CARTA"
      />
    </main>
  )
}
