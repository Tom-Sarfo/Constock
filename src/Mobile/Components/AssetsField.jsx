import { Box, Paper, Typography } from "@mui/material"
import { Stack } from "@mui/material";
import AssetCard from "../../Components/AssetCard";
import { cardData } from "../../Utils/Data";


const getRandomCards = (data, count) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

const AssetsField = () => {

      const randomCards = getRandomCards(cardData, 3);

  return (
    <Paper sx={{
        height: "476px",
        backgroundColor: "#EDEBEB",
        borderRadius: "23px",
        margin: "5px"
    }}>
      <Box 
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px 20px"
      }}
      >
        <Typography
        sx={{
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24.2px"
        }}>My assets</Typography>
        <Typography
        sx={{
            color: "#7655FA"
        }}><a href="#">view all</a></Typography>
      </Box>
      <Stack spacing={10}>
      {randomCards.map((data) => (
        <AssetCard key={data.id} assetData={data} />
        ))}
      </Stack>
    </Paper>
  )
}

export default AssetsField