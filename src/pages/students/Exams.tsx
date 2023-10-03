import { Badge, List, Stack, Typography, Box} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import RefreshButton from "../../components/reusable/RefreshButton";
import { fetchExams, getStatus, getExams} from "../../features/examSlice"; 
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import ExamItem from "../../components/reusable/ExamItem";
import CsPaper from "../../components/reusable/CsPaper";

const Exams = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const examStatus = useSelector(getStatus); 
  const exams = useSelector(getExams);
  const [reloadCount, setReloadCount] = useState(0);
  
  const handleRefresh = () =>{
    setReloadCount(prevValue  => prevValue + 1)
 }
 useEffect(() => {
    dispatch(fetchExams());
 }, [reloadCount])
 
 return (
  <Stack>
    <CsPaper>
      <Stack direction={"row"} spacing={5} alignItems={"center"}>
        <Typography variant="h6">Liste d'examens en cours</Typography>
        <Typography variant="body1">
          En cours &nbsp; &nbsp;{" "}
          <Badge badgeContent={exams.length} color="primary"></Badge>
        </Typography>
        <Box sx={{ alignSelf: "flex-end" }}>
          <RefreshButton onRefresh={handleRefresh}/>
        </Box>
      </Stack>
      <List>
        <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 1.5, mb: 1 }}>
            Nous tenons à vous informer que vous pouvez désormais accéder à
            toutes les évaluations programmées pour ce semestre à l'aide de
            notre nouvelle plateforme en ligne. Pour accéder à une évaluation,
            veuillez cliquer sur le lien correspondant à la date prévue pour
            chaque évaluation. Veuillez noter que les liens ne seront
            cliquables que si la date actuelle correspond à la date de
            l'examen. Si vous rencontrez des problèmes pour accéder à une
            évaluation, veuillez vérifier que vous avez bien la bonne date et
            heure de l'évaluation.
          </Typography>
          {exams.map((exam) => (
            <ExamItem
              key={exam._id}
              exam={exam}
            />
          ))}
        </Stack>
      </List>
    </CsPaper>
  </Stack>
);
}

export default Exams; 