import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import CustomPaper from '../reusable/CustomPaper';
import CustomTabMenu from '../reusable/CustomTabMenu';

interface FeedProps {}

const Feed: FC<FeedProps> = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Stack>
        <CustomTabMenu />
        <CustomPaper title="Bienvenue" />
      </Stack>
    </Box>
  );
};

export default Feed;
