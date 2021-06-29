import vector from './img/curved_vector.svg'
import dot_element from './img/dot_element_2.svg'

function Services () {
  return (
    <div className="relative">
      <div className="bg-blue-900 relative mr-24">
        <img src={vector} className="absolute left-0 top-0 z-0" />
        <img src={dot_element} className="absolute right-0 top-0 z-0" />
      </div>
      <div className="flex flex-wrap mx-60">
        <div className=" w-1/3 p-3  z-50 ">
          <div className="h-40  rounded-lg shadow-lg bg-white">
            f
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className="h-40  rounded-lg shadow-lg bg-white">
            f
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className="h-40  rounded-lg shadow-lg bg-white">
            f
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className="h-40  rounded-lg shadow-lg bg-white">
            f
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className="h-40  rounded-lg shadow-lg bg-white">
            f
          </div>
        </div>
        <div className=" w-1/3 p-3  z-50 ">
          <div className="h-40  rounded-lg shadow-lg bg-white">
            f
          </div>
        </div>
      </div>
      <div className="h-80 bg-gray-300 w-full">

      </div>
    </div>
  )
}

export default Services