const Testimonial = require("../models/Testimonial");

// GET /api/testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: testimonials });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST /api/testimonials
exports.createTestimonial = async (req, res) => {
  try {
    const { name, companyName, message, rating } = req.body;
    const testimonial = await Testimonial.create({ name, companyName, message, rating });
    res.status(201).json({ success: true, data: testimonial });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// PUT /api/testimonials/:id
exports.updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!testimonial) {
      return res.status(404).json({ success: false, message: "Testimonial not found" });
    }
    res.status(200).json({ success: true, data: testimonial });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE /api/testimonials/:id
exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ success: false, message: "Testimonial not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
