import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <Typography><h2>Hello from login page</h2></Typography>
      <Card>
        <form onSubmit={handleNavigation}>
          <CardContent>
            <div>
              <div>
                <TextField
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained" type="submit">Login</Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};
