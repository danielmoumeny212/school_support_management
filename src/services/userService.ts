import RequestService from "./requestService";


class UserService extends RequestService {
  
  async getUser(){
    const response = await  this.http.get<User>('/auth/users/me'); 
    return response.data; 
  }
}


export default new UserService();