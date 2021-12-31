const model = require("./model");
const fs = require("fs");
const path = require("path");

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
  POST: async (req, res) => {
    try {
      const { name, inform, companyId } = req.body;

      if (!name || !inform || !companyId)
        return res.status(400).json({ message: "Bad request!" });

      const medias = req.files.map((media) => media.filename);

      const createComplex = await model.createComplex(
        name,
        inform,
        medias,
        companyId
      );

      if (!createComplex)
        return res.status(500).json({ message: "Server Create Error!" });

      res
        .status(201)
        .json({ message: "Complex created!", complex: createComplex });
    } catch (error) {
      res.status(500).json({ message: "Server Create Error!" });
    }
  },
  PUT: async (req, res) => {
    try {
      const { name, inform, complexId } = req.body;

      if ((!name && !inform && !req.files.length) || !complexId)
        return res.status(400).json({ message: "Bad request!" });

      const findComplexUpdate = await model.findComplexUpdate(complexId);
      if (!findComplexUpdate)
        return res.status(400).json({ message: "Bad request!" });

      if (req.files.length) {
        const medias = req.files.map((media) => media.filename);

        const updateComplexMedia = await model.updateComplexMedia(
          name || findComplexUpdate.complex_name,
          inform || findComplexUpdate.complex_inform,
          medias,
          complexId
        );

        if (!updateComplexMedia)
          return res.status(500).json({ message: "Server Update Error!" });

        findComplexUpdate.complex_media.forEach((media) => {
          fs.unlink(path.join(__dirname, "../../uploads", media), (er) => {
            console.log(er);
          });
        });

        return res
          .status(200)
          .json({ message: "Complex updated!", complex: updateComplexMedia });
      }

      const updateComplex = await model.updateComplex(
        name || findComplexUpdate.complex_name,
        inform || findComplexUpdate.complex_inform,
        complexId
      );

      if (!updateComplex)
        return res.status(500).json({ message: "Server Update Error!" });

      res
        .status(200)
        .json({ message: "Complex updated!", complex: updateComplex });
    } catch (error) {
      res.status(500).json({ message: "Server Update Error!" });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { complexId } = req.params;

      const deleteComplexHouseMedia = await model.deleteComplexHouseMedia(
        complexId
      );

      const deleteComplex = await model.deleteComplex(complexId);

      if (!deleteComplex)
        return res.status(500).json({ message: "Server Delete Error!" });

      res
        .status(200)
        .json({ message: "Complex deleted!", complex: deleteComplex });

      deleteComplex.complex_media.forEach((media) => {
        fs.unlink(path.join(__dirname, "../../uploads", media), (er) => {
          console.log(er);
        });
      });

      if (deleteComplexHouseMedia.length) {
        deleteComplexHouseMedia.forEach((media) => {
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
