import CardHeader from "@mui/material/CardHeader";
import { WatchListCardContainer } from "./Styled";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import PropTypes from "prop-types";

function WatchListCard({ percentage }) {
  const color = percentage > 50 ? "#37AEB1" : "#AD2828";
  return (
    <WatchListCardContainer style={{ minWidth: "246px" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: "#7655FA",
              "&:hover": {
                bgcolor: "#FFFFFF",
                color: "#7655FA",
              },
            }}
            aria-label="recipe"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7yOxPj3hD3DClETLuIrCGlKh0paAegikdA&s"
          >
            O
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Olivetheboy"
        subheader="OTB"
        sx={{ padding: "0.8rem" }}
      />
      <div style={{ display: "flex", marginTop: "50px", gap: "20px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            marginLeft: "12px",
          }}
        >
          <CircularProgressbar
            value={percentage}
            text={`+${percentage}%`}
            styles={buildStyles({
              pathColor: color,
              textColor: color,
              trailColor: "#D9D9D9",
              backgroundColor: "#FFFFFF",
            })}
          />
        </div>
        <p>
          <b>$25.678</b>
        </p>
      </div>
    </WatchListCardContainer>
  );
}

WatchListCard.propTypes = {
  percentage: PropTypes.number,
};

export default WatchListCard;
