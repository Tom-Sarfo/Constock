import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AssetCard from "../Components/AssetCard";
import InputField from "../Components/InputField";
import { Title } from "../Components/Styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "@mui/material";
import { cardData } from "../Utils/Data";

function SidePanel() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        border: "1px solid #CCCCCC",
        borderRadius: "5px",
        alignItems: "center",
      }}
    >
      {/* <center> */}
      <Stack spacing={10} direction="column" alignItems="center">
        <InputField
          placeholder="Search creators"
          icon={<FontAwesomeIcon icon={faSearch} color="#CCCCCC" />}
        />
        <Title label="Top Creators" style={{ width: "186px" }} />
      </Stack>
      {/* </center> */}
      <Stack spacing={0}>
        {cardData.map((data) => (
          <AssetCard key={data.id} assetData={data} />
        ))}
      </Stack>
      <Title label="View more" style={{ width: "186px" }} />
    </div>
  );
}

export default SidePanel;
