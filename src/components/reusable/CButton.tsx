import { ButtonProps } from "@mui/material";

interface Props extends ButtonProps{
  onClicked: () => void;
  children: React.ReactNode;
}

const Button = ({ onClicked, children, ...props }: Props) => {
  return (
    <Button variant="contained" onClicked={onClicked}>
      {children}
    </Button>
  );
};

export default Button;
