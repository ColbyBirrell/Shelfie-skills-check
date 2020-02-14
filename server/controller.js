// const axios = require("axios");

// const inventory = [
//   {
//     id: 55,
//     name: "10Testprod10",
//     price: 43,
//     img: "43imgtesturl43"
//   },

//   {
//     id: 57,
//     name: "33Testprod33",
//     price: 99,
//     img: "44imgtesturl44"
//   }
// ];

module.exports = {
  getInventoryList: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_inventory()
      .then(items => {
        res.status(200).send(items);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "this done broke" });
        console.log(err);
      });
  },

  createProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;

    dbInstance
      .create_product([name, price, img])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "create is borked, fix it" });
        console.log(err);
      });
  }
};

// res.status(200).send(inventory);
