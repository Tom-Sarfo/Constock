import ArrowScroll from "../Components/ArrowScroll";
import { useRef, useState } from "react";
import { scrollToWidth } from "../Utils/Constant";
import { Title } from "../Components/Styled";
import WatchList from "../Components/WatchList";
import TableComponent from "../Components/TableComponent";
import AssetAvatar from "../Components/AssetAvatar";

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
  { id: "price", label: "Price", minWidth: 100 },
  {
    id: "priceChange",
    label: "Price Change",
    minWidth: 170,
    align: "right",
    format: (value) => `${value}%`,
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

const rows = [
  {
    asset: {
      name: "Kwadwo Sheldon Std.",
      initials: "KSS",
      imgUrl:
        "https://yt3.googleusercontent.com/JlVj92hdKJkFwClEYYOKuy-ROhTbhROboV9jlTQ5KYfec9LBLBVYXh7XxzUvKv01XKWugc7Isw=s160-c-k-c0x00ffffff-no-rj",
    },
    price: "$25",
    priceChange: 1.6,
  },
  {
    asset: {
      name: "Kwadwo Sheldon Std.",
      initials: "KSS",
      imgUrl:
        "https://yt3.googleusercontent.com/JlVj92hdKJkFwClEYYOKuy-ROhTbhROboV9jlTQ5KYfec9LBLBVYXh7XxzUvKv01XKWugc7Isw=s160-c-k-c0x00ffffff-no-rj",
    },
    price: "$25",
    priceChange: 1.6,
  },
  {
    asset: {
      name: "Kwadwo Sheldon Std.",
      initials: "KSS",
      imgUrl:
        "https://yt3.googleusercontent.com/JlVj92hdKJkFwClEYYOKuy-ROhTbhROboV9jlTQ5KYfec9LBLBVYXh7XxzUvKv01XKWugc7Isw=s160-c-k-c0x00ffffff-no-rj",
    },
    price: "$25",
    priceChange: 1.6,
  },
  {
    asset: {
      name: "Kwadwo Sheldon Std.",
      initials: "KSS",
      imgUrl:
        "https://yt3.googleusercontent.com/JlVj92hdKJkFwClEYYOKuy-ROhTbhROboV9jlTQ5KYfec9LBLBVYXh7XxzUvKv01XKWugc7Isw=s160-c-k-c0x00ffffff-no-rj",
    },
    price: "$25",
    priceChange: 1.6,
  },
  {
    asset: {
      name: "Kwadwo Sheldon Std.",
      initials: "KSS",
      imgUrl:
        "https://yt3.googleusercontent.com/JlVj92hdKJkFwClEYYOKuy-ROhTbhROboV9jlTQ5KYfec9LBLBVYXh7XxzUvKv01XKWugc7Isw=s160-c-k-c0x00ffffff-no-rj",
    },
    price: "$25",
    priceChange: 1.6,
  },
  {
    asset: {
      name: "Kwadwo Sheldon Std.",
      initials: "KSS",
      imgUrl:
        "https://yt3.googleusercontent.com/JlVj92hdKJkFwClEYYOKuy-ROhTbhROboV9jlTQ5KYfec9LBLBVYXh7XxzUvKv01XKWugc7Isw=s160-c-k-c0x00ffffff-no-rj",
    },
    price: "$25",
    priceChange: 1.6,
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
