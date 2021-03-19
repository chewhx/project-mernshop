const express = require("express");
const router = express.Router();
const { authUser, authAdmin } = require("../middleware/auth");

const Product = require("../mongoose/models/Product");

//  ---------------------------------------------------------------------------------------
//  @desc     Get all products
//  @route    GET  /api/v1/products
//  @access   Public

router.get("/", async (req, res) => {
  try {
    const foundProducts = await Product.find();
    if (!foundProducts) throw new Error(`No products found`);
    res.status(200).json(foundProducts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Get product by id
//  @route    GET  /api/v1/products/:id
//  @access   Public

router.get("/:id", async (req, res) => {
  try {
    const foundProduct = await Product.findById(req.params.id);
    if (!foundProduct)
      throw new Error(`No product found with id ${req.params.id}`);
    res.status(200).json(foundProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Create a new  product
//  @route    POST  /api/v1/products/:id
//  @access   Private, Admin

router.post("/", authUser, authAdmin, async (req, res) => {
  try {
    if (!req.body) throw new Error("No product information given");
    const newProduct = await Product.create(req.body);

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Update product by id
//  @route    PUT  /api/v1/products/:id
//  @access   Private, Admin

router.put("/:id", authUser, authAdmin, async (req, res) => {
  try {
    const editedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!editedProduct)
      throw new Error(`No product found with id ${req.params.id}`);

    res.status(200).json(editedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Delete a product by id
//  @route    DEL  /api/v1/products/:id
//  @access   Private, Admin

router.delete("/:id", authUser, authAdmin, async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct)
      throw new Error(`No product found with id ${req.params.id}`);

    res.status(200).json({});
  } catch (err) {
    res.status(400).send(`Not authorised`);
  }
});

module.exports = router;
