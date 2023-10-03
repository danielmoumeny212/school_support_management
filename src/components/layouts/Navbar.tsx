import { Mail, Notifications } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, NavigateOptions } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/authSlice'; 
import { useSelector } from 'react-redux'
import { reset } from '../../features/navSlice';
import { RootState } from '../../app/store'
// import { }

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))



const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navigateOptions: NavigateOptions = {
    replace: true,
  };
  
  const navText = useSelector((state: RootState) => state.nav.navText)
  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login',navigateOptions)
  }
  return (
    <AppBar position="sticky">
      <StyledToolbar variant="dense">
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navText}
        </Typography>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={(e) => setOpen(true)} />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="body2">daniel</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Profil</MenuItem>
        <MenuItem onClick={handleLogout}>Se deconnecter</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
