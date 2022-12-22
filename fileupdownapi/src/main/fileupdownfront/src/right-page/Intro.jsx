import React from 'react'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
    const navigate = useNavigate();
    const clickHandle = () => { 
        navigate("/manual");       
    }
    return (
        <div className='wrap'>
            <div className='intro'>
                <h1 className="title">SYNC-View v 1.0</h1>
                <p className="info">이미지와 PDF를 불러내어 편집 및 여러 작업을 할 수 있습니다. </p>
                <button className="btn" onClick={clickHandle}>매뉴얼 보기 </button>
            </div>
        </div>
  )
}

export default Intro