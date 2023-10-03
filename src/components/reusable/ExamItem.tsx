import { Visibility } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, styled } from "@mui/material";
import { Link } from "react-router-dom";


interface Props {
  exam: Exam;
}

const CusListItemButton = styled(ListItemButton)({
  width: "20px",
});

const ExamItem = ({ exam }: Props) => {
  const currentDate = new Date(); // Obtenez la date courante

  const isClickable =
    currentDate.toDateString() === new Date(exam.date).toDateString();

  return (
    <ListItem disablePadding>
      <CusListItemButton disabled={!isClickable}>
        <ListItemIcon>
          <Visibility />
        </ListItemIcon>
        {isClickable ? (
          <Link to={`/exams/${exam._id}`}>
            <span>{exam.description}</span>
            <span style={{ marginLeft: "10px", fontSize: "12px" }}>
              {new Date(exam.date).toLocaleDateString()}
            </span>
          </Link>
        ) : (
          <span>
            <span>{exam.description}</span>
            <span style={{ marginLeft: "10px", fontSize: "12px" }}>
              prevu pour {new Date(exam.date).toLocaleDateString()}
            </span>
          </span>
        )}
      </CusListItemButton>
    </ListItem>
  );
};

export default ExamItem;
