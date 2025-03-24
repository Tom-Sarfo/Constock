import NotificationsIcon from "@mui/icons-material/Notifications";
import PropTypes from "prop-types";
import { Avatar, Badge, Box, Container, IconButton, Typography } from "@mui/material";
import BalanceCard from "../Components/BalanceCard";
import AssetsField from "../Components/AssetsField"

const MobiDashboard = ({ badgeContent= 8, userName="Jasmine D.", userAvatar=" " }) => {
  return (
    <Container>
    <Box
    sx={{
      display: "flex",
      gap: "3em",
      justifyContent: "space-between",
      paddingLeft: "0.7rem",
      margin: "32px 0px"
    }}
  >
        <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "#707175",
      }}
    >
      <IconButton
      sx={{
        color: "#D9D9D9"
      }}
      >
        <Avatar
          alt={userName}
          src={userAvatar}
          sx={{ width: 32, height: 32 }}
        ></Avatar>
      </IconButton>
      <Typography color={"#000000"}>{userName}</Typography>
    </Box>
    <IconButton
      size="larger"
      aria-label={`show ${badgeContent} new notifications`}
      color="inherit"
      sx={{
        width: "32",
        height: "32",
        paddingRight: "1.9rem"
      }}
    >
      <Badge badgeContent={badgeContent} color="secondary" variant="dot"  overlap="circular" showZero>
        <NotificationsIcon sx={{ color: "#D9D9D9"}} />
      </Badge>
    </IconButton>
  </Box>
  <BalanceCard
  balance = {467809}
  />
  <AssetsField/>
</Container>
)
}

export default MobiDashboard;

MobiDashboard.propTypes = {
  badgeContent: PropTypes.number,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
};

MobiDashboard.defaultProps = {
  badgeContent: 0,
  userAvatar: "",
};