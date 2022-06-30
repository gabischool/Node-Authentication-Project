const router = require("express").Router();
const { checkUsernameExists, validateRoleName } = require('./auth-middleware');
// require JWT_SECRET from .env file // use this secret!

router.post("/register", validateRoleName, (req, res, next) => {
  /**
    [POST] /api/auth/register { "username": "anna", "password": "1234", "role_name": "team lead" }

    response:
    status 201
    {
      "user"_id: 3,
      "username": "anna",
      "role_name": "team lead"
    }
   */
});


router.post("/login", checkUsernameExists, (req, res, next) => {
  /**
    [POST] /api/auth/login { "username": "Hamdi", "password": "1234" }

    response:
    status 200
    {
      "message": "Hamdi is back!",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ETC.ETC"
    }

    The token must expire in one day, and must provide the following information
    in its payload:

    {
      "subject"  : 1       // the user_id of the authenticated user
      "username" : "hamdi"   // the username of the authenticated user
      "role_name": "instructor" // the role of the authenticated user
    }
   */
});

module.exports = router;
