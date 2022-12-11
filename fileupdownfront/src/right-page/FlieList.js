import axios from "axios";
import { useEffect, useState } from "react"
import FileAddModal from "./FileAddModal";
import FileOneModal from "./FileOneModal";

const FlieList = () => {
  const [syncFiles ,setSyncFiles] = useState([])
  const [showFileAddModal,setShowFileAddModal] = useState(false)
  

  const [showFileOneModal, setShowFileOneModal] = useState(false)
  
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:8080/filelist`);
    setSyncFiles(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [syncFiles])

  const handleOnClose=()=>{
    setShowFileAddModal(false);
  }
  const handleFileOneClose = () => {
    setShowFileOneModal(false)
  }

  return (
  
      <div className='mb-4 w-full '>
          <h1 className="text-4xl font-bold mb-2 ">서식 목록</h1>
          <hr className="my-8 h-px bg-gray-500 border-0 dark:bg-gray-700 opacity-70"></hr>
          <button
          type="button"
          className="mb-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 
          focus:ring-indigo-500 focus:ring-offset-2"
          onClick={()=>setShowFileAddModal(true)}
          > 서식 추가 </button>
          <table className="w-full bg-gray-300 rounded-lg ">
              <thead>
                  <tr className="h-8 bg-blue-500 text-white">
                    <th className="w-1/12 text-center">아이디</th>
                    <th className="w-1/12 text-center hidden">ID</th>
                    <th className="w-5/12 text-center">파일명</th>
                    <th className="w-5/12 text-center">파일타입</th>
                    {/* <th className="w-3/12 text-center">파일타입</th> */}
                  </tr>
              </thead>
              <tbody>
                  {syncFiles?.map((item,index) => 
                  <tr key={item[0]} className="hover:bg-slate-500 hover:text-white cursor-pointer">
                    <td className="w-1/12 text-center h-6">{index }</td>
                    <td className="w-1/12 text-center h-6 hidden">{item[0] }</td>
                    <td className="w-5/12 text-center h-6">{item[1]}</td>
                    <td className="w-5/12 text-center h-6">{item[2]}</td>
                  </tr>
                  )}
              </tbody>
          </table>
          <FileAddModal visible={showFileAddModal} onClose={handleOnClose} />
          <FileOneModal visibleOne={showFileOneModal} onCloseOne={handleFileOneClose} />
      </div>
  
  )
}

export default FlieList