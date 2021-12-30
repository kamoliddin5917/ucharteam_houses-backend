const model = require("./model");

module.exports = {
  POST: async (req, res) => {
    try {
      const { fullName, email, tell, bankId, houseId } = req.body;

      if (!fullName || !email || !tell || !bankId || !houseId)
        return res.status(400).json({ message: "Bad request!" });

      const bank = await model.bank(bankId);

      if (!bank)
        return res.status(500).json({ message: "Server Find Bank Error!" });

      const user = await model.user(houseId);

      if (!user)
        return res.status(500).json({ message: "Server Find User Error!" });

      console.log(bank, user);

      res.status(200).json({ message: "ok" });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  },
};
