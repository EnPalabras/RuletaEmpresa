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
      className="icon icon-tabler icon-tabler-brand-tiktok-filled"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z"
        strokeWidth="0"
        fill="currentColor"
      ></path>
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
    <footer className="flex justify-end items-end mb-2 flex-col gap-4">
      <div className="w-full flex justify-center">
        <button
          onClick={buttonAction}
          className="bg-[#AFB0DE] min-w-[250px] text-2xl text-center uppercase px-10 py-3 hover:opacity-90 text-white font-bold  rounded mx-auto"
        >
          {buttonText}
        </button>
      </div>
      <div className="flex flex-row justify-between items-center text-[#AFB0DE] text-purple-900 gap-6 mr-8">
        <div className="flex flex-row justify-around items-center">
          <Link href="https://www.instagram.com/enpalabrass/">
            <InstagramIcon />
          </Link>
          {/* <p>
            <a href="https://www.instagram.com/enpalabrass/">@enpalabrass</a>
          </p> */}
        </div>
        <div className="flex flex-row justify-around items-center">
          <Link href="https://www.tiktok.com/@enpalabrass">
            <TikTokIcon />
          </Link>
          {/* <p>
            <a href="https://www.instagram.com/enpalabrass/">@enpalabrass</a>
          </p> */}
        </div>
      </div>
    </footer>
  )
}
