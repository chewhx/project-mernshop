const express = require("express");
const router = express.Router();

const Order = require("../mongoose/models/Order");

//  ---------------------------------------------------------------------------------------
//  @desc     Create a new order
//  @route    POST  /api/v1/orders
//  @access   Private

router.post("/", async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);

    if (!newOrder) {
      throw new Error();
    }

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Get an order by ID
//  @route    GET  /api/v1/orders/:id
//  @access   Private

router.get("/:id", async (req, res) => {
  try {
    const foundOrder = await Order.findById(req.params.id);

    if (!foundOrder) {
      throw new Error(`No order found with id ${req.params.id}`);
    }

    res.status(200).json(foundOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

//  ---------------------------------------------------------------------------------------
//  @desc     Update order by ID
//  @route    PUT  /api/v1/orders/:id
//  @access   Private + Admin

//  ---------------------------------------------------------------------------------------
//  @desc     Update order to paid by ID
//  @route    PUT  /api/v1/orders/:id
//  @access   Private + Admin

//  ---------------------------------------------------------------------------------------
//  @desc     Update order to delieverd by ID
//  @route    PUT  /api/v1/orders/:id
//  @access   Private + Admin

//  ---------------------------------------------------------------------------------------
//  @desc     Delete an order by ID
//  @route    DEL  /api/v1/orders/:id
//  @access   Private + Admin

//  ---------------------------------------------------------------------------------------
//  @desc     Get all orders
//  @route    GET  /api/v1/orders
//  @access   Private + Admin

module.exports = router;
