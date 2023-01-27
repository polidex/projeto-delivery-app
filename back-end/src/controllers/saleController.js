const saleService = require('../services/saleService');

const createSale = async (req, res) => {
  const saleData = req.body;
  const { userId } = req;
  try {
    const newSale = await saleService.createSale(saleData, userId);
    return res.status(201).json(newSale);
  } catch (error) {
     return res.status(500).json({ message: error.message });
     }
};

module.exports = { createSale };