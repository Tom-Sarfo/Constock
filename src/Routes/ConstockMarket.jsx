import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AssetAvatar from "../Components/AssetAvatar";
import { Status, Title } from "../Components/Styled";
import TableComponent from "../Components/TableComponent";
import {
  faArrowDown,
  faArrowUp,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { marketAssets } from "../Utils/Data";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
// import { Paper } from "@mui/material";
import InputField from "../Components/InputField";
import EmptyTableState from "../Components/EmptyTableState";

function ConstockMarket() {
  const columns = [
    {
      id: "asset",
      label: "Constock",
      minWidth: 220,
      format: (value) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarOutlineIcon />
          <AssetAvatar
            assetName={value.name}
            initials={value.initials}
            imgUrl={value.imgUrl}
          />
        </div>
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
          color={value ? "secondary" : "primary"}
          sx={{
            textTransform: "capitalize",
            "&:hover": {
              bgcolor: value ? "#AD2828" : "#7655FA",
              color: "#FFFFFF",
            },
          }}
        >
          {value ? "Sell" : "Buy"}
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <Title label="Constock Market" style={{ marginBottom: "20px" }} />
      {/* <Paper  sx={{  }}> */}
        <TableComponent
          rows={marketAssets}
          columns={columns}
          maxHeight={750}
          filterComponent={
            <InputField
              icon={<FontAwesomeIcon icon={faFilter} color="#CCCCCC" />}
              placeholder="Filter Assets"
            />
          }
          isEmptyState={!marketAssets.length ? <EmptyTableState /> : null}
        />
      {/* </Paper> */}
    </div>
  );
}

export default ConstockMarket;
