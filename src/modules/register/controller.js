const model = require("./model");
const { hashPassword } = require("../../utils/bcrypt");
const { sign } = require("../../utils/jwt");

module.exports = {
  POST: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const image = req.file;

      if (!firstName || !lastName || !email || !password)
        return res.status(400).json({ message: "Bad request!" });

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        return res
          .status(400)
          .json({ message: `This is not email (${email})` });

      const hashedPassword = await hashPassword(password);

      const createUser = await model.createUser(
        firstName,
        lastName,
        email,
        hashedPassword,
        image ? image.filename : null
      );

      if (!createUser)
        return res.status(500).json({ message: "Server Error !" });

      const token = sign({ userId: createUser.user_id });

      res.status(200).json({ message: "ok register", token });
    } catch (error) {
      res.status(400).json({ message: "Error email!" });
    }
  },
};
