import "../styles/Drawer.css";
import PropTypes from "prop-types";

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="drawer-backdrop" onClick={onClose}>
          <button className="drawer-close" onClick={onClose}>
            &times;
          </button>
        </div>
      )}

      {/* Drawer Content */}
      <div className={`drawer bottom ${isOpen ? "open" : ""}`}>
        <div className="drawer-content">{children}</div>
      </div>
    </>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
  children: PropTypes.string,
};

export default Drawer;
