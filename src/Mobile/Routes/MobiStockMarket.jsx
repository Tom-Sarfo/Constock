import { MobileTypography, StockMarketButton } from "../../Components/Styled"
import InputField from "../../Components/InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Stack, Box } from "@mui/material";
import { cardData } from "../../Utils/Data";
import AssetCard from "../../Components/AssetCard";



const MobiStockMarket = () => {
  return (
    <div>
      <Stack spacing={10} margin={'16px'}>
      <MobileTypography
      sx={{
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "24.2px",
        textAlign: "left",
        color: "#000000"
      }}>
        Constock Market
        </MobileTypography>
        <InputField
          icon={<FontAwesomeIcon icon={faSearch} color="#D9D9D9" />}
          placeholder="Search constock"
        />
      </Stack>
      <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "24px 18px"
      }}
      >
        <StockMarketButton>All</StockMarketButton>
        <StockMarketButton>Top creators</StockMarketButton>
        <StockMarketButton>New creators</StockMarketButton>
        <StockMarketButton>Top gainer</StockMarketButton>
      </Box>
      <Stack spacing={0}>
        {cardData.map((data) => (
          <AssetCard key={data.id} assetData={data} />
        ))}
      </Stack>
    </div>
  )
}

export default MobiStockMarket