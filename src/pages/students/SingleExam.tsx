import { CircularProgress, Container, styled} from "@mui/material"
import CsPaper from "../../components/reusable/CsPaper"; 
import { useParams } from "react-router-dom"; 
import { useState } from "react";
import { useSelector } from "react-redux";
import { getExams } from "../../features/examSlice";

const Frame = styled("iframe")({
  width: '50rem',
  height: '37rem',
  frameBorder: 0, 
  marginHeight: 0, 
  marginWidth: 0,
  border: 0,
})
const Center = styled(Container)({
    
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
const SingleExam = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {examId} = useParams();
  const  exams = useSelector(getExams)
  const exam = exams.find(exam => exam._id === examId);



  return (
    <CsPaper elevation={0} variant="outlined">
    <Container>
    {isLoading &&  <Center sx={{ height: 40}}><CircularProgress  /></Center>}
    <Frame  src={exam?.formLink} onLoad={() => setIsLoading(false)} loading="lazy"/>
    </Container>
    </CsPaper>
  )
}

export default SingleExam