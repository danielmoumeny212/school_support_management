import { Book, Home, RateReview, WorkspacePremium } from '@mui/icons-material';


const routes: SidebarItem[] =  [
  {
    icon: <Home />,
    to: '/', 
    text: "Accueil",
    index: 0,  
  },
  {
    icon: <Book />,
    to: '/cours', 
    text: "Cours", 
    index: 1, 
  },
  {
    icon: <RateReview />,
    to: '/exams', 
    text: "Examens", 
    index: 2, 
  },
  {
    icon: <WorkspacePremium />,
    to: '/certification', 
    text: "Certification", 
    index: 3, 
  },
];

export default routes;
