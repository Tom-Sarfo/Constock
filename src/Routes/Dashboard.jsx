// import PropTypes from "prop-types";
import ArrowScroll from "../Components/ArrowScroll";
import { useRef, useState } from "react";
import { scrollToWidth } from "../Utils/Constant";
import { Title, WatchListCardContainer } from "../Components/Styled";
import WatchList from "../Components/WatchList";

function Dashboard() {
  const [scrollToPosition, setScrollToPosition] = useState(0);
  const watchListContainerRef = useRef();
  return (
    <div
      style={{
        padding: "1.2rem",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <Title label="Watch list" />
      </div>
      <WatchList
        style={{ position: "relative" }}
        innerRef={watchListContainerRef}
      />
      <ArrowScroll
        scrollHandler={() =>
          scrollToWidth(
            100,
            scrollToPosition,
            setScrollToPosition,
            watchListContainerRef
          )
        }
      />
    </div>
  );
}


export default Dashboard;
