
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { listcontext } from '../context/Listprovider'

const Create = () => {
const {handelSubmit, createdata, handelChanges} = useContext(listcontext)
  return (
    <div>
     <div className="bg-blue-200 min-h-screen flex items-center">
  <div className="w-full">
    <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
      <form onSubmit={handelSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Title</label>
          <input type="text" id="name" name="title" placeholder="Put in your title." value={createdata.title} onChange={handelChanges} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
        </div>
        <div className="mb-5">
          <label htmlFor="dis" className="block mb-2 font-bold text-gray-600">Description</label>
          <input type="text" id="dis" name="description" value={createdata.description} placeholder="Put in your description." onChange={handelChanges} className="border border-red-300 shadow p-3 w-full rounded mb-" />
        </div>
        <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Create
