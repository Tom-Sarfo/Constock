import WatchListCard from "../Components/WatchListCard";
import PropTypes from "prop-types";

function WatchListContainer({ innerRef }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
        scrollBehavior: "smooth",
      }}
      className="watchList"
      ref={innerRef}
    >
      {/* pass this watchListCard as a prop to this component and loop through to keep it reusable */}
      <WatchListCard percentage={65} />
      <WatchListCard percentage={34} />
      <WatchListCard percentage={40} />
      <WatchListCard percentage={22} />
      <WatchListCard percentage={70} />
    </div>
  );
}

WatchListContainer.propTypes = {
  innerRef: PropTypes.object,
};

export default WatchListContainer;
