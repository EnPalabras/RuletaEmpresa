'use client'

import { useEffect, useState } from 'react'

export default function RandomCard({
  typeUser,
  cardsShown,
  counter,
}: {
  typeUser: string
  cardsShown: string[]
  counter: number
}) {
  const [transitionProperty, setTransitionProperty] = useState<string>('')
  const [elementHidden, setElementHidden] = useState<boolean>(false)
  const [secondToLastCard, setSecondToLastCard] = useState<string>('')

  useEffect(() => {
    if (cardsShown.length === 1) {
      setSecondToLastCard('Lanza una nueva carta para empezar a jugar')
      return
    }
    if (cardsShown.length > 1) {
      setSecondToLastCard(cardsShown[cardsShown.length - 1])
    }
    setElementHidden(true)
    setTransitionProperty('translateY(-1000px) translateX(10vw)')
    setTimeout(() => {
      setElementHidden(false)
      setTransitionProperty('translateY(0px)')
    }, 300)
  }, [counter])

  return (
    <div className="container">
      <div className="card-container">
        {cardsShown.map((card, index) => {
          return (
            <div
              key={index}
              className="card searchLast"
              style={{
                transform: `
                ${
                  index === cardsShown.length - 1 &&
                  `${transitionProperty} translate(-50%) rotateY(0deg)`
                }
                
                `,
                color: `${
                  index === cardsShown.length - 1 && elementHidden
                    ? 'transparent'
                    : 'black'
                }`,
                opacity: `${
                  index === cardsShown.length - 1 && elementHidden ? 0 : 1
                }`,
              }}
            >
              <div className="card-header text-base">
                <span style={{ fontWeight: 700 }}>DES</span>CONECTADOS
              </div>
              {card && (
                <p
                  className="mt-1 max-w-2xl
                  px-6 
                  text-lg text-gray-500"
                  style={{}}
                >
                  {index === cardsShown.length - 1 && cardsShown.length > 1
                    ? `${secondToLastCard}`
                    : card}
                </p>
              )}{' '}
              <div className="card-footer">@enpalabrass</div>
            </div>
          )
        })}

        <div className="card stacked"></div>
        <div className="card stacked last"></div>
      </div>
    </div>
  )
}

// export default function RandomCard({
//   typeUser,
//   cardsShown,
// }: {
//   typeUser: string
//   cardsShown: string[]
// }) {
//   console.log(cardsShown)

//   return (
//     <div className="container">
//       <div className="card-container">
//         {cardsShown.map((card, index) => {
//           return (
//             <div key={index} className="card">
//               <div className="card-header text-base">
//                 <span style={{ fontWeight: 700 }}>DES</span>CONECTADOS
//               </div>
//               {card && (
//                 <p
//                   className="mt-1 max-w-2xl
//                   px-6
//                   text-lg text-gray-500"
//                 >
//                   {card}
//                 </p>
//               )}{' '}
//               <div className="card-footer">@enpalabrass</div>
//             </div>
//           )
//         })}

//         <div className="card stacked"></div>
//         <div className="card stacked"></div>
//       </div>
//     </div>
//   )
// }
