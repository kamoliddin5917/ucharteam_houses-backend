const { verify } = require("../utils/jwt");

module.exports = {
  AUTH: (req, res, next) => {
    try {
      const { token } = req.headers;
      const { userId } = verify(token);

      if (!userId)
        return res
          .status(401)
          .json({ message: "Login qilin yoki Registratsiyadan o'tin!" });

      next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Login qilin yoki Registratsiyadan o'tin!" });
    }
  },
};
