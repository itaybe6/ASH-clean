import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const ToggleButton = styled(Button)(({ theme, active }) => ({
  width: "160px",
  height: "50px",
  borderRadius: "25px",
  backgroundColor: active ? "#f97316" : "#3f3f3f",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: active ? "#ea580c" : "#525252",
  },
}));

const CustomToggleButton = ({ active, onClick , Height}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={Height} marginLeft={"440px"}>
      <ToggleButton active={active ? 1 : 0} onClick={onClick}>
        {active ? "עבודות" : "עבודות עתידיות"}
      </ToggleButton>
    </Box>
  );
};

export default CustomToggleButton;
