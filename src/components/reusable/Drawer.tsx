import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type Anchor = 'right';

export default function MyDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({ ...state, right: false });
  };

  const form = (
    <Box
      sx={{ width: 500 }}
      role="presentation"
    >
      <form onSubmit={handleSubmit}>
        <TextField label="Nom" name="lastName" />
        <br />
        <TextField label="Prénom" name="firstName" />
        <br />
        <Button type="submit" variant="contained">Ajouter</Button>
      </form>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>Ajouter</Button>
      <SwipeableDrawer
        anchor="right"
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {form}
      </SwipeableDrawer>
    </div>
  );
}
