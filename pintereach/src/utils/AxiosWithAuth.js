import axios from "axios";

const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "http://localhost:4000/api/auth",  //input in api
        headers: {
            Authorization: token
        }
    });
}

export default AxiosWithAuth;