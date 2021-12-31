const model = require("./model");
const { comparePassword } = require("../../utils/bcrypt");
const { sign } = require("../../utils/jwt");
module.exports = {
  POST: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ message: "Bad request!" });

      const findUser = await model.findUser(email);

      if (!findUser) return res.status(400).json({ message: "Bad request!" });

      const comparedPassword = await comparePassword(
        password,
        findUser.user_password
      );

      if (!comparedPassword)
        return res.status(400).json({ message: "Bad request!" });

      const token = sign({ userId: findUser.user_id });

      res.status(200).json({ message: "ok", token });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  },
};
