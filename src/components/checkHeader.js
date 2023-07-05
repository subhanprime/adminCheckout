import { Outlet } from "react-router-dom";
import Headers from "./headers";
const CheckHeader = () => {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
};

export default CheckHeader;
