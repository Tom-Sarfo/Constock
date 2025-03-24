import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import { ActiveBar } from "./Styled";
import { Link } from "react-router-dom";

function MenuCard({ menuTitle, icon, styles, active, onClick, routeTo }) {
  return (
    <MenuList
      sx={styles}
      style={{
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <ActiveBar active={active} style={{ position: 'absolute' }} />
      <MenuItem
        sx={{
          display: "flex",
          alignItems: "baseline",
          "&:hover": {
            paddingRight: "auto",
            transition: "0.3s ease",
          },
        }}
      >
        <Link to={routeTo} style={{ textDecoration: 'none', color: '#9E9E9E', display: 'flex', alignItems: 'center' }}>
          <ListItemIcon>
            <FontAwesomeIcon icon={icon} size="sm" />
          </ListItemIcon>
          <ListItemText>{menuTitle}</ListItemText>
        </Link>
      </MenuItem>
    </MenuList>
  );
}

MenuCard.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  styles: PropTypes.object,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  routeTo: PropTypes.string.isRequired
};

export default MenuCard;
