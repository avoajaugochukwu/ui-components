import React from 'react'
import { useHistory } from 'react-router-dom'
import arrow_white from '../img/iconfinder_4829869_arrow_next_right_icon_white.svg'
import arrow_black from '../img/iconfinder_4829869_arrow_next_right_icon_black.svg'


function Box(props) {
  const { bgColor, header, month, day, url } = props

  const history = useHistory()
  
  const handleClick = () => {
    history.push(`/${url}`)
  }

  return (
    <div className={`w-1/3 p-1 ${bgColor ? 'text-white' : 'text-black'} cursor-pointer`} onClick={handleClick}>
      <div className={`${bgColor ? 'bg-purple-900 hover:bg-purple-800 ' : 'bg-gray-200 hover:bg-gray-300'}`} >
        <div className="p-10 h-80">
          <div>
            <div>
              {month}
            </div>
            <div className="font-black">
              {day}
            </div>
          </div>
          <div className="font-semibold text-2xl pt-5 pb-10">
            {header}
          </div>
          <div className="flex justify-between pt-10">
            <div>
              <p>Figma to React</p>
              <p>2 hours</p>
            </div>
            <div className="ml-10 r-0">
              <img src={`${bgColor ? arrow_white : arrow_black}`} className="arrow" alt="arrow" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Box