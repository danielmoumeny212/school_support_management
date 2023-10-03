import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface ColorTabsProps {}

const ColorTabs = (props: ColorTabsProps) => {
  const [value, setValue] = useState<string>('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Tableau de bord" />
        <Tab value="two" label="Actualité" />
        <Tab value="three" label="Bienvenue" />
      </Tabs>
    </Box>
  );
};

export default ColorTabs;
