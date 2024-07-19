import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Status, Title } from "../Components/Styled";
import TableComponent from "../Components/TableComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faFilter,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import AssetAvatar from "../Components/AssetAvatar";
import EmptyTableState from "../Components/EmptyTableState";
import InputField from "../Components/InputField";

function FloatConstock() {
  const floatedConstock = [];
  const columns = [
    {
      id: "asset",
      label: "Constock",
      minWidth: 220,
      format: (value) => (
        <div style={{ display: "flex", alignItems: "center" }}>
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
      <Title label="Float Constock" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1115px",
          marginTop: "1rem",
          gap: "20px",
        }}
      >
        {!floatedConstock ? (
          <Button
            variant="contained"
            startIcon={
              <FontAwesomeIcon icon={faSackDollar} color="#ffffff" size="sm" />
            }
            sx={{
              display: "flex",
              alignItems: "center",
              textTransform: "capitalize",
              paddingTop: "4px",
              paddingBottom: "4px",
              fontSize: "20px",
              width: "200px",
              marginLeft: "auto",
              justifyContent: "flex-end",
              "&:hover": {
                bgcolor: "#7655FA",
              },
            }}
            size="large"
          >
            Issue stock
          </Button>
        ) : null}

        {/* <Paper elevation={2}> */}
          <TableComponent
            columns={columns}
            isEmptyState={!floatedConstock.length ? <EmptyTableState /> : null}
            filterComponent={
              <InputField
                icon={<FontAwesomeIcon icon={faFilter} color="#CCCCCC" />}
                placeholder="Filter Assets"
              />
            }
          />
        {/* </Paper> */}
      </div>
    </div>
  );
}

export default FloatConstock;
