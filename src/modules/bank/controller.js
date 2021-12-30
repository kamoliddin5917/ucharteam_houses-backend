const model = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const { bankId } = req.params;
      const { sum } = req.query;

      if (bankId) {
        if (sum) return res.status(400).json({ message: "Bad request!" });

        const bank = await model.bank(bankId);

        if (!bank)
          return res.status(500).json({ message: "Server Find Error!" });

        return res.status(200).json({ message: "ok", bank });
      }

      if (!sum) return res.status(400).json({ message: "Bad request!" });

      const banks = await model.banks(sum);

      if (!banks.length) return res.status(400).json({ message: "Not bank!" });

      res.status(200).json({ message: "ok", banks });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  },
};
