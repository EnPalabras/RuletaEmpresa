import ShowCards from '@/components/ShowCards'
import Footer from '@/components/Footer'

export default function InitialPage({
  children,
  showModal,
}: {
  children: React.ReactNode
  showModal: () => void
}) {
  return (
    <main
      className={`flex justify-between flex-col h-[calc(100dvh)]
    `}
      id="initial-page"
    >
      {children}
      <ShowCards />
      {/* <div
        style={{
          flex: 3 / 4,
        }}
      /> */}
      <Footer
        buttonAction={() => {
          showModal()
        }}
        buttonText="EMPEZAR"
      />
    </main>
  )
}
