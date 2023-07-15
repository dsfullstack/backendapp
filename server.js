const express = require("express");
const app = express();
app.use(express.json())
const port =  5002;
app.use("/api/getuser", require("./route/userroute"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
