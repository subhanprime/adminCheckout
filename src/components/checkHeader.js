import { Outlet } from "react-router-dom";
import Headers from "./headers";
import { Box } from "@mui/material";
const CheckHeader = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Headers />
        <Box
          sx={{
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default CheckHeader;
