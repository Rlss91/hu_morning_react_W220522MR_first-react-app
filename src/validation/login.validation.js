import Joi from "joi-browser";

const loginSchema = {
  email: Joi.string().email().min(6).max(7).required(),
  password: Joi.string().min(6).max(7).required(),
};

export default loginSchema;
