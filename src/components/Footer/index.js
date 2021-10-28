import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => (
  <Box sx={{ p: 1 }} component="footer">
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © Aveil"}
      {new Date().getFullYear()}
      {".  All rights reserved."}
    </Typography>
  </Box>
);

export default Footer;
