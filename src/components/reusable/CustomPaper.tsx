import { Box, Card, Link, Stack, Typography, styled } from "@mui/material";
import CsPaper from "./CsPaper";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CardImage from "../../assets/id_user_card.svg"; 

interface CustomPaperProps {
  title: string;
  children?: React.ReactNode;
}

const Line = styled("div")({
  width: "100%",
  height: "1px",
  backgroundColor: "#ccc",
  marginTop: "10px",
  marginBottom: "50px",
});

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
});

const CustomPaper = ({ title, children }: CustomPaperProps) => {
  const { name, firstName } = useSelector(
    (state: RootState) => state.user
  );
  return (
    <CsPaper elevation={0} variant="outlined">
      <Typography variant="h6">
        {title} {name && name} {firstName && firstName}
      </Typography>
      <Line />
      <Stack direction="row" justifyContent="space-between" gap={2} alignItems="center">
        <Box>
          <Typography variant="h5">Mettre a jour le profil</Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
            Consulter votre page de profil en cliquant sur L'avatar en Haut à droite
            Là vous pouvez modifier votre image, votre description , votre emplacement et votre mot de passe
          </Typography>
          <Link href="#">Visiter</Link>
        </Box>
        <div style={{ padding: 0 }}>
          <Image src={`${CardImage}`} alt="some" />
        </div>
        {children}
      </Stack>
    </CsPaper>
  );
};

export default CustomPaper;
