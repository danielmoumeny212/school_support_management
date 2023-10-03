import { FC } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectedItem, setNavText } from '../../features/navSlice';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../app/store';

interface NavLinkItemProps {
  to: string;
  icon: JSX.Element;
  text: string;
  index: number;
}

const NavLinkItem: FC<NavLinkItemProps> = ({ to, icon, text, index }) => {
  const dispatch = useDispatch();
  const selectedIndex = useSelector((state:RootState ) => state.nav.selectedIndex);

  const handleItemClick = () => {
    dispatch(selectedItem(index));
    dispatch(setNavText(text));
  };

  const isSelected = index === selectedIndex;

  return (
    <ListItem disablePadding>
      <ListItemButton component={NavLink} to={to} onClick={handleItemClick} selected={isSelected}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavLinkItem;
