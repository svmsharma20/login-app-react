import { Button, TextField } from '@mui/material';
import Card from '../card/Card';
import './LoginCard.css';

function LoginCard(props) {
  return (
    <Card className="login-card">
      {/* <div className="input-data">
        <input type="text" />
        <div className="underline"></div>
        <label>Name</label>
      </div> */}
      <TextField id="outlined-required" label="Email" fullWidth type="text" />
      <TextField
        id="outlined-required"
        label="Password"
        fullWidth
        type="password"
        margin="normal"
        font-f
      />
      <Button variant="contained" fullWidth margin="normal">
        Login
      </Button>
    </Card>
  );
}

export default LoginCard;
