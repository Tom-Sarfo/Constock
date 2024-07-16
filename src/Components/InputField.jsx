import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

function InputField({ icon, placeholder }) {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "281px",
          height: "43px",
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "1px solid #CCCCCC",
          borderRadius: "20px",
          paddingLeft: "10px",
          paddingRight: "4px",
          color: "#CCCCCC",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          inputProps={{ "aria-label": "search google maps" }}
          size="small"
        />
        {icon && (
          <IconButton type="button" sx={{ p: "10px" }} aria-label="icon">
            {icon}
          </IconButton>
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
