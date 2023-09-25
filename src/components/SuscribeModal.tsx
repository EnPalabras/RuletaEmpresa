'use client'

import { Label, Modal, TextInput } from 'flowbite-react'
import Link from 'next/link'
import { useState } from 'react'

const CloseIcon = ({
  onClick,
}: {
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-x cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  )
}

export default function SuscribeModal({
  openModal,
  setOpenModal,
}: {
  openModal: string | undefined
  setOpenModal: (modal: string | undefined) => void
}) {
  const [email, setEmail] = useState('')
  const props = { email, setEmail, openModal, setOpenModal }

  const continuePlaying = (): void => {
    setOpenModal(undefined)
  }

  const suscribeUser = (): void => {
    alert('Suscripción exitosa con el mail' + email)
  }

  return (
    <>
      <Modal
        show={props.openModal === 'form-elements'}
        size="xl"
        popup
        onClose={() => props.setOpenModal(undefined)}
        className="py-[25%]"
      >
        {/* <Modal.Header  /> */}
        <Modal.Body className="bg-[#AFB0DE] p-2 pt-0 rounded-md  h-full">
          <div className="absolute top-5 right-5">
            <CloseIcon onClick={() => props.setOpenModal(undefined)} />
          </div>
          <div
            className="flex flex-col py-2 md:flex-row h-full"
            style={{
              height: '100%',
            }}
          >
            <div
              className="w-full md:w-3/5 order-2 px-6 md:px-2 py-4 md:py-4 md:order-1  
             gap-8 text-center"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <h4
                className="
                 text-md md:text-sm
              "
              >
                ¿Estás conectando con estas preguntas?
              </h4>
              <p className="text-md">
                ¿Sabías que realizamos <b>cartas personalizadas</b> y opciones
                de <b>venta al por mayor</b>?
              </p>

              <p className="text-md">
                <b>
                  Podemos ser tu próximo regalo empresarial, hecho a tu medida
                </b>
              </p>
              <Link href="/contacto">
                <button
                  className="bg-[#F2F2F2] text-gray-900 text-sm text-center px-8 py-2 hover:opacity-90 rounded mx-auto
                  shadow-lg
                
                "
                >
                  Conocer más
                </button>
              </Link>
            </div>
            <div
              className="w-full rounded-md min-h-[200px] md:min-h-[300px] bg-cover bg-center 
              order-1 md:order-2 md:w-2/5
              "
              style={{
                backgroundImage:
                  "url('https://acdn.mitiendanube.com/stores/001/705/915/products/desconectados-juego-de-cartas1-be1607a577a92e29f916685182179084-1024-1024.jpg')",
              }}
            ></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
