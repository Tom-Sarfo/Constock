import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import { ActiveBar } from "./Styled";

function MenuCard({ menuTitle, icon, styles, active, onClick }) {
  return (
    <MenuList
      sx={styles}
      style={{
        display: "flex",
        alignItems: "center",
       
      }}
      onClick={onClick}
    >
      <ActiveBar active={active} />
      <MenuItem
        sx={{
          display: "flex",
          alignItems: "baseline",
          "&:hover": { height: "100%", width: "100%" },
        }}
      >
        <ListItemIcon>
          <FontAwesomeIcon icon={icon} size="sm" />
        </ListItemIcon>
        <ListItemText>{menuTitle}</ListItemText>
      </MenuItem>
    </MenuList>
  );
}

MenuCard.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  styles: PropTypes.object,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes,

};

export default MenuCard;
