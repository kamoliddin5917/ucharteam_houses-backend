const model = require("./model");
const { verify } = require("../../utils/jwt");
const { hashPassword, comparePassword } = require("../../utils/bcrypt");
const fs = require("fs");
const path = require("path");
const { findUser } = require("../login/model");

module.exports = {
  GET: async (req, res) => {
    try {
      const { token } = req.headers;
      const { userId } = verify(token);

      const { user_password, user_status, ...findUser } = await model.findUser(
        userId
      );
      const findCompanies = await model.findCompanies(userId);
      const findComplexes = await model.findComplexes(userId);
      const findHouses = await model.findHouses(userId);

      console.log(findUser);
      console.log(findCompanies);
      console.log(findComplexes);
      console.log(findHouses);
      res.status(200).json({ message: "ok" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Find Error!" });
    }
  },
  PUT: async (req, res) => {
    try {
      const { firstName, lastName } = req.body;
      const { token } = req.headers;
      const { userId } = verify(token);
      const image = req.file;

      if (!firstName && !lastName && !image)
        return res.status(400).json({ message: "Bad request!" });

      const findUser = await model.findUser(userId);

      if (!findUser) return res.status(500).json({ message: "Server Error!" });

      const updateUser = await model.updateUser(
        firstName || findUser.user_firstname,
        lastName || findUser.user_lastname,
        image ? image.filename : findUser.user_image,
        userId
      );

      if (!updateUser)
        return res.status(500).json({ message: "Server Update Error!" });

      res.status(200).json({ message: "User update!", user: updateUser });

      if (image) {
        fs.unlink(
          path.join(__dirname, "../../uploads", findUser.user_image),
          (er) => {
            console.log(er);
          }
        );
      }
    } catch (error) {
      res.status(500).json({ message: "Server Update Error!" });
    }
  },
  CHANGE_PASSWORD: async (req, res) => {
    try {
      const { password, newPassword, conPassword } = req.body;
      const { token } = req.headers;
      const { userId } = verify(token);

      if (
        !password ||
        !newPassword ||
        !conPassword ||
        password === newPassword ||
        newPassword !== conPassword
      )
        return res.status(400).json({ message: "Bad request!" });

      const findUser = await model.findUser(userId);

      if (!findUser) return res.status(500).json({ message: "Server Error!" });

      const comparedPassword = await comparePassword(
        password,
        findUser.user_password
      );

      if (!comparedPassword)
        return res.status(400).json({ message: "Bad request!" });

      const hashedPassword = await hashPassword(newPassword);

      if (!hashedPassword)
        return res.status(500).json({ message: "Server Error!" });

      const updatePassword = await model.updatePassword(hashedPassword, userId);

      if (!updatePassword)
        return res.status(500).json({ message: "Server Error!" });

      res
        .status(200)
        .json({ message: "Password update", user: updatePassword });
    } catch (error) {
      res.status(500).json({ message: "Server Update Error!" });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { token } = req.headers;
      const { userId } = verify(token);

      const allMedia = await model.allMedia(userId);

      const deleteUser = await model.deleteUser(userId);

      if (!deleteUser)
        return res.status(500).json({ message: "Server Delete Error!" });

      res.status(200).json({ message: "User deleted", user: deleteUser });

      fs.unlink(
        path.join(__dirname, "../../uploads", deleteUser.user_image),
        (er) => {
          console.log(er);
        }
      );

      if (allMedia.length) {
        allMedia.forEach((media) => {
          media.company_media &&
            media.company_media.forEach((c) => {
              fs.unlink(path.join(__dirname, "../../uploads", c), (er) => {
                console.log(er);
              });
            });

          media.complex_media &&
            media.complex_media.forEach((cx) => {
              fs.unlink(path.join(__dirname, "../../uploads", cx), (er) => {
                console.log(er);
              });
            });

          media.house_media &&
            media.house_media.forEach((h) => {
              fs.unlink(path.join(__dirname, "../../uploads", h), (er) => {
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
