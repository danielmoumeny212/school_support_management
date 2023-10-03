interface Student {
  _id: string; 
  userId: string;
  picture: string; 
  classId: string;
  teachers: string[];
}
interface Teacher {
  userId: string; 
  subjects: string[];
  experience: number | null; 
  classes : string[];

}
interface Option {
  value: string;
  label: string;
}
type Submit  = {
  onClose: () => void; 
  reset : any; 

};
interface User {
  _id: string;
  username: string; 
  email: string;
  name: string;
  first_name: string;
  role: string; 
}

interface SidebarItem {
  icon: JSX.Element; 
  to: string;
  text: string;
  index: number;
}
interface Supports {
  _id: string,
  name: string,
  description: string,
  'class': string,
  teacher: string,
  file: string,
  className: string,

}
interface Support {
  name: string,
  description: string,
  teacher: string,
  file: string,
  class: string, 
}
interface Exam{
  _id: string; 
  userId: string; 
  description: string;
  examType: string; 
  formLink: string, 
  date: string; 
  classId: string; 
}

interface Class {
  _id: string; 
  name: string;

}