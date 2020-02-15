require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING)
  .then(dbObj => {
    app.set("db", dbObj);
  })
  .catch(err => console.log(err));

app.use(express.json());

//end-p's go hur
app.get(`/api/inventory`, ctrl.getInventoryList);
app.post(`/api/inventory`, ctrl.createProduct);
app.delete(`/api/inventory/:id`, ctrl.deleteProduct);

app.listen(SERVER_PORT, () => {
  console.log(`<--- Server Listening on ${SERVER_PORT} --->`);
});
