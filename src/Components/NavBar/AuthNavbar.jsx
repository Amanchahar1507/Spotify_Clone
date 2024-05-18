// import React from 'react'

const AuthNavbar = () => {
    return (
      <div>
        <nav className="h-[50px]  fixed w-full items-center flex">
          <div className="flex items-center w-[60%] m-auto justify-between">
              <div className="flex w-[50%] ">
                  <span>Spotify</span>     
              </div>
  
              <div className=''>
                  Already Registered? <span className='text-blue-400 font-bold'>Login</span> Here
              </div>
          </div>
            
        </nav>

      </div>
    )
  }
  
  export default AuthNavbar
  