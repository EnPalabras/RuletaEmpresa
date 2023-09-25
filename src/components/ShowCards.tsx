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
        <div className="card stacked last"></div>
      </div>
    </div>
  )
}

//  ;<div className="container">
//    <div className="card-container">
//      <div className="card">
//        <div className="card-header">
//          <span style={{ fontWeight: 700 }}>DES</span>CONECTADOS
//        </div>
//        <p>Pregunta 1</p>
//        <div className="card-footer">@enpalabrass</div>
//      </div>
//      <div className="card stacked"></div>
//      <div className="card stacked"></div>
//    </div>
//  </div>
