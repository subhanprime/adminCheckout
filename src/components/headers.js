import { Box, Typography } from "@mui/material";
import logo from "../assets/svg/logo.png";
import { Link, NavLink } from "react-router-dom";
const Headers = () => {
  return (
    <>
      <Box
        py={2}
        px={1.5}
        sx={{
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          height: "100%",
          minWidth: "250px",
          background: "#69C3F9",
          boxShadow: "0 0 8px rgba(0,0,0,0.1)",
          borderRadius: "7px",
        }}
      >
        <Box
          sx={{
            // backgroundColor: "#0A6EBD",
            height: "70px",
            color: "white",
            // display: "flex",
            // flexDirection:"column",
            // justifyContent: "center",
            // alignItems: "center",
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "95%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            <Box>
              <Box
                mb={2}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <NavLink to="/">
                  <img src={logo} width="100px" />
                </NavLink>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Box
                  sx={
                    {
                      // border:"1px solid red"
                    }
                  }
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    <NavLink
                      to="/user"
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        color: isActive ? "#EB3A18" : "#fff",
                        // background: isActive ? "#7600dc" : "#f0f0f0",
                      })}
                    >
                      User
                    </NavLink>
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  <NavLink
                    to="/post"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#EB3A18" : "#fff",
                      // background: isActive ? "#7600dc" : "#f0f0f0",
                    })}
                  >
                    Post
                  </NavLink>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  <NavLink
                    to="/report"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#EB3A18" : "#fff",
                      // background: isActive ? "#7600dc" : "#f0f0f0",
                    })}
                  >
                    Reported Posts
                  </NavLink>
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  <NavLink
                    to="/userReport"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#EB3A18" : "#fff",
                      // background: isActive ? "#7600dc" : "#f0f0f0",
                    })}
                  >
                    Reported User
                  </NavLink>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  <NavLink
                    to="/termsConditions"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#EB3A18" : "#fff",
                      // background: isActive ? "#7600dc" : "#f0f0f0",
                    })}
                  >
                    Terms & Conditions
                  </NavLink>
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  <NavLink
                    to="/privacyPolicy"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#EB3A18" : "#fff",
                      // background: isActive ? "#7600dc" : "#f0f0f0",
                    })}
                  >
                    Privacy Policy
                  </NavLink>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Headers;
