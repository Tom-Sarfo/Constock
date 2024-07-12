import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CardHeader from "@mui/material/CardHeader";

import PropTypes from "prop-types";

function AssetAvatar({ imgUrl, assetName, initials, style }) {
  return (
    <CardHeader
      avatar={
        <Avatar
          sx={{ bgcolor: "primary", style }}
          variant="square"
          src={imgUrl && imgUrl}
          aria-label="Constock asset"
        >
          {!imgUrl && assetName[0]}
        </Avatar>
      }
      title={initials}
      subheader={assetName}
    />
  );
}

AssetAvatar.propTypes = {
  assetName: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  style: PropTypes.object,
  initials: PropTypes.string.isRequired,
};

export default AssetAvatar;
