import { Status, Title } from "../Components/Styled";
import TableComponent from "../Components/TableComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import InputField from "../Components/InputField";
import { transactions } from "../Utils/Data";

import BalanceCard from "../Components/BalanceCard";

function Wallet() {
  const columns = [
    {
      id: "transactionId",
      label: "Transaction ID",
      minWidth: 120,
      align: "center",
      format: (value) => <p style={{ fontWeight: "bold" }}>{value}</p>,
    },
    {
      id: "type",
      label: "Type",
      minWidth: 100,
      align: "center",
      format: (value) => (
        <Status
          statusColor={
            value === "Withdrawal"
              ? "#AD2828"
              : value === "Deposit"
              ? "rgb(55, 174, 177, 0.28)"
              : value === "Constock fee"
              ? "#6255F5"
              : "#37AEB1"
          }
          label={value}
          medium
          squared
          outline
        />
      ),
    },
    {
      id: "status",
      label: "Status",
      minWidth: 100,
      align: "center",
      format: (value) => (
        <Status
          statusColor={
            value === "Completed"
              ? "rgb(55, 174, 177, 0.28)"
              : value === "Pending"
              ? "rgb(173, 40, 40, 0.22)"
              : "rgb(220, 212, 26, 0.16)"
          }
          label={value}
          sx={{
            color:
              value === "Completed"
                ? "#37AEB1"
                : value === "Pending"
                ? "#AD2828"
                : "#6255F5",
          }}
        />
      ),
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 170,
      align: "center",
      format: (value) => value,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 170,
      align: "center",
      format: (value) => value,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "1rem",
        gap: "40px",
      }}
    >
      <Title label="My Wallet" sx={{ width: "146px", marginTop: "1rem" }} />
      <div style={{ display: "flex", gap: "40px", marginTop: "-3rem" }}>
        <BalanceCard cardTitle="Fund balance" cardFigure="30000" />
        <BalanceCard
          cardTitle="Investment"
          cardFigure="20000"
          cardAction="Cash out"
          smallText="2% more than last month"
          oneAction
        />
      </div>

      <TableComponent
        title="Transactions"
        rows={transactions}
        columns={columns}
        filterComponent={
          <InputField
            icon={<FontAwesomeIcon icon={faFilter} color="#CCCCCC" />}
            placeholder="Filter Transactions"
          />
        }
      />
    </div>
  );
}

export default Wallet;
