import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  showGreeting: boolean;
  handleGreeting: () => void;
}

const Greeting: React.FC<Props> = ({ showGreeting, handleGreeting }) => {
  return (
    <>
      <Tooltip title={showGreeting ? "Hide Greeting" : "Show Greeting"}>
        <IconButton color="warning" onClick={handleGreeting}>
          {showGreeting ? <CloseIcon /> : <AutoAwesomeIcon />}
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Greeting;
