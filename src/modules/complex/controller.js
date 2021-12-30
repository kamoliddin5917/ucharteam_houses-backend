const model = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const { companyId } = req.params;
      const { cxId } = req.query;

      if (cxId) {
        const complex = await model.complex(cxId);
        if (!complex)
          return res.status(500).json({ message: "Server Find Error!" });

        return res.status(200).json({ message: "ok", complex });
      }

      if (!companyId) {
        const allCompexes = await model.allCompexes();

        if (!allCompexes.length)
          return res.status(500).json({ message: "Server Find Error!" });

        return res.status(200).json({ message: "ok", complexes: allCompexes });
      }

      const complexes = await model.complexes(companyId);

      if (!complexes.length)
        return res.status(500).json({ message: "Server Find Error!" });

      res.status(200).json({ message: "ok", complexes });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  },
};
