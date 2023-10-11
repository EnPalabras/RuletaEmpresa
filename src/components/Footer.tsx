import Link from 'next/link'

const InstagramIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-instagram"
      width="38"
      height="38"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M16.5 7.5l0 .01"></path>
    </svg>
  )
}

const TikTokIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-tiktok"
      width="38"
      height="38"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
    </svg>
  )
}

const FormIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-file-spreadsheet"
      width="38"
      height="38"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
      <path d="M8 11h8v7h-8z"></path>
      <path d="M8 15h8"></path>
      <path d="M11 11v7"></path>
    </svg>
  )
}

export default function Footer({
  buttonAction,
  buttonText,
}: {
  buttonAction: () => void
  buttonText?: string
}) {
  return (
    <footer className="flex mb-2 flex-col gap-4 select-none">
      <div className="w-full flex justify-center">
        <button
          onClick={buttonAction}
          className="bg-[#AFB0DE] text-2xl md:text-4xl text-center uppercase px-12 py-4 hover:opacity-90 
            text-white font-bold mx-auto 
            max-w-[300px]
          "
          style={{
            borderRadius: '10px',
            letterSpacing: '4px',
          }}
        >
          {buttonText}
        </button>
      </div>
      <div className="flex flex-row justify-between">
        <div className="ml-8">
          <Link href="https://www.enpalabras.com.ar/">
            <FormIcon />
          </Link>
        </div>

        <div className="flex flex-row justify-end items-end text-[#AFB0DE] text-purple-900 gap-6 mr-8">
          <div className="flex flex-row justify-around items-center text-black">
            <Link href="https://www.instagram.com/enpalabrass/">
              <InstagramIcon />
            </Link>
          </div>
          <div className="flex flex-row justify-around items-center text-black">
            <Link href="https://www.tiktok.com/enpalabrass">
              <TikTokIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
