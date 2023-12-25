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

const XmasCard: React.FC = () => {
  const [play, { stop }] = useSound(sound);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSnowfall, setShowSnowfall] = useState(false);
  // const [showSanta, setShowSanta] = useState(false);

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

  // const handleSantaAppearance = () => {
  //   setShowSanta(!showSanta);
  // };

  return (
    <Card
      sx={{
        width: "40rem",
        height: "40rem",
        border: "4px solid #00a152",
        borderRadius: "15px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        sx={{ height: "20rem" }}
        image={picture}
        title="christmas tree"
      />
      <CardContent>
        <Typography variant="h4" color="#b28900" gutterBottom>
          Xmas Cheer for all React Girls! 🎅
        </Typography>
        <Tooltip title="Add snow">
          <IconButton color="info" onClick={handleSnowfall}>
            <AcUnitIcon />
          </IconButton>
        </Tooltip>
        {showSnowfall && <Snowfall snowflakeCount={50} style={{ zIndex: 2 }} />}
        <Tooltip title={isPlaying ? "Turn off the music" : "Turn on the music"}>
          <IconButton color="success" onClick={handleCarolSinging}>
            {isPlaying ? <StopIcon /> : <PlayArrowIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Add Santa">
          <IconButton color="secondary">
            {/* <IconButton color="secondary" onClick={handleSantaAppearance}> */}
            <CardGiftcardIcon />
          </IconButton>
        </Tooltip>
        {/* {showSanta && <SurpriseSanta minTime={5} maxTime={30} />} */}
        <Typography variant="body1" gutterBottom sx={{ mt: 3 }} color="#b28900">
          Wishing you the merriest Christmas ever! 🎄 May it be filled with
          loads of love, laughter, and those unforgettable moments that make
          your heart glow. Here's to a season wrapped in warmth and all the good
          vibes!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default XmasCard;
