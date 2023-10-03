import axios from "axios";
const BASEURL =  "http://localhost:5000";


/**
 * this function is responsible for making authentication request
 * with the given credentials and returning the result of the request 
 * @param {string} email 
 * @param {string} password
 * @return {AxiosResponse} AxiosResponse.data attribute  
 */
const login = async (email:any , password:any) =>{
     const response = await axios({
      url: BASEURL+ "/auth/jwt/create",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        email,
        password
      },
    }); 
    return response.data;
}

const authService = { login}; 
export default authService;