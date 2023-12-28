import Tooltip from "@mui/material/Tooltip";
import StopIcon from "@mui/icons-material/Stop";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { StyledIcon } from "../styles";

interface Props {
  showSnowman: boolean;
  handleSnowmanAppearance: () => void;
}

const Snowman: React.FC<Props> = ({ showSnowman, handleSnowmanAppearance }) => {
  return (
    <>
      <Tooltip title={showSnowman ? "Stop animation" : "Show Snowman"}>
        <StyledIcon color="secondary" onClick={handleSnowmanAppearance}>
          {showSnowman ? <StopIcon /> : <CardGiftcardIcon />}
        </StyledIcon>
      </Tooltip>
    </>
  );
};

export default Snowman;
