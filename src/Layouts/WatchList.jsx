import WatchListContainer from "../Components/WatchListContainer";
import PropTypes from "prop-types";

function WatchList({ innerRef }) {
  return (
    <div>
      <WatchListContainer innerRef={innerRef} />
    </div>
  );
}

WatchList.propTypes = {
  innerRef: PropTypes.object,
};

export default WatchList;
