import React from 'react'

function Box (props) {
  const { bgColor, header, month, day } = props
  return (
    <div className="w-1/3 p-1 text-white">
      <div className="bg-blue-700" style={{ backgroundColor: bgColor }}>
        <div className="p-10">
          <div>
            <div>
              {month}
            </div>
            <div className="font-black">
              {day}
            </div>
            
            
          </div>
          <h1 className="font-semibold text-2xl">{header}</h1>
        </div>
      </div>
    </div>
  )
}

export default Box