import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import picture from "../assets/christmas-tree-6883263_1280.jpg";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import Music from "./Music";
import Snowflakes from "./Snowflakes";
import Snowman from "./Snowman";
import Lottie from "lottie-react";
import snowmanAnimation from "../assets/Animation - 1703597488040.json";
import Greeting from "./Greeting";
import {
  HeaderBold,
  HolidayCard,
  StyledCardMedia,
  StyledStack,
} from "../styles";

const XmasCard: React.FC = () => {
  const [showSnowman, setShowSnowman] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  const handleSnowmanAppearance = () => {
    setShowSnowman(!showSnowman);
  };

  const handleGreeting = () => {
    setShowGreeting(!showGreeting);
  };

  return (
    <>
      <HolidayCard>
        <StyledCardMedia image={picture} title="christmas tree" />
        <CardContent>
          <HeaderBold variant="h4" gutterBottom>
            Merry Christmas, React Girls!
          </HeaderBold>
          <StyledStack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Greeting showGreeting={false} handleGreeting={handleGreeting} />
            <Snowflakes />
            <Music />
            <Snowman
              showSnowman={false}
              handleSnowmanAppearance={handleSnowmanAppearance}
            />
          </StyledStack>
          {showSnowman && (
            <Lottie animationData={snowmanAnimation} loop={true} />
          )}
          {showGreeting && (
            <Typography variant="body1" gutterBottom color="#f5f5f5">
              May happiness, health and well-being come with this bright
              holiday. I wish you all new achievements and success in all your
              endeavors. May your cherished desires and dreams come true!
            </Typography>
          )}
        </CardContent>
      </HolidayCard>
    </>
  );
};

export default XmasCard;
