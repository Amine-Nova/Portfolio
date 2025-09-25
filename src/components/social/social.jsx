import React from 'react'

const social = () => {
  return (
    <div className='flex gap-8'>
      <a id='github' href='https://github.com/Amine-Nova' target='_blank'>
        <svg className="w-6 h-6 stroke-1 hover:scale-125 transition-transform duration-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g clipPath="url(#a)">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.375 19.792c-5.208 1.562-5.208-2.605-7.292-3.125m14.584 6.25v-4.032a3.51 3.51 0 0 0-.98-2.718c3.271-.365 6.709-1.605 6.709-7.292 0-1.454-.56-2.853-1.563-3.906a5.281 5.281 0 0 0-.093-3.927s-1.23-.365-4.073 1.541a13.938 13.938 0 0 0-7.292 0C6.531.677 5.302 1.042 5.302 1.042a5.281 5.281 0 0 0-.094 3.927 5.667 5.667 0 0 0-1.562 3.937c0 5.646 3.437 6.886 6.708 7.292a3.511 3.511 0 0 0-.979 2.687v4.032"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h25v25H0z" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a id='facebook' href='https://www.facebook.com/amine.bm.7393' target='_blank'>
        <svg className="w-6 h-6 stroke-1 hover:scale-125 transition-transform duration-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M18.75 2.083h-3.125a5.208 5.208 0 0 0-5.208 5.209v3.125H7.292v4.166h3.125v8.334h4.166v-8.334h3.125l1.042-4.166h-4.167V7.292a1.041 1.041 0 0 1 1.042-1.042h3.125V2.083Z"
          />
        </svg>
      </a>
      <a id='linkedin' href='https://www.linkedin.com/in/amine-ben-moussa-3667442a0/' target='_blank'>
        <svg className="w-6 h-6 stroke-1 hover:scale-125 transition-transform duration-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M16.667 8.333a6.25 6.25 0 0 1 6.25 6.25v7.292H18.75v-7.292a2.083 2.083 0 0 0-4.167 0v7.292h-4.166v-7.292a6.25 6.25 0 0 1 6.25-6.25ZM6.25 9.375H2.083v12.5H6.25v-12.5ZM4.167 6.25a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
          />
        </svg>
      </a>
      <a id='instagram' href='https://www.instagram.com/amineebenmoussa' target='_blank'>
        <svg className="w-6 h-6 stroke-1 hover:scale-125 transition-transform duration-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g clipPath="url(#a)">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M18.23 6.77h.01M7.292 2.084h10.416a5.208 5.208 0 0 1 5.209 5.209v10.416a5.208 5.208 0 0 1-5.209 5.209H7.292a5.208 5.208 0 0 1-5.209-5.209V7.292a5.208 5.208 0 0 1 5.209-5.209Zm9.375 9.76a4.167 4.167 0 1 1-8.244 1.223 4.167 4.167 0 0 1 8.244-1.222Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h25v25H0z" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  )
}

export default social