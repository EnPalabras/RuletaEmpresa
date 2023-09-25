'use client'

import { createNewContact } from '@/services'
import { Checkbox, Label, Modal, TextInput } from 'flowbite-react'
import { useState } from 'react'

export default function InitModal({
  setCurrentStep,
  openModal,
  setOpenModal,
}: {
  setCurrentStep: (step: number) => void
  openModal: string | undefined
  setOpenModal: (modal: string | undefined) => void
}) {
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const [checked, setChecked] = useState({
    checked: false,
    type: '',
  })
  const props = { openModal, setOpenModal, email, setEmail }

  const saveToLocal = (): void => {
    localStorage.setItem('email', email)
  }

  const uploadContact = async (): Promise<void> => {
    if (!email || email.length < 6 || !email.includes('@')) return
    const response = await createNewContact(email)
  }

  const continueAsCompany = async (): Promise<void> => {
    saveToLocal()
    await uploadContact()
    setCurrentStep(2)
  }

  const continueAsUser = async (): Promise<void> => {
    await uploadContact()
    setCurrentStep(1)
  }

  const handleContinue = async (): Promise<void> => {
    try {
      if (!checked.checked) {
        setError(true)
      }
      if (checked.type === 'empresa') {
        await continueAsCompany()
      } else if (checked.type === 'personal') {
        await continueAsUser()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setOpenModal(undefined)
    }
  }

  return (
    <>
      <Modal
        show={props.openModal === 'form-elements'}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
        className="py-[25%]"
      >
        {/* <Modal.Header /> */}
        <Modal.Body className="bg-[#AFB0DE] rounded-md pt-3 pb-10">
          <div className="space-y-10 mt-8">
            <p className="text-gray-900 text-2xl dark:text-gray-400 text-center">
              Personaliza tu experiencia
            </p>
            <div
              className={`flex flex-col md:flex-row justify-around md:items-center gap-6 px-4 select-none
            
            `}
            >
              <div className="flex flex-row gap-2 items-center">
                <Checkbox
                  id="empresa"
                  className={`focus:ring-0 focus:border-none border-none 
                    ${error && 'border-solid border-2 border-red-500'}
                  `}
                  checked={checked.type === 'empresa' ? checked.checked : false}
                  onChange={() => {
                    setChecked({
                      checked: true,
                      type: 'empresa',
                    })
                    setError(false)
                  }}
                />{' '}
                <Label
                  htmlFor="empresa"
                  style={{
                    userSelect: 'none',
                  }}
                  className="text-md"
                >
                  EMPRESA
                </Label>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Checkbox
                  id="personal"
                  className={`focus:ring-0 focus:border-none border-none
                    ${error && 'border-solid border-2 border-red-500'}
                  `}
                  checked={
                    checked.type === 'personal' ? checked.checked : false
                  }
                  onChange={() => {
                    setChecked({
                      checked: true,
                      type: 'personal',
                    })
                    setError(false)
                  }}
                />{' '}
                <Label
                  htmlFor="personal"
                  style={{
                    userSelect: 'none',
                  }}
                  className="text-md"
                >
                  PERSONAL
                </Label>
              </div>
            </div>
            <div className="flex flex-row gap-6 justify-end items-end px-4">
              <input
                id="email"
                placeholder="name@company.com"
                className="bg-[#AFB0DE] border-b border-gray-900 text-gray-900 w-full py-2 px-3 text-lg focus:outline-none focus:border-gray-900"
                required
                onChange={(e) => props.setEmail(e.target.value)}
              />
              <button
                className="bg-gray-100 hover:bg-gray-200 rounded-md py-2 px-4 text-dark"
                onClick={handleContinue}
              >
                Enviar
              </button>
            </div>{' '}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
