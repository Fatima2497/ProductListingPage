import React from 'react'
import ProductListing from './pages/ProductListing'

const App = () => {
  return (
    <div className='w-full h-screen bg-white p-5'>
      <div className="container mx-auto  w-[85%] mt-20">
      <ProductListing />
      </div>
    </div>
  )
}

export default App