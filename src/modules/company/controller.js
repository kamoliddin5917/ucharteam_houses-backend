const model = require("./model");
const { verify } = require("../../utils/jwt");
const fs = require("fs");
const path = require("path");

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
  POST: async (req, res) => {
    try {
      const { name, inform } = req.body;
      const { token } = req.headers;
      const { userId } = verify(token);

      if (!name || !inform)
        return res.status(400).json({ message: "Bad request!" });

      const medias = req.files.map((media) => media.filename);

      const createCompany = await model.createCompany(
        name,
        inform,
        medias,
        userId
      );

      if (!createCompany)
        return res.status(500).json({ message: "Server Create Error!" });

      res
        .status(201)
        .json({ message: "Company created!", company: createCompany });
    } catch (error) {
      res.status(500).json({ message: "Server Create Error!" });
    }
  },
  PUT: async (req, res) => {
    try {
      const { name, inform, companyId } = req.body;
      const { token } = req.headers;
      const { userId } = verify(token);

      if ((!name && !inform && !req.files.length) || !companyId)
        return res.status(400).json({ message: "Bad request!" });

      const findCompanyUpdate = await model.findCompanyUpdate(
        companyId,
        userId
      );

      if (!findCompanyUpdate)
        return res.status(400).json({ message: "Bad request!" });

      if (req.files.length) {
        const medias = req.files.map((media) => media.filename);

        const updateCompanyMedia = await model.updateCompanyMedia(
          name || findCompanyUpdate.company_name,
          inform || findCompanyUpdate.company_inform,
          medias,
          companyId
        );

        if (!updateCompanyMedia)
          return res.status(500).json({ message: "Server Update Error!" });

        findCompanyUpdate.company_media.forEach((media) => {
          fs.unlink(path.join(__dirname, "../../uploads", media), (er) => {
            console.log(er);
          });
        });

        return res
          .status(200)
          .json({ message: "Company updated!", company: updateCompanyMedia });
      }

      const updateCompany = await model.updateCompany(
        name || findCompanyUpdate.company_name,
        inform || findCompanyUpdate.company_inform,
        companyId
      );

      if (!updateCompany)
        return res.status(500).json({ message: "Server Update Error!" });

      res
        .status(200)
        .json({ message: "Company updated!", company: updateCompany });
    } catch (error) {
      res.status(500).json({ message: "Server Update Error!" });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { companyId } = req.params;
      const { token } = req.headers;
      const { userId } = verify(token);

      const deleteCompanyComplexHouseMedia =
        await model.deleteCompanyComplexHouseMedia(companyId);

      const deleteCompany = await model.deleteCompany(companyId, userId);

      if (!deleteCompany)
        return res.status(500).json({ message: "Server Delete Error!" });

      res
        .status(200)
        .json({ message: "Company deleted!", company: deleteCompany });

      deleteCompany.company_media.forEach((media) => {
        fs.unlink(path.join(__dirname, "../../uploads", media), (er) => {
          console.log(er);
        });
      });

      if (deleteCompanyComplexHouseMedia.length) {
        deleteCompanyComplexHouseMedia.forEach((media) => {
          media.complex_media &&
            media.complex_media.forEach((item) => {
              fs.unlink(path.join(__dirname, "../../uploads", item), (er) => {
                console.log(er);
              });
            });

          media.house_media &&
            media.house_media.forEach((i) => {
              fs.unlink(path.join(__dirname, "../../uploads", i), (er) => {
                console.log(er);
              });
            });
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Server Delete Error!" });
    }
  },
};
