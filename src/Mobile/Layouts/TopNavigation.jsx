import { faBars, faLineChart } from "@fortawesome/free-solid-svg-icons";
import { MobileNav,MobileTypography } from "../../Components/Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import PropTypes from 'prop-types';

const TopNavigation = ({toggleMenu}) => {


  return (
  <MobileNav>
      <Box sx={
        {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '0px 22px'
        }
      } >
        <Box
        onClick= {toggleMenu}
        sx={{
          color: '#707175'
        }}
        >
          <FontAwesomeIcon icon={faBars} size="2x"/>
        </Box>
        <MobileTypography>Constock</MobileTypography>
        <Box
        sx={{
          color: '#707175'
        }}
        >
          <FontAwesomeIcon icon={faLineChart} size="2x" />
        </Box>
      </Box>
  </MobileNav>
  );
};

export default TopNavigation;

TopNavigation.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};