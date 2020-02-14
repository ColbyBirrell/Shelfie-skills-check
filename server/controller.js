const axios = require("axios");

const inventory = [
  {
    id: 55,
    name: "10Testprod10",
    price: 43,
    img: "43imgtesturl43"
  },

  {
    id: 57,
    name: "33Testprod33",
    price: 99,
    img: "44imgtesturl44"
  }
];

module.exports = {
  getInventoryList(req, res) {
    res.status(200).send(inventory);
  }
};
