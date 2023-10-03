import RequestService from "./requestService";


class TeacherService extends RequestService {

  async getTeacherInfo(){
    const response = await this.http.get<Teacher>('/teachers/me'); 
    return response.data; 
  }
}

export default new TeacherService(); 
