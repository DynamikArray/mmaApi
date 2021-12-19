const port = 3000;

const morgan = require("morgan");
const router = require("./routes/router.js");

const app = require("express")();
app.use(morgan("tiny"));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
