import axios from "axios";

const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "https://bw-pt-pintereach-1-ebi-backend.herokuapp.com",  //input in api
        headers: {
            Authorization: token
        }
    });
}

export default AxiosWithAuth;