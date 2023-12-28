import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";

export const HolidayCard = styled(Card)({
  width: "40rem",
  maxHeight: "53rem",
  overflow: "auto",
  borderRadius: "17px",
  border: "7px solid #66bb6a",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
  background: "#91d370",
  backgroundImage:
    "linear-gradient(319deg, #91d370 0%, #bca0ff 37%, #f2cd54 100%)",
});

export const HeaderBold = styled(Typography)(({ theme }) => ({
  color: "#f5f5f5",
  fontWeight: "bold",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const StyledCardMedia = styled(CardMedia)({
  height: "20rem",
});
