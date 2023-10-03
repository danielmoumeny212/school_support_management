import { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Paper, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import BackgroundLogin from "../../assets/endless-constellation.png";
import authService from "../../services/authService";
import { login } from "../../features/authSlice";
import { getCurrentUser } from "../../features/userSlice";
import { getCurrentTeacher } from "../../features/teacherSlice";
import { getCurrentStudent } from "../../features/studentSlice";

export default function Login() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await authService.login(
        formData.get("email"),
        formData.get("password")
      );
      localStorage.setItem("accessToken", response.accessToken);
      dispatch(login(response));
      dispatch(getCurrentUser());
      switch (response.userType) {
        case "admin":
          return navigate("/admin");
        case "teacher":
          dispatch(getCurrentTeacher());
          return navigate("/teacher");
        default: 
          dispatch(getCurrentStudent()); 
          return navigate("/"); 
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const CustomPaper = styled(Paper)({
    width: "25rem",
    padding: "15px",
  });
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        height: "100vh",
        backgroundImage: `url(${BackgroundLogin})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <CssBaseline />
      <CustomPaper elevation={3}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {error && (
              <Alert severity="error">
                <AlertTitle>Erreur</AlertTitle>
                "Une erreur s'est produite lors de la connexion. Veuillez
                réessayer."
              </Alert>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi?"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se connecter
            </Button>
          </Box>
        </Box>
      </CustomPaper>
    </Box>
  );
}
