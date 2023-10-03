import RequestService from "./requestService";

class StudentService extends RequestService {
  
  
  async getStudentInfo() {
    const response = await this.http.get<Student>('/students/me');
    return response.data; 
  }
}


export default new StudentService();