import { Paper, styled, PaperProps } from "@mui/material";

interface CsPaperProps extends PaperProps {}

const CPaper = styled(Paper)<CsPaperProps>({
  minHeight: '40rem',
  padding: '10px',
  margin: '10px 20px '
});

const CsPaper = ({ children, ...props }: CsPaperProps) => {
  return (
    <CPaper {...props}>
      {children}
    </CPaper>
  );
};

export default CsPaper;
