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
  },

  deleteProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_product([id])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "delete is crap, fix it" });
        console.log(err);
      });
  },

  editProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    const { name, price, img } = req.body;

    dbInstance
      .update_product([id, name, price, img])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "edit done messed up, fix it" });
      });
  }
};
