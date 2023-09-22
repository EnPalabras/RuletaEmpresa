'use client'

import CompanyPage from '@/pages/CompanyPage'
import InitialPage from '@/pages/InitialPage'
import UserPage from '@/pages/UserPage'
import { useState, useEffect } from 'react'
import Stepper from '@/components/Stepper'
import InitModal from '@/components/InitModal'

export default function Home() {
  const [activeStep, setActiveStep] = useState(0)
  const [openModal, setOpenModal] = useState<string | undefined>()
  const [currentBg, setCurrentBg] = useState<boolean>(true)

  return (
    <>
      {activeStep === 0 && (
        <InitialPage showModal={() => setOpenModal('form-elements')}>
          <Stepper
            activeStep={activeStep}
            currentBg={currentBg}
            setCurrentBg={setCurrentBg}
          />
          <InitModal
            setCurrentStep={setActiveStep}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </InitialPage>
      )}
      {activeStep === 1 && (
        <UserPage currentBg={currentBg}>
          <Stepper
            activeStep={activeStep}
            currentBg={currentBg}
            setCurrentBg={setCurrentBg}
          />
        </UserPage>
      )}
      {activeStep === 2 && (
        <CompanyPage currentBg={currentBg}>
          <Stepper
            activeStep={activeStep}
            currentBg={currentBg}
            setCurrentBg={setCurrentBg}
          />
        </CompanyPage>
      )}
    </>
  )
}
