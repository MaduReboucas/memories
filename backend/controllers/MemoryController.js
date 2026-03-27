const Memory = require("../models/Memory");

const createMemory = async (req, res) => {
  res.json("Deu certo! - memory controller");
};

module.exports = {
  createMemory,
};
