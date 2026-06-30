import ApiError from "../utils/ApiError.js";

const errorMiddleware = (err, req, res, next) => {
  // throw new err();

  console.log("Error ", err);
  // throw new ApiError(err.statusCode, err);
  // return res.status(err.statusCode || 500).json({
  //   success: false,
  //   message: err.message,
  // });
};

export default errorMiddleware;
