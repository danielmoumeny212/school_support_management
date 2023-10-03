import { Routes , Route } from 'react-router-dom'; 
import Login from './pages/utilities/LoginPage';
import LoginRequiredRoutes from './pages/utilities/LoginRequiredRoute';
import SharedLayout from './pages/students/ShareLayout';
import Feed from './components/students/Feed';
import Courses from './pages/students/Courses';
import Exams from './pages/students/Exams';
import Error from './pages/utilities/Error';
import AdminRoutes from './pages/utilities/AdminRoutes';
import AdminSharedLayout from './pages/admin/AdminSharedLayout';
import AdUser from './pages/admin/AdUser';
import TcUser from './pages/admin/TcUser';
import StUser from './pages/admin/StUser';
import TeacherRoutes from './pages/utilities/TeacherRoutes';
import TeacherSharedLayout from './pages/teachers/TeacherSharedLayout';
import THome from './pages/teachers/THome';
import Evaluation from './pages/teachers/Evaluation';
import TeacherCours from './pages/teachers/TeacherCours';
import TStudents from './pages/teachers/TStudents';
import SingleExam from './pages/students/SingleExam';
import Certificate from './pages/students/Certificate';
import AdHome from './pages/admin/AdHome';

function App() {

  return (
   <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/" element={
       <LoginRequiredRoutes>
        <SharedLayout />
       </LoginRequiredRoutes>
     }>
       <Route index element={<Feed />} /> 
       <Route path="cours" element={<Courses />} />
       <Route path="certification" element={<Certificate />}/>
       <Route path="exams" element={<Exams />}/>
       <Route path="exams/:examId" element={<SingleExam />} />
     </Route>

     <Route path="/teacher" element={
       <TeacherRoutes>
          <TeacherSharedLayout />
       </TeacherRoutes>
     }>
      <Route index element={<THome />} />
      <Route path="/teacher/evaluation"  element={<Evaluation />} />
      <Route path="/teacher/cours"  element={<TeacherCours/>} />
      <Route path="/teacher/students" element={<TStudents />} />
     </Route>
     <Route path="/admin" element={
      <AdminRoutes>
        <AdminSharedLayout />
      </AdminRoutes>
     }>
      <Route index element={<AdHome />} />
      <Route path="/admin/adUser" element={<AdUser/>} />
      <Route path="/admin/teacher" element={<TcUser />} />
      <Route path="/admin/student" element={<StUser />} />
     </Route>
     <Route path="*" element={<Error />} />
   </Routes>
  )
}

export default App
