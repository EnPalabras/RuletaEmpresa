import { ToggleSwitch } from 'flowbite-react'

const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-back"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"></path>
    </svg>
  )
}

export default function Stepper({
  activeStep,
  currentBg,
  setCurrentBg,
  setActiveStep,
}: {
  activeStep: number
  currentBg: boolean
  setCurrentBg: (type: boolean) => void
  setActiveStep(step: number): void
}) {
  return (
    <div
      className={`flex select-none flex-row justify-between items-center w-full pt-6 md:pt-0
          ${activeStep === 0 && 'justify-center'}
      `}
    >
      <div
        className={`w-1/3 flex justify-center cursor-pointer
        ${activeStep === 0 && 'hidden'}
        `}
        onClick={() => {
          setActiveStep(0)
        }}
      >
        <BackIcon />
      </div>
      <div className="w-1/3 mx-auto">
        <img
          src="//acdn.mitiendanube.com/stores/001/705/915/themes/common/logo-406989337-1661261292-f275c90c94f38041bb3595811ed7d4b31661261293-320-0.webp"
          alt="logo"
          className="mx-auto"
        />
      </div>
      <div
        className={`w-1/3 flex justify-center items-center
        ${activeStep === 0 && 'hidden'}
      `}
        id="toggle"
      >
        <ToggleSwitch
          className=""
          checked={currentBg}
          label=""
          defaultChecked={currentBg}
          onChange={() => {
            setCurrentBg(!currentBg)
          }}
        />
      </div>
    </div>
  )
}
