import React, { useState } from 'react'

const FileAddModal = ({ visible, onClose }) => {
    const [isSelected,setIsSelected] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)

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
                body: formData
            }
        )
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result)
            onClose(true)

        })
        .catch((error) => {
            console.error('Error:', error);

        })

    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
            <div className='bg-white p-4 rounded text-center'>
                <h3 className='text-2xl mb-4 bg-gray-100'>서식 등록</h3>
                <form >

                    <input type='file' className='w-full block ' name='file ' onChange={handleChange} />
                        {isSelected ? (
                            <div className='mt-4 text-start text-sm'>
                                <p>파일명: {selectedFile.name}</p>
                                <p>파일타입: {selectedFile.type}</p>
                                <p>용량: {selectedFile.size} 바이트</p>
                                <p>수정일:{' '}{selectedFile.lastModifiedDate.toLocaleDateString()}</p>
                            </div>
                        ) : (
                            <p className=' font-sm text-gray-500'>서식 파일을 등록하세요.(,png,pdf,jpg,...)</p>
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