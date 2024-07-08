import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function ArrowScroll({ scrollHandler }) {
  return (
    <div
      style={{
        display: "flex",
        width: "37px",
        height: "37px",
        borderRadius: "50%",
        padding: "2px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7655FA",
        position: "absolute",
        zIndex: 1,
        marginTop: "130px",
        marginLeft: "52%",
        boxShadow: "-1px 2px 3px black",
        cursor: "pointer",
      }}
      onClick={scrollHandler}
    >
      <FontAwesomeIcon
        icon={faAngleRight}
        size="xl"
        style={{ color: "white" }}
      />
    </div>
  );
}

ArrowScroll.propTypes = {
  scrollHandler: PropTypes.func,
};

export default ArrowScroll;
