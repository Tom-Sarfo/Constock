import Button from "@mui/material/Button";
import { Status, Title } from "../Components/Styled";
import TableComponent from "../Components/TableComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import AssetAvatar from "../Components/AssetAvatar";
import EmptyTableState from "../Components/EmptyTableState";
import InputField from "../Components/InputField";
import { floatedConstock } from "../Utils/Data";
import LinearProgress from "@mui/material/LinearProgress";
import { strikePercentage } from "../Utils/Constant";

function FloatConstock() {
  console.log("percentage: ", strikePercentage(1000, 2000));
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
      id: "fundRaised",
      label: "Fund Raised",
      minWidth: 170,
      align: "center",
      format: (value) => (
        <center>
          <div>
            <p>${value.actual}</p>
            <LinearProgress
              variant="determinate"
              value={strikePercentage(value.actual, value.expected)}
              sx={{
                width: "104px",
                borderRadius: "10px",
                bgcolor: "#D9D9D9",
              }}
              color={value.active ? "success" : "secondary"}
            />
          </div>
        </center>
      ),
    },
    {
      id: "status",
      label: "Status",
      minWidth: 100,
      format: (value) => (
        <Status
          statusColor={
            value === "Issued"
              ? "rgb(55, 174, 177, 0.28)"
              : value === "Withdrawn"
              ? "rgb(173, 40, 40, 0.22)"
              : "rgb(220, 212, 26, 0.16)"
          }
          label={value}
          medium
          sx={{ color: "#707175" }}
        />
      ),
    },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <Title label="My Constocks" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1115px",
          marginTop: "1rem",
          gap: "20px",
        }}
      >
        {floatedConstock.length ? (
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
              width: "220px",
              marginLeft: "auto",
              justifyContent: "flex-end",
              "&:hover": {
                bgcolor: "#7655FA",
              },
            }}
            size="large"
          >
            Float constock
          </Button>
        ) : null}

        <TableComponent
          title="Issued Constock"
          rows={floatedConstock}
          columns={columns}
          isEmptyState={!floatedConstock.length ? <EmptyTableState /> : null}
          filterComponent={
            <InputField
              icon={<FontAwesomeIcon icon={faFilter} color="#CCCCCC" />}
              placeholder="Filter Constock"
            />
          }
        />
      </div>
    </div>
  );
}

export default FloatConstock;
