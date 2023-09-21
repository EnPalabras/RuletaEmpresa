'use client'

import { Label, Modal, TextInput } from 'flowbite-react'
import { useState } from 'react'

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

  console.log(props.openModal)

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
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Suscribite a En Palabras
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm text-justify">
              Obtené toda la información sobre nuestros productos y estate al
              tanto de las novedades, bla, bla, bla.
            </p>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Ingresa tu Email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required
                onChange={(e) => props.setEmail(e.target.value)}
              />
            </div>{' '}
            <div className="w-full flex flex-col gap-4 justify-around">
              <button
                className="bg-blue-500 hover:bg-blue-700 rounded-md py-2 text-white"
                onClick={suscribeUser}
              >
                Suscribirme
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 rounded-md py-2 text-gray-800"
                onClick={continuePlaying}
              >
                En otro momento
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
