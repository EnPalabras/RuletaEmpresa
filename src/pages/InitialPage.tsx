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
      className={`min-h-screen flex-col justify-between
   
    `}
      id="initial-page"
    >
      {children}
      <ShowCards />
      <div
        style={{
          flex: 1,
        }}
      />
      <Footer
        buttonAction={() => {
          showModal()
        }}
        buttonText="EMPEZAR"
      />
    </main>
  )
}
