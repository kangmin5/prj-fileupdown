import axios from "axios";

const SERVER_URL = "http://localhost:8080";

class FileService{
    fileList() {
        return axios.get(SERVER_URL + "/filelist")
    }
}