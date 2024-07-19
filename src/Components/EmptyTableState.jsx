import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@mui/material/Button";

function EmptyTableState() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        placeItems: "center",
        height: "58.5vh",
        marginLeft: "370px",
      }}
    >
      <Button
        variant="contained"
        startIcon={
          <FontAwesomeIcon icon={faSackDollar} color="#ffffff" size="sm" />
        }
        sx={{
          display: "flex",
          alignItems: "center",
          textTransform: "capitalize",
          paddingTop: "4px",
          paddingBottom: "4px",
          fontSize: "20px",
          width: "200px",
          "&:hover": {
            bgcolor: "#7655FA",
          },
        }}
        size="large"
      >
        Issue stock
      </Button>
      <center>
        <p style={{ color: "#CCCCCC" }}>
          Float shares of your content revenue with your audience
        </p>
      </center>
    </div>
  );
}

export default EmptyTableState;
