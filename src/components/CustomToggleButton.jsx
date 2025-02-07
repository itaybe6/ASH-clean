import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const ToggleButton = styled(Button)(({ active  }) => ({

  width: "160px",
  height: "0px",
  borderRadius: "25px",
  backgroundColor: active ? "#f97316" : "#3f3f3f",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // מעבר חלק בכל שינוי צבע
  transition: "transform 0.4s ease-in-out",
  "&:hover": {
    backgroundColor: active ? "#ea580c" : "#525252",
    transform: "scale(0.95)", // אפשר לשנות את המספר לפי העדפה
  },
}));

const CustomToggleButton = ({ active, onClick , Height  , name1 , name2 , left}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={Height} marginLeft={left}>
      <ToggleButton active={active ? 1 : 0} onClick={onClick}>
      {active ? name1 : name2}
      </ToggleButton>
    </Box>
  );
};

export default CustomToggleButton;
