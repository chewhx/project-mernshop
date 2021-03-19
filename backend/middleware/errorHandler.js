const errorHandler = (req, res, err) => {
  console.log(err);
  res.status(500).json({ success: false, message: err.message });
};

module.exports = errorHandler;
