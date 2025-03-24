import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PropTypes from "prop-types";


const ProfileSection = ({badgeContent, userName, userAvatar}) => {
  return (
    <Box
    sx={{
      display: "flex",
      gap: "3em",
      justifyContent: "space-between",
      paddingRight: "3rem",
    }}
  >
        <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingRight: "5px",
        color: "#707175",
      }}
    >
      <IconButton>
        <Avatar
          alt={userName}
          src={userAvatar}
          sx={{ width: 32, height: 32 }}
        ></Avatar>
      </IconButton>
      <Typography>{userName}</Typography>
    </Box>
    <IconButton
      size="large"
      aria-label={`show ${badgeContent} new notifications`}
      color="inherit"
      sx={{
        width: "32",
        height: "32",
        color: "#707175",
      }}
    >
      <Badge badgeContent={badgeContent} color="secondary">
        <NotificationsIcon sx={{ color: "#707175" }} />
      </Badge>
    </IconButton>
  </Box>  )
}

ProfileSection.propTypes = {
    badgeContent: PropTypes.number,
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.string,
  };
  
  ProfileSection.defaultProps = {
    badgeContent: 0,
    userAvatar: "",
  };
export default ProfileSection