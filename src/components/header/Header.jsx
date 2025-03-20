import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const { auth } = useSelector((store) => store);
  return (
    <>
      <div className="h-[54px] bg-red-400 flex items-center justify-between px-4">
        <div className=''>
          <span className='text-white font-bold text-2xl'>logo</span>
          <input type="text" className='border-1 ml-2 rounded-3xl p-2 ' placeholder='Tim tren Facebook'/>
        </div>

        <div className=''>
          <span className='p-3'>Trang chu</span>
          <span className='p-3'>Ban Be</span>
          <span className='p-3'>Cua hang</span>
          <span className='p-3'>Tro choi</span>
          <span className='p-3'>Nhom</span>
        </div>

        {auth?.jwt == null?(<div className=''>
          <span className='p-2 border-2  rounded-2xl me-3 cursor-pointer text-xl text-black font-bold' onClick={() =>{
            navigate("/login")
          }}>Login</span>
          <span className='p-2 rounded-2xl border-2 cursor-pointer text-xl text-white font-bold bg-gray-400' onClick={() =>{
            navigate("/register")
          }}>Register</span>
        </div>):(<div className=''>
          <span className='p-2 border-2  rounded-2xl me-3 cursor-pointer text-xl text-black font-bold' onClick={() =>{
            navigate("/login")
          }}>Hello comeback!</span>
          <span className='p-2 rounded-2xl border-2 cursor-pointer text-xl text-white font-bold bg-gray-400' onClick={() =>{
            navigate("/register")
          }}>Logout</span>
        </div>)}
      </div>
    </>
  )
}

export default Header
