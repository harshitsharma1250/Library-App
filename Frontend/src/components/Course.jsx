import React from 'react'
import Cards from '../components/Cards'
import list from '../../public/list.json'
import {Link} from'react-router-dom' 
function Course() {
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 relative'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>HERE</span></h1>
            <p className='mt-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium delectus, cupiditate harum vero eos, natus sapiente est nulla officia rerum beatae exercitationem blanditiis adipisci quis vel nesciunt iure non accusamus provident iusto, quisquam odit quas qui! Voluptate praesentium voluptatum sit.</p>
            <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'> Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
      </div>
    </>
  )
}

export default Course
