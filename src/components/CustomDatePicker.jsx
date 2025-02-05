import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import heLocale from "date-fns/locale/he";
import TextField from "@mui/material/TextField";

const CustomDatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={heLocale}>
      <MobileDatePicker
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        sx={{
          position: "relative",
          
        }}
        slotProps={{
          textField: {
            sx: {
              width: "140px",
              height: "50px",
              backgroundColor: "#3f3f3f",
              borderRadius: "25px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.4s ease-in-out", // אנימציה חלקה
              "&:hover": {
                transform: "scale(0.95)", // כיווץ קטן בהובר
              },
              "& .MuiInputBase-input": {
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
