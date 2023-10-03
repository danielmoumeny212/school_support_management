import { ReplayOutlined } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";

interface RefreshButtonProps extends ButtonProps {
  onRefresh: () => void;
}

const RefreshButton = ({ onRefresh, ...props }: RefreshButtonProps) => {
  return (
    <Button variant="outlined" startIcon={<ReplayOutlined />} onClick={onRefresh} {...props}>
      Rafraichir
    </Button>
  );
};

export default RefreshButton;
