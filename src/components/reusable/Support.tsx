import { Visibility } from '@mui/icons-material'
import {ListItem, ListItemIcon, ListItemText, Stack, Typography, Link} from '@mui/material'

interface SupportProps {
  name: string; 
  fileLink: string;
}

const Support = ({name, fileLink}: SupportProps) => {
  
  return (
    <ListItem disablePadding>
    <Stack  sx={{width: '100%',}} spacing={2} direction="row" alignItems={"center"} justifyContent={"center"}>
      <ListItemIcon onClick={() => window.open(`http://localhost:5000/uploads/${fileLink}`, '_blank')} sx={{ cursor: "pointer"}}>
        <Visibility/>
      </ListItemIcon>
      <ListItemText primary={name} sx={{ textTransform: 'none', fontSize: "15px"} } />
     <Link href={`http://localhost:5000/uploads/${fileLink}`} download>
      <Typography variant="caption">Telecharger</Typography>
    </Link>
    </Stack>
  </ListItem>
  )
}

export default Support;