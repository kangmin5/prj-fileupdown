import React, { useState } from 'react'

const FileOneModal = ({ visibleOne, onCloseOne }) => {
    const [selectedOneFile,setSelectedOneFile] = useState()

    if(!visibleOne) return null;
  return (
      <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
          
          
          FileOneModal
      </div>
  )
}

export default FileOneModal