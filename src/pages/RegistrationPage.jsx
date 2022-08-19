import * as React from "react";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function RegistrationPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (

    <div className="auth-main">
      <div className="auth-block">
        <h3 className="auth-header" >
          Sign Up
        </h3>
        <div className="auth__input-block">
          <p>
            Username
          </p>
          <div className="auth-input__form">
            <input
              placeholder="Type username"
              className="auth-input"
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setChangeColorProfile("#8C2CEF")}
              onBlur={() => setChangeColorProfile("#adadad")}
            />
          </div>
        </div>
        <div className="auth__input-block">
          <p>
            Password
          </p>
          <div className="auth-input__form">
            <label htmlFor="password">
              <LockOutlinedIcon id="userpasswordInp" className="auth-input__icon" sx={{color: changeColorLock, transition: "all 100ms"}} />
            </label>
            <input
              placeholder="Type password"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setChangeColorLock("#8C2CEF")}
              onBlur={() => setChangeColorLock("#adadad")}
            />
          </div>
        </div>
        {error ? <Typography sx={{ color: "red", m: 1 }}>{error}</Typography> : null}
        <button
          className="auth-btn"
          // onClick={() => handleLogin(email, password)}
          onClick={() => handleRegister(email, password)}
        >Sign Up</button>
        <div className="auth-another">
          <button onClick={() => navigate("/login")} className="auth-link">OR SIGN IN</button>
        </div>
      </div>
    </div>

  );
}



