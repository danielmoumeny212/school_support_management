
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom"; 
const Error = () => {
  return (
    <Container>
      <Typography variant="h1">404</Typography>
      <Typography variant="h1">page not found </Typography>
      <Link to="/login" className="btn">back home </Link>
    </Container>
  );
};
export default Error;


