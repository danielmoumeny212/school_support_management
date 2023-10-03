import RequestService from "./requestService";

class ClassService extends RequestService {

  private _baseUrl: string = "http://localhost:5000/classes";
  private _uploadUrl: string = "http://localhost:5000/upload";  

  
   getAll() {
    const request = this.http.get<Class[]>(this._baseUrl+"/"); 
    return request; 
  }
  
  async getClass (classId: string){
    const response = await this.http.get(`${this._baseUrl}/${classId}`)
    return response.data 
  }

  uploadFile(file: FormData) {
    const request = this.http.post(this._uploadUrl, file)
    return request; 
  }

  async getClassSupports(classId: string){
    const response  = await this.http.get(`${this._baseUrl}/${classId}/supports`);
    return response.data 
  }
  async getManyClassesSupports(classIds: string[]){
    let supports: Supports[]  = [];
    for (const classId of classIds){
       const response = await this.http.get(`${this._baseUrl}/${classId}/supports`);
       supports = supports.concat(response.data);
    }
    return supports; 
  }

  async addClassSupport(classId: string, support: Support ){
     const response  = await this.http.put(`${this._baseUrl}/${classId}/supports`, support); 
     return response.data; 
  }

  async getClassExam (classId: string) {
    const response = await this.http.get<Exam[]>(`${this._baseUrl}/${classId}/exams`);
    return response.data; 
  }

  async getManyClassesExam (classIds: string[]){
    let exams: Exam[] = []; 
    for (const classId of classIds ){
      const response = await this.http.get<Exam>(`${this._baseUrl}/${classId}/exams`);
      exams = exams.concat(response.data);
    }
    return exams; 
  }

  async addClassExam(classId: string, exam: Exam, userId: string) {
    const response = await this.http.put<Exam>(`${this._baseUrl}/${classId}/${userId}/addExams`);
    return response.data; 
  }
}

export default new ClassService();