import { useState } from "react";
import useSound from "use-sound";
import sound from "../assets/dance-of-the-sugar-plum-fairy-tchaikovsky-165957.mp3";
import Tooltip from "@mui/material/Tooltip";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { StyledIcon } from "../styles";

function Music() {
  const [play, { stop }] = useSound(sound);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCarolSinging = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Tooltip title={isPlaying ? "Stop Music" : "Play Music"}>
        <StyledIcon color="success" onClick={handleCarolSinging}>
          {isPlaying ? <StopIcon /> : <PlayArrowIcon />}
        </StyledIcon>
      </Tooltip>
    </>
  );
}

export default Music;
