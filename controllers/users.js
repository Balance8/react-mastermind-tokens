var User = require("../models/user");
var jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

function login(req, res) {
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (!user) return res.status(401).json({ err: "bad credentials" });
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          res.json({ token: createJWT(user) });
        } else {
          return res.status(401).json({ err: "bad credentials" });
        }
      });
    })
    .catch(err => res.status(401).json(err));
}

function signup(req, res) {
  var user = new User(req.body);
  user
    .save()
    .then(user => {
      // TODO: Send back a JWT instead of the user
      res.json({ token: createJWT(user) });
    })
    // User data invalid
    .catch(err => res.status(400).json(err));
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}
