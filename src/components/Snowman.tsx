import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import StopIcon from "@mui/icons-material/Stop";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

interface Props {
  showSnowman: boolean;
  handleSnowmanAppearance: () => void;
}

const Snowman: React.FC<Props> = ({ showSnowman, handleSnowmanAppearance }) => {
  return (
    <>
      <Tooltip title={showSnowman ? "Stop animation" : "Show Snowman"}>
        <IconButton color="secondary" onClick={handleSnowmanAppearance}>
          {showSnowman ? <StopIcon /> : <CardGiftcardIcon />}
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Snowman;
