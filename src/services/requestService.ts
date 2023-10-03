import axios from 'axios';

abstract class RequestService{
   http = axios.create({
    baseURL: 'http://localhost:5000'
   });
  
   constructor() {
    this.http.interceptors.request.use((config) => {
   const accessToken = localStorage.getItem('accessToken');
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }, (error) => {
      return Promise.reject(error);
    });
  }
   
}
export default RequestService; 