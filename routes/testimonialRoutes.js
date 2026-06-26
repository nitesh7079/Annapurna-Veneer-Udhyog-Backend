const express = require("express");
const router = express.Router();
const {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

router.route("/").get(getTestimonials).post(createTestimonial);
router.route("/:id").put(updateTestimonial).delete(deleteTestimonial);

module.exports = router;
