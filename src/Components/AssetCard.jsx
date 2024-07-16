import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AssetAvatar from "./AssetAvatar";
import { Status } from "./Styled";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function AssetCard({ assetData }) {
  return (
    <div
      style={{
        display: "flex",
        width: "420px",
        // height: "78px",
        alignItems: "center",
        border: "1px solid #CCCCCC",
        borderLeft: "none",
        borderRight: "none",
        justifyContent: "space-between",
        paddingRight: "1.3rem",
      }}
    >
      <AssetAvatar
        imgUrl={assetData.imgUrl}
        assetName={assetData.assetName}
        initials={assetData.initials}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "1rem",
          marginLeft: "-50px",
        }}
      >
        <p>${assetData.price}</p>
        <Status
          small
          statusColor={assetData.rate ? "#37AEB1" : "#AD2828"}
          rateColor={
            assetData.rate
              ? "rgb(55, 174, 177, 0.28)"
              : "rgb(173, 40, 40, 0.22)"
          }
          label="0.4%"
          icon={
            assetData.rate ? (
              <FontAwesomeIcon icon={faArrowUp} color="#37AEB1" />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} color="#AD2828" />
            )
          }
        />
      </div>
      <Button
        variant="contained"
        size="small"
        color={assetData.owned ? "secondary" : "primary"}
        sx={{
          textTransform: "capitalize",

          "&:hover": {
            bgcolor: assetData.owned ? "rgb(173, 40, 40, 0.82)" : "#7655FA",
          },
        }}
      >
        {assetData.owned ? "Sell" : "Buy"}
      </Button>
    </div>
  );
}

AssetCard.propTypes = {
  assetData: PropTypes.object.isRequired,
};

export default AssetCard;
