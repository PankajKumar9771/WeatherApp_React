import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import DeleteIcon from "@mui/icons-material/Delete";

import Alert from "@mui/material/Alert";

export default function Material() {
  // const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("this is the clicked");
  };
  return (
    <>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        onClick={handleClick}
      >
        Text
      </Button>
      <Button
        variant="contained"
        size="medium"
        color="success"
        onClick={handleClick}
      >
        btn
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={handleClick}
      >
        Contained
      </Button>
      <br />
      <br />
      <Button variant="outlined" endIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Alert severity="error">This is an error Alert.</Alert>
    </>
  );
}
