import { FC } from 'react';
import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, Paper, Stack, Typography, styled } from '@mui/material'
import { Campaign, Person } from '@mui/icons-material';

interface RightbarProps {}

const WelcomePaper = styled(Paper)({
  width: '80%',
  padding: '10px',
  margin: '10px'
});

const Rightbar: FC<RightbarProps> = () => {
  return (
    <Box flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <Stack>
          <WelcomePaper elevation={0} variant="outlined">
            <Typography variant="h5">Annonces</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="span">
                  <ListItemIcon>
                    <Campaign />
                  </ListItemIcon>
                  <Link href="#">Aucune</Link>
                </ListItemButton>
              </ListItem>
            </List>
          </WelcomePaper>
          <WelcomePaper elevation={0} variant="outlined">
            <Typography variant="h5">Status</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton component="span">
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  inscrit 26 avril 2023
                </ListItemButton>
              </ListItem>
            </List>
          </WelcomePaper>
        </Stack>
      </Box>
    </Box>
  );
};

export default Rightbar;
