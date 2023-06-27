import "./App.css";
import Headers from "./components/headers";
import { Route, Routes } from "react-router-dom";
import Login from "./layouts/login/login";
import Register from "./layouts/register/register";
import LandingPage from "./layouts/landingPage/landingPage";
import CheckHeader from "./components/checkHeader";
function App() {
  return (
    <div>
      {/* <Headers /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<CheckHeader />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
