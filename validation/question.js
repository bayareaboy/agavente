const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.state = !isEmpty(data.state) ? data.state : "";

  if (!Validator.isLength(data.state, { min: 1, max: 3000000 })) {
    errors.state = "A question must be between 1 and 300 words";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};