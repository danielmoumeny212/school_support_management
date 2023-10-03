import { Book, Home, ManageAccounts, School, Groups, SupervisorAccount} from '@mui/icons-material';


const routes: SidebarItem[] =  [
  {
    icon: <Home />,
    to: '/admin', 
    text: "Accueil",
    index: 0,  
  },
  {
    icon: <ManageAccounts />,
    to: '/admin/account', 
    text: "Compte",
    index: 1,  
  },
 

]

export const sublinks: SidebarItem[] = [
  {
    icon: <SupervisorAccount />,
    to: '/admin/adUser', 
    text: "Administrateur",
    index: 1,  
  },
  {
    icon: <Groups />,
    to: '/admin/teacher', 
    text: "Professeur",
    index: 2,  
  },
  {
    icon: <School />,
    to: '/admin/student', 
    text: "Etudiant",
    index: 3,  
  },
 
]

export default routes; 