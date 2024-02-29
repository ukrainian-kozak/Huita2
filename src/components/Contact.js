import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { TextField, Grid } from "@mui/material";
import Button from "@mui/material/Button";

const style = {
  mb: 8,
  fontSize: "63px",
  input: {
    color: "white",
  },
  "&:hover fieldset": {
    borderWidth: 2,
  },
  "& .MuiInputLabel-root": {
    color: "blue",

    fontSize: 25,
  }, //styles the label
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      borderColor: "orange",
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "orange",
    },
  },
  //   backgroundColor: { xs: "pink" },
};

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="contact-heading">
        <h2>GET IN TOUCH</h2>
      </div>
      <div className="project-rectangle"></div>
      <form
        action="https://formsubmit.co/7fbee76da30c6e46ec4431e0fc3d9d2d"
        method="POST"
      >
        <div className="contact-content">
          <ul className="left-contact">
            <Grid container spacing={1}>
              <Grid sm={12} item>
                <TextField
                  fullWidth
                  sx={{ ...style }}
                  label="First Name"
                  placeholder="Enter First Name"
                  variant="outlined"
                  inputProps={{
                    autoComplete: "none",
                  }}
                  name="name"
                  required
                ></TextField>
              </Grid>
              <Grid sm={12} item>
                <TextField
                  fullWidth
                  sx={{ ...style }}
                  label="Last Name"
                  placeholder="Enter Last Name"
                  variant="outlined"
                  inputProps={{
                    autoComplete: "none",
                  }}
                  name="last_name"
                  required
                ></TextField>
              </Grid>
              <Grid sm={12} item>
                <TextField
                  fullWidth
                  sx={{ ...style }}
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  inputProps={{
                    autoComplete: "none",
                  }}
                  name="email"
                  required
                ></TextField>
              </Grid>
            </Grid>
          </ul>

          <ul className="right-contact">
            <Grid container spacing={1}>
              <Grid sm={22} item>
                <TextField
                  fullWidth
                  sx={{ ...style }}
                  label="Message"
                  multiline
                  rows={9.3}
                  inputProps={{ style: { color: "white" } }}
                  placeholder="Enter Message"
                  variant="outlined"
                  name="message"
                  required
                ></TextField>
              </Grid>
            </Grid>
          </ul>
        </div>
        <Button
          type="submit"
          sx={{ ...style, pr: 4, pl: 4, fontSize: "28px" }}
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </form>
      <div className="footer">
        <div className="footer-item header-linkedin">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/slav-lyk/"
          >
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
          </a>
        </div>
        <div className="footer-item header-github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SlavLyk?tab=repositories"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </div>
        <div className="footer-item header-youtube">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCCb5zddp6_qXL_oo34U6nWw"
          >
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
          </a>
        </div>
        <div className="footer-item header-resume">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1v3uT3XabTEh-6z4adZlI6DfyFny0LhBK/view?usp=sharing"
          >
            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
