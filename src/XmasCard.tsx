import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import picture from "./assets/christmas-tree-6883263_1280.jpg";
import sound from "./music/dance-of-the-sugar-plum-fairy-tchaikovsky-165957.mp3";
import Snowfall from "react-snowfall";
import useSound from "use-sound";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import snowmanAnimation from "./assets/Animation - 1703597488040.json";
import giftsAnimation from "./assets/Animation - 1703600873275.json";

import Lottie from "lottie-react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const XmasCard: React.FC = () => {
  const [play, { stop }] = useSound(sound);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSnowfall, setShowSnowfall] = useState(false);
  const [showSnowman, setShowSnowman] = useState(false);

  const handleCarolSinging = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSnowfall = () => {
    setShowSnowfall(!showSnowfall);
  };

  const handleSnowmanAppearance = () => {
    setShowSnowman(!showSnowman);
  };

  const onComplete = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <Lottie
        animationData={giftsAnimation}
        loop={false}
        onComplete={onComplete}
      />
      <Card
        sx={{
          width: "40rem",
          maxHeight: "53rem",
          overflow: "auto",
          borderRadius: "17px",
          border: "7px solid #66bb6a",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          background: "#91d370",
          backgroundImage:
            "linear-gradient(319deg, #91d370 0%, #bca0ff 37%, #f2cd54 100%)",
        }}
      >
        <CardMedia
          sx={{ height: "20rem" }}
          image={picture}
          title="christmas tree"
        />
        <CardContent>
          <Typography
            variant="h4"
            color="#f5f5f5"
            gutterBottom
            fontWeight="bold"
          >
            Xmas Cheer for all React Girls!
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <Tooltip title={showSnowfall ? "Stop animation" : "Show Snowfall"}>
              <IconButton color="info" onClick={handleSnowfall}>
                {showSnowfall ? <StopIcon /> : <AcUnitIcon />}
              </IconButton>
            </Tooltip>
            {showSnowfall && (
              <Snowfall snowflakeCount={50} style={{ zIndex: 2 }} />
            )}
            <Tooltip
              title={isPlaying ? "Turn off the music" : "Turn on the music"}
            >
              <IconButton color="success" onClick={handleCarolSinging}>
                {isPlaying ? <StopIcon /> : <PlayArrowIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title={showSnowfall ? "Stop animation" : "Show Snowman"}>
              <IconButton color="secondary" onClick={handleSnowmanAppearance}>
                {showSnowman ? <StopIcon /> : <CardGiftcardIcon />}
              </IconButton>
            </Tooltip>
          </Stack>
          {showSnowman && (
            <Lottie animationData={snowmanAnimation} loop={true} />
          )}
          <Typography variant="body1" gutterBottom color="#f5f5f5">
            Wishing you the merriest Christmas ever! 🎄 May it be filled with
            loads of love, laughter, and those unforgettable moments that make
            your heart glow. Here's to a season wrapped in warmth and all the
            good vibes!
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default XmasCard;
