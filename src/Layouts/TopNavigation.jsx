import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavContainer } from "../Components/NavContainer";
import { WhiteTypography } from "../Components/Styled";
import PropTypes from "prop-types";


const TopNavigation = ({badgeContent, userName, userAvatar}) =>{
  return (

    <NavContainer>
      <Box sx={{display: 'flex', alignItems: "center"}}>
      <img src="/src/assets/logo.jpg" alt="logo" width= "40" height= "40" style={{ borderRadius: "50%", marginRight: "10px"}}/>
          <WhiteTypography
          sx={{ 
            fontWeight: '700px', 
            fontsize: "24px",
            color: "#000000",
          }}>
            Constock
          </WhiteTypography>
        </Box>
        <Box sx={{display: "flex", gap:"3em", justifyContent: "space-between"}}>
          <IconButton
            size="large"
            aria-label={`show ${badgeContent} new notifications`}
            color="inherit"
            sx={{
              width:"32",
              height: "32",
              color: "#707175"
            }}
          >
            <Badge badgeContent={badgeContent} sx={{ }} color="#707175">
              <NotificationsIcon sx={{ color: "#707175"}}/>
            </Badge>
          </IconButton>
          <Box sx={{display: 'flex', alignItems: "center", justifyContent: "space-around", paddingRight: "5px"}}>
            <IconButton>
              <Avatar
              alt={userName}
              src={userAvatar}
              sx={{ width: 32, height: 32}}
              ></Avatar>
            </IconButton>
            <Typography>
            {userName}
            </Typography>
            </Box>
            </Box>
      </NavContainer>
  )
}

TopNavigation.propTypes = {
  badgeContent: PropTypes.number,
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
};

TopNavigation.defaultProps = {
  badgeContent: 0,
  userName: 'User',
  userAvatar: '',
};

export default TopNavigation