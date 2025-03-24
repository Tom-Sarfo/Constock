import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";


function InputField({ icon, placeholder }) {

    const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: isMobile? "328px" : "281px",
          height: isMobile ? "44px" : "32px",
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "1px solid #CCCCCC",
          borderRadius: isMobile? "5px" : "20px",
          paddingLeft: "10px",
          paddingRight: "4px",
          color: "#CCCCCC",
        }}
      >
      {isMobile ? (
        <div>
          {icon && (
          <IconButton type="button" sx={{ p: "10px" }} aria-label="icon" size="small">
            {icon}
          </IconButton>
                )}
          <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          inputProps={{ "aria-label": "search google maps" }}
          size="small"
                />
        </div>
    ): 
        (<div>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={placeholder}
            inputProps={{ "aria-label": "search google maps" }}
            size="small"
          />
          {icon && (
            <IconButton type="button" sx={{ p: "10px" }} aria-label="icon" size="small">
              {icon}
            </IconButton>
          )}
        </div>
        )}
      </Paper>
    </div>
  );
}

InputField.propTypes = {
  icon: PropTypes.object,
  placeholder: PropTypes.string,
};

export default InputField;
