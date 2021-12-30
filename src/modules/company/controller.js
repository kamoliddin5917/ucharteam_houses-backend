const model = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const { companyId } = req.params;

      if (companyId) {
        const company = await model.company(companyId);

        if (!company)
          return res.status(500).json({ message: "Server Find Error!" });

        return res.status(200).json({ message: "ok", company });
      }

      const companies = await model.companies();

      if (!companies.length)
        return res.status(500).json({ message: "Server Find Error!" });

      res.status(200).json({ message: "ok", companies });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  },
};
