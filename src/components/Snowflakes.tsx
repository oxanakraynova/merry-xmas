import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import StopIcon from "@mui/icons-material/Stop";
import Snowfall from "react-snowfall";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function Snowflakes() {
  const [showSnowfall, setShowSnowfall] = useState(false);

  const handleSnowfall = () => {
    setShowSnowfall(!showSnowfall);
  };

  return (
    <>
      <Tooltip title={showSnowfall ? "Stop animation" : "Show Snowfall"}>
        <IconButton color="info" onClick={handleSnowfall}>
          {showSnowfall ? <StopIcon /> : <AcUnitIcon />}
        </IconButton>
      </Tooltip>
      {showSnowfall && <Snowfall snowflakeCount={50} style={{ zIndex: 2 }} />}
    </>
  );
}

export default Snowflakes;
