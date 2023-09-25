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
          className="bg-[#AFB0DE] min-w-[350px] text-4xl text-center uppercase px-12 py-4 hover:opacity-90 text-white font-bold  rounded mx-auto"
        >
          {buttonText}
        </button>
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
    </footer>
  )
}
