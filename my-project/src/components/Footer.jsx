import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <div className=''>
 <div className="text-center mt-5">
  <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
    <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-12 mr-3 sm:h-9" alt=" Logo" />
    Monojit
  </a>
  <span className="block text-sm text-center text-gray-500">© {new Date().getFullYear()}. All Rights Reserved.
    Built with 
      monojit
  </span>
  <ul className="flex justify-center mt-5 space-x-5">
  </ul>
</div>
   </div>
  )
}

export default Footer