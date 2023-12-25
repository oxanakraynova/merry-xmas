import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
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

const XmasCard: React.FC = () => {
  const [play, { stop }] = useSound(sound);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

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
        <Typography variant="h4">Merry Christmas!</Typography>
        <IconButton>
          <StarIcon />
        </IconButton>
        <IconButton onClick={handleToggleClick}>
          {isPlaying ? <StopIcon /> : <PlayArrowIcon />}
        </IconButton>

        <IconButton>
          <CardGiftcardIcon />
        </IconButton>

        <Typography variant="body1">Text</Typography>
      </CardContent>
      <Snowfall snowflakeCount={50} style={{ zIndex: 2 }} />
    </Card>
  );
};

export default XmasCard;
