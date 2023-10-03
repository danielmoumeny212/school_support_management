import { Book, Home, School, HistoryEdu} from '@mui/icons-material'

const routes = [
  {
    icon: <Home />,
    to: '/teacher', 
    text: "Accueil",
    index: 0,  
  },
  {
    icon: <Book />,
    to: '/teacher/cours', 
    text: "Cours", 
    index: 1, 
  },
  {
    icon: <HistoryEdu />,
    to: '/teacher/evaluation', 
    text: "Evaluation", 
    index: 2, 
  },
  {
    icon: <School />,
    to: '/teacher/students', 
    text: "Vos Etudiants", 
    index: 3, 
  },

]
export default routes; 