import { ToggleSwitch } from 'flowbite-react'

export default function Stepper({
  activeStep,
  currentBg,
  setCurrentBg,
}: {
  activeStep: number
  currentBg: boolean
  setCurrentBg: (type: boolean) => void
}) {
  return (
    <>
      <div
        className={`flex flex-row justify-between items-center w-full py-6 mb-10 md:py-0
          ${activeStep === 0 && 'justify-center'}
      `}
      >
        <div
          className={`w-1/3 flex justify-center
        ${activeStep === 0 && 'hidden'}
        `}
        >
          <button>Hola</button>
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
    </>
  )
}

//  ;<ul className="flex flex-wrap mx-20 w-1/3">
//    {TYPE_USER.map((typeUser) => (
//      <li className="mr-2" key={typeUser.id}>
//        <div
//          className={`inline-block p-4 border-transparent rounded-t-lg text-white cursor-pointer ${
//            currentStep === typeUser.id
//              ? 'text-blue-600 border-blue-600 border-b-2 bg-blue-400'
//              : ''
//          }`}
//          onClick={() => setCurrentStep(typeUser.id)}
//        >
//          {typeUser.name}
//        </div>
//      </li>
//    ))}
//  </ul>
