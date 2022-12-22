import React, { useState } from 'react'

const FileAddModal = ({ visible, onClose }) => {
    const [isSelected,setIsSelected] = useState(false)
    const [selectedFile, setSelectedFile] = useState()

    if(!visible) return null;

    const handleChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setIsSelected(true)
    }

    const handleSubmit =async()=> {
        const formData = new FormData();
        formData.append('file', selectedFile)
        await fetch(
            'http://localhost:8080/upload', {
                method: 'POST',
                mode: 'cors',
                body: 
                    formData
            }
        )
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result)
            
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
            <div className='bg-white p-4 rounded text-center'>
                <h3 className='text-2xl mb-4 bg-gray-100'>서식추가</h3>
                <form >
                    <input type='file' className='w-100 ' name='file ' onChange={handleChange} />
                        {isSelected ? (
                            <div>
                                <p>Filename: {selectedFile.name}</p>
                                <p>Filetype: {selectedFile.type}</p>
                                <p>Size in bytes: {selectedFile.size}</p>
                                <p>
                                    lastModifiedDate:{' '}
                                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                                </p>
                            </div>
                        ) : (
                            <p>Select a file to show details</p>
                        )}
                    <div className='flex justify-around mt-4'>
                        <button type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 
                            px-4 py-2 text-sm  leading-4 text-white shadow-sm hover:bg-indigo-700 
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={handleSubmit}
                            >등 록</button>
                        <button type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 
                            px-4 py-2 text-sm leading-4 text-white shadow-sm hover:bg-indigo-700 
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={onClose}>나가기</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FileAddModal