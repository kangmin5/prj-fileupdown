import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate();

    const imageClick = () => {
        navigate("/");
    }
  return (
    <div className="logo">
        <img src="logo.png" alt="Logo"  onClick={imageClick}/>
    </div>
  )
}

export default Logo