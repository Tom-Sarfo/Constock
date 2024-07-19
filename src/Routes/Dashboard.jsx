import ArrowScroll from "../Components/ArrowScroll";
import { useRef, useState } from "react";
import { scrollToWidth } from "../Utils/Constant";
import { Status, Title } from "../Components/Styled";
import WatchList from "../Components/WatchList";
import TableComponent from "../Components/TableComponent";
import AssetAvatar from "../Components/AssetAvatar";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import InputField from "../Components/InputField";
import { myAsset } from "../Utils/Data";

const columns = [
  {
    id: "asset",
    label: "Constock",
    minWidth: 170,
    format: (value) => (
      <AssetAvatar
        assetName={value.name}
        initials={value.initials}
        imgUrl={value.imgUrl}
      />
    ),
  },
  { id: "price", label: "Price", minWidth: 100, align: "center" },
  {
    id: "priceChange",
    label: "Price Change",
    minWidth: 170,
    align: "center",
    format: (value) => (
      <Status
        statusColor={value.rate ? "#37AEB1" : "#AD2828"}
        rateColor={
          value.rate ? "rgb(55, 174, 177, 0.28)" : "rgb(173, 40, 40, 0.22)"
        }
        icon={
          value.rate ? (
            <FontAwesomeIcon icon={faArrowUp} color="#37AEB1" />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} color="#AD2828" />
          )
        }
        label={`${value.percentage}%`}
        small
      />
    ),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    format: (value) => (
      <Button
        variant="outlined"
        size="small"
        color="secondary"
        sx={{
          textTransform: "capitalize",
          "&:hover": {
            bgcolor: "#AD2828",
            color: "#FFFFFF",
          },
        }}
      >
        {value}
      </Button>
    ),
  },
];

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

      <div style={{ marginTop: "60px" }}>
        <TableComponent
          columns={columns}
          rows={myAsset}
          filterComponent={
            <InputField
              icon={<FontAwesomeIcon icon={faFilter} color="#CCCCCC" />}
              placeholder="Filter Assets"
            />
          }
        />
      </div>
    </div>
  );
}

export default Dashboard;
