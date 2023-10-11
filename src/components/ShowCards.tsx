export default function ShowCards() {
  return (
    <div className="container select-none">
      <div className="card-container">
        <div className="card">
          <div className="flex h-full items-center justify-center">
            <p className="text-[#AFB0DE] font-bold text-3xl">
              <span
                style={{
                  letterSpacing: '0.18em',
                }}
              >
                ROMPER
              </span>{' '}
              <br />{' '}
              <span
                style={{
                  letterSpacing: '0.07em',
                }}
              >
                EL HIELO
              </span>
            </p>
          </div>
        </div>
        <div className="card stacked"></div>
        <div className="card stacked second"></div>
        <div className="card stacked third"></div>
        <div className="card stacked last"></div>
      </div>
    </div>
  )
}
