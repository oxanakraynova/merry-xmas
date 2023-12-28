import Tooltip from "@mui/material/Tooltip";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import { StyledIcon } from "../styles";

interface Props {
  showGreeting: boolean;
  handleGreeting: () => void;
}

const Greeting: React.FC<Props> = ({ showGreeting, handleGreeting }) => {
  return (
    <>
      <Tooltip title={showGreeting ? "Hide Greeting" : "Show Greeting"}>
        <StyledIcon color="warning" onClick={handleGreeting}>
          {showGreeting ? <CloseIcon /> : <AutoAwesomeIcon />}
        </StyledIcon>
      </Tooltip>
    </>
  );
};

export default Greeting;
