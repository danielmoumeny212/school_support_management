import { Badge, Box, List,Stack, Typography} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSupport, getError, getStatus, getSupports } from "../../features/supportSlice";
import RefreshButton from "../../components/reusable/RefreshButton";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import CsPaper from "../../components/reusable/CsPaper";
import Support from "../../components/reusable/Support";


const Courses =() => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>(); 
  const supportStatus = useSelector(getStatus);
  const supports  = useSelector(getSupports);
  const [reload, setReload] = useState(0);

  const handleRefresh = () => {
    setReload(prevValue => prevValue + 1); 
  }

  useEffect(() => {
     dispatch(fetchSupport());
  },[reload])
 
  return (
    
    <Stack>
     <CsPaper>
     <Stack direction={"row"} spacing={5} alignItems={"center"}>
       <Typography variant="h6">
          {supports && supports[0]?.className} 
       </Typography> 
       <Typography variant="body1">
          Supports
          &nbsp;  &nbsp; <Badge badgeContent={supports.length} color="primary">
        </Badge>
        
       </Typography>
       <Box sx={{ alignSelf: "flex-end" }}>
           <RefreshButton onRefresh={handleRefresh}/>
       </Box>
     </Stack>
     <List>
     <Stack spacing={4} mt={2}>
      {supports.length >= 0 ?  
       supports.map((support, index) => <Support key={index} name={support.name} fileLink={support.file}/>):
        <Typography variant="h4">Aucun Supports de cours disponible</Typography>
      }
     </Stack>
     </List>
     </CsPaper>
    </Stack>
 )
}


export default Courses; 