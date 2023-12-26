import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import  { GlobalContext } from '../context'

const Navbar = () => {
  const {search,setSearch,handleSubmit} = useContext(GlobalContext)

  // console.log(data);
  return (
    <nav className='flex mb-10'>
      <Link to='/' className='font-bold text-2xl ml-20 mt-5 text-neutral-600'>Food Recipe</Link>
      <form onSubmit={handleSubmit}>
        <input className='inp flex bg-white/75 justify-center ml-52 mt-4 outline-none rounded-full
        px-20 py-3'
        type="text"
        name='search'
        placeholder='Enter item...'
        value={search}
        onChange={(event)=>{setSearch(event.target.value)}} />
      </form>
      <ul className="flex ml-52 mt-6">
        <li className='text-xl font-semibold mr-9 text-neutral-600'><Link to='/details/:id'>Details</Link></li>
        <li className='text-xl font-semibold text-neutral-600'><Link to='/favourite'>Favourite</Link></li>
        
      </ul>
      
    </nav>
  )
}

export default Navbar
