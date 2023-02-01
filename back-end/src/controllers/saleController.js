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

const getAllSales = async (req, res) => {
  const { userId } = req;
  try {
    const allSales = await saleService.getAllSales(userId);
    return res.status(200).json(allSales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSaleById = async (req, res) => {
  const { id } = req.params;  
  try {
    const salesById = await saleService.getSaleById(id);
    return res.status(200).json(salesById);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getAllSellers = async (req, res) => {
  const { userId } = req;
  try {
    const allSellers = await saleService.getAllSellers(userId);
    return res.status(200).json(allSellers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const update = await saleService.updateStatus(id, status);
    return res.status(200).json(update)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { createSale, getAllSales, getSaleById, getAllSellers, updateStatus };