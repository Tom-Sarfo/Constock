import ArrowScroll from "../Components/ArrowScroll";
import { useRef, useState } from "react";
import { scrollToWidth } from "../Utils/Constant";
import { Title } from "../Components/Styled";
import WatchList from "../Components/WatchList";
import TableComponent from "../Components/TableComponent";

const columns = [
  {
    id: "name",
    label: "Name",
    minWidth: 170,
    format: (value) => <p style={{ color: "Red" }}>{value.toUpperCase()}</p>,
  },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => (
      <p style={{ color: "red" }}>{value.toLocaleString("en-US")}</p>
    ),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
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
        gap: "40px",
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
      <TableComponent columns={columns} rows={rows} />
    </div>
  );
}

export default Dashboard;
