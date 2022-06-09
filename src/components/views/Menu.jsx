import React from 'react'

export default function Menu() {
  return (
    <div className="w-1/2">
          <ul className="flex flex-col justify-end items-center gap-7 text-lg ">
            <li className="flex flex-col  duration-200 w-16 hover:-translate-y-1 group cursor-pointer gap-3 translate-x-24 ">
              <div className="bg-gradient-to-tr from-blue-400 to-blue-500 group-hover:shadow-lg  group-hover:shadow-gray-300 duration-200  py-4 rounded-3xl flex justify-center items-center">
                <img
                  width={"50%"}
                  className="group-hover:-translate-y-3 delay-150 duration-300"
                  src="data:image/png;base64,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"
                  alt="Trabajos"
                />
              </div>
              <p className="group-hover:font-bold font-medium uppercase text-sm text-center group-hover:text-sky-900  ">
                Trabajos
              </p>
            </li>
            <li className="flex flex-col duration-200  w-16 hover:-translate-y-1 group cursor-pointer gap-3 translate-x-10">
              <div className="bg-gradient-to-tr from-red-300 via-red-300 to-red-400 group-hover:shadow-lg group-hover:shadow-gray-300 duration-200 h-full py-4 rounded-3xl flex justify-center text-3xl items-center">
                <img
                  width={"60%"}
                  alt="Laboratorio y Practicas"
                  className="group-hover:-translate-y-3 delay-150 duration-200"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEL0lEQVRoge1XXWwUVRT+zsz+lNoWjJEXdyHdFpuaGBK0RUXaxNAusDzwAAW2qVG6mAaCbH3xBY0EX4xKVsuDaKsP2lZqNPzYNBYSaVOIXX6MVdFEWWNmjTH1pS3SzuzOHh+2u126Mzuz2HW3yX7JJHPP+e75zsm5d+5coIgiiljWoFwEFU/fZj2fuqdsSTWFpQyWD+SkAwDQ5PWldeFCX/eS6xU7sBiZ1n8CS7kPln0HigXkG5Z8iGp8oRQA33GMj138tGcwm1iF0gEbgDoS6Mvmfe07s5mY1wJCj3gwsuMNhGo9SRsL1LvF2368ua1jtZkYeS1AqmyEKtoRdjUsGBmlBDoaU6O/Nrf6dhnFyGsBztAIxKgCx62RNB8B5cwYMCoiLwfZM2f9uj4Cvx4D7SagZt4ybYlEq4c++2hSi18om1gBEATgGe7recUO65MApLiLK6JW8bDexIL9lWjytu8GaGB++O2Fvu4NWrxC6UAaLDT3VeKdgWpdnlGgQFC+DOCpNAfzmH9jyeZ7TdAIQ729001eH4D4htbjGXeAOaZlJoLhUvk/YNgB/8aSzYGgnJbskfqSBi1+Yn0XLzQmsewLyNnfaC6WixaWfQcKtoBtra0VZngFW4AaW/H4woim9XiGBZy4qtRr2QNBpe5eEjMLFuillNEtPZ7hJibmgzoSBwE8n3VmAKwD/zzGzB8zUJvUAX4iorZIy33Xm70HjjLzwi2H6LxufpmETo7zA1FSwgBKNNyyYLE5X9xAmr+5ujg7WS7OrbgJwLHYJcQik5uGX71hlWfdKeapCAvVl/rf/1srXMYOqFDaoZ08ANhjqvwcgDdTjVoncCp++fEqpKr4Ie66OQhnaBRSVQNCtR7EBOuDv69zu6t/OJOgMwP79ZIHMuwBZiYm+ABgq/8tHKh/Nvm4O9+eJ1HHa8ymPwQzq5wIu55Ojp2/jUBUZThCo0mb5GrAzConAEwxsOtiX/cXmWLqigeC8nYA6yr+mITjm+/v8q25MoGV0l8A4Lr/mrzVTPJMAn5e3wKmBUnJ1QjVYkO4qvEu3kT9/j+nS1fXGCUPZNgDgXF5EITtT7zbj0c/GUrzT7R5MH54D4gweKTOvsNISDh9u5OAE0a8BJjgj7WUvWMYV8t48sbsWhDcFlnBw+fHNCfWnBuFqETAjG1d47OVGVX67zgJOGYm8QSIcRyf30nb6IuhWUA0IhwCIK69dB32qRnNifapGVR+fQ0AhKggdGQSEUW1CxkuJTooF6NqlxFJ+ytE2AsASlkpVJsVohJJo0TtNsytLIvTGfsAvAwAW/a2e4joFAgPJclnOrPMPYmd8PokInphuPeD9HWsWwDity1p03p8ONZjRkhNvJBA7wEpyf93OJj5FIA1Wk7NJcTx0zdsUkAi4kOpgtnlZwrOHMQsoogiCgH/AgrXUzI3DT6rAAAAAElFTkSuQmCC"
                />
              </div>
              <p className="group-hover:font-bold font-medium text-center uppercase text-sm group-hover:text-sky-900  ">
                Labs
              </p>
            </li>
            <li className="flex flex-col  duration-200  hover:break-normal w-16 hover:-translate-y-1 group cursor-pointer gap-3  translate-x-10">
              <div className="bg-gradient-to-tr from-orange-200 to-orange-300 group-hover:shadow-lg group-hover:shadow-gray-300 duration-200 h-full py-4 rounded-3xl flex justify-center text-3xl items-center">
                <img
                  alt="sobre mi"
                  className="group-hover:-translate-y-3 delay-150 duration-300"
                  width={"60%"}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADG0lEQVRoge2WS0wTURSGv9sOJj4asNaYVDC+EllpcQEbFxoWCKwUHwtMfMSEFSW6Qq26MLoURWNUIiQGTFTQmGh9gLIxGlEjrgQFDQkakVoF4qtMOy6EOkDbaZmptcl8q3vvnHvO+Xvuub2CJFDb2JKtIGoUKBpbahUiVF1VvumN0bGE0Q5rG1uyQ4iXgH3SJ38oKK/cu33LeyPjWYx0BqAgagA7ivBaUHIsKDnAbcAurNJxo+MlQcCfY2MRoQr3trJ+97ay/qDVUjEWrCj27sSR4jEqLt+dLYeoUQRFAmzj66UlJVH3fBz0rQL6AQYGPuU5HQ4UyDzReE2ZbHvL6w2PFRgR0ArW6tZL5zR7RrMHist3Z8sKkc50TAGj8mhg8OvQZoD5WVlXMyRpRjRbtQAV/qAkrXxw8WzMntGsgByiBjE1eS0ypIwZTofjRqL7VNitQfk4sDWWkaaAsWMDwKkjB1ixdHH428mm6zry+8u9prrwuKvnHe7Dx8aCa/eMZhOrz7w6eYA5s2bGn2UUbJN85C5fop5mau3XdQsVFuRNSSARbLNmUliQpyeF+G6haCx2LmDXhvW6EtCL4f8D/xpTQKoxBQDw7QO074BmF7TvhO8fDHEbD8YI6NgPA49B/gEDj6DDY4jbeNB1jYb5/HLi3NcZ0ayzuzfiumvFsmmHNqYC81wT5w5XZLskYEwF8o/CUw/4XoBjNeQfiWim55eOhjECZjthbb0hrhJFt4D+wT7Oe0/Q0fWQLyN+5trs5OeuoaJ0Dwsdi4zIMSa6BDzovIOnvpKAHAiv+YY+4X1yjbbnNzm66zTrXH9fxP9dEx9sqJqQvJqAHMDT4NbjPi50VeDX6M+Evv93TfzsTJ9ReUwb8y2UatJegK4eiHYtJkrq30IpRFcFknEtJkraVyDtBZhNnGrMJk41poBUE4cAMTw+6u59l8xcAHjV81Y9HdKyj6OJlTZgI0DloWPTTGuaKLRqmWhWIBQU+4DPhiSUGH6LVdmnZaQp4P7lutdBSVqF4Ir6OCUPMYxCs8WiFNxtvNCT/HgmJunNb3zN2MGiZTbZAAAAAElFTkSuQmCC"
                />
              </div>
              <p className="group-hover:font-bold  group-hover:break-normal font-medium text-center uppercase text-sm group-hover:text-sky-900  ">
                Acerca de mi
              </p>
            </li>
            <li className="flex flex-col  duration-200  w-16 hover:-translate-y-1 group cursor-pointer gap-3  translate-x-24">
              <div className="bg-gradient-to-tr from-teal-600 to-teal-700 group-hover:shadow-lg group-hover:shadow-gray-300 duration-200 h-full py-4 rounded-3xl flex justify-center text-3xl items-center">
                <img
                  width={"60%"}
                  className="group-hover:-translate-y-3 delay-150 duration-300"
                  alt="contacto"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADG0lEQVRoge2WS0wTURSGv9sOJj4asNaYVDC+EllpcQEbFxoWCKwUHwtMfMSEFSW6Qq26MLoURWNUIiQGTFTQmGh9gLIxGlEjrgQFDQkakVoF4qtMOy6EOkDbaZmptcl8q3vvnHvO+Xvuub2CJFDb2JKtIGoUKBpbahUiVF1VvumN0bGE0Q5rG1uyQ4iXgH3SJ38oKK/cu33LeyPjWYx0BqAgagA7ivBaUHIsKDnAbcAurNJxo+MlQcCfY2MRoQr3trJ+97ay/qDVUjEWrCj27sSR4jEqLt+dLYeoUQRFAmzj66UlJVH3fBz0rQL6AQYGPuU5HQ4UyDzReE2ZbHvL6w2PFRgR0ArW6tZL5zR7RrMHist3Z8sKkc50TAGj8mhg8OvQZoD5WVlXMyRpRjRbtQAV/qAkrXxw8WzMntGsgByiBjE1eS0ypIwZTofjRqL7VNitQfk4sDWWkaaAsWMDwKkjB1ixdHH428mm6zry+8u9prrwuKvnHe7Dx8aCa/eMZhOrz7w6eYA5s2bGn2UUbJN85C5fop5mau3XdQsVFuRNSSARbLNmUliQpyeF+G6haCx2LmDXhvW6EtCL4f8D/xpTQKoxBQDw7QO074BmF7TvhO8fDHEbD8YI6NgPA49B/gEDj6DDY4jbeNB1jYb5/HLi3NcZ0ayzuzfiumvFsmmHNqYC81wT5w5XZLskYEwF8o/CUw/4XoBjNeQfiWim55eOhjECZjthbb0hrhJFt4D+wT7Oe0/Q0fWQLyN+5trs5OeuoaJ0Dwsdi4zIMSa6BDzovIOnvpKAHAiv+YY+4X1yjbbnNzm66zTrXH9fxP9dEx9sqJqQvJqAHMDT4NbjPi50VeDX6M+Evv93TfzsTJ9ReUwb8y2UatJegK4eiHYtJkrq30IpRFcFknEtJkraVyDtBZhNnGrMJk41poBUE4cAMTw+6u59l8xcAHjV81Y9HdKyj6OJlTZgI0DloWPTTGuaKLRqmWhWIBQU+4DPhiSUGH6LVdmnZaQp4P7lutdBSVqF4Ir6OCUPMYxCs8WiFNxtvNCT/HgmJunNb3zN2MGiZTbZAAAAAElFTkSuQmCC"
                />
              </div>
              <p className="group-hover:font-bold font-medium text-center uppercase text-sm group-hover:text-sky-900  ">
                Contacto
              </p>
            </li>
          </ul>
        </div>
  )
}
