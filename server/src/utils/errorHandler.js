// Wrapper for async route handlers to catch errors
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// Global error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const error = {
    status: err.status || 'error',
    message: err.message || 'Something went wrong',
  };

  if (process.env.NODE_ENV === 'development') {
    error.stack = err.stack;
  }

  res.status(err.statusCode || 500).json(error);
};

module.exports = {
  catchAsync,
  errorHandler,
};
