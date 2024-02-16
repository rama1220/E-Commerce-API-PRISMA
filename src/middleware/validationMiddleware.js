export const validateTokenRequest = (req, res, next) => {
  const errors = {}

  if (!req.body.email) {
    errors.email = 'Email is required'
  }

  // validate valid email
  if (!/^\S+@\S+\.\S+$/.test(req.body.email)) {
    errors.email = 'Must be a valid email'
  }

  if (!req.body.password) {
    errors.password = 'Password is required'
  }

  // validate minimum length
  if (req.body.password?.length < 8) {
    errors.password = 'Must be at least 8 characters long'
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json(errors)
  }

  next()
}
