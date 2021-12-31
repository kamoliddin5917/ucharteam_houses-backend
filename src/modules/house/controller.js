const model = require("./model");
const fs = require("fs");
const path = require("path");

module.exports = {
  GET: async (req, res) => {
    try {
      const { complexId } = req.params;
      const { hId } = req.query;

      if (hId) {
        const house = await model.house(hId);
        if (!house)
          return res.status(500).json({ message: "Server Find Error!" });

        const totalPrice = house.house_kvm * house.house_kvm_sum;

        return res
          .status(200)
          .json({ message: "ok", house: { ...house, totalPrice } });
      }

      if (!complexId) {
        const allHouse = await model.allHouse();

        if (!allHouse.length)
          return res.status(500).json({ message: "Server Find Error!" });

        const allHousePrice = allHouse.map((house) => {
          const totalPrice = house.house_kvm * house.house_kvm_sum;

          return { ...house, totalPrice };
        });

        return res.status(200).json({ message: "ok", houses: allHousePrice });
      }

      const houses = await model.houses(complexId);

      if (!houses.length)
        return res.status(500).json({ message: "Server Find Error!" });

      const housesPrice = houses.map((house) => {
        const totalPrice = house.house_kvm * house.house_kvm_sum;

        return { ...house, totalPrice };
      });

      res.status(200).json({ message: "ok", houses: housesPrice });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  },
  POST: async (req, res) => {
    try {
      const { floor, room, kvm, kvmSum, inform, complexId } = req.body;

      if (
        !floor ||
        !room ||
        !kvm ||
        !kvmSum ||
        !inform ||
        !complexId ||
        isNaN(floor) ||
        isNaN(room) ||
        isNaN(kvm) ||
        isNaN(kvmSum)
      )
        return res.status(400).json({ message: "Bad request!" });

      const medias = req.files.map((media) => media.filename);

      const createHouse = await model.createHouse(
        floor,
        room,
        kvm,
        kvmSum,
        inform,
        medias,
        complexId
      );

      if (!createHouse)
        return res.status(500).json({ message: "Server Create Error!" });

      res.status(201).json({ message: "House created!", house: createHouse });
    } catch (error) {
      res.status(500).json({ message: "Server Create Error!" });
    }
  },
  PUT: async (req, res) => {
    try {
      const { floor, room, kvm, kvmSum, inform, houseId } = req.body;

      if (
        (!floor && !room && !kvm && !kvmSum && !inform && !req.files.length) ||
        !houseId ||
        (floor && isNaN(floor)) ||
        (room && isNaN(room)) ||
        (kvm && isNaN(kvm)) ||
        (kvmSum && isNaN(kvmSum))
      )
        return res.status(400).json({ message: "Bad request!" });

      const findHouseUpdate = await model.findHouseUpdate(houseId);
      if (!findHouseUpdate)
        return res.status(400).json({ message: "Bad request!" });

      if (req.files.length) {
        const medias = req.files.map((media) => media.filename);

        const updateHouseMedia = await model.updateHouseMedia(
          floor || findHouseUpdate.house_floor,
          room || findHouseUpdate.house_room,
          kvm || findHouseUpdate.house_kvm,
          kvmSum || findHouseUpdate.house_kvm_sum,
          inform || findHouseUpdate.house_inform,
          medias,
          houseId
        );

        if (!updateHouseMedia)
          return res.status(500).json({ message: "Server Update Error!" });

        findHouseUpdate.house_media.forEach((media) => {
          fs.unlink(path.join(__dirname, "../../uploads", media), (er) => {
            console.log(er);
          });
        });

        return res
          .status(200)
          .json({ message: "House updated!", house: updateHouseMedia });
      }

      const updateHouse = await model.updateHouse(
        floor || findHouseUpdate.house_floor,
        room || findHouseUpdate.house_room,
        kvm || findHouseUpdate.house_kvm,
        kvmSum || findHouseUpdate.house_kvm_sum,
        inform || findHouseUpdate.house_inform,
        houseId
      );

      if (!updateHouse)
        return res.status(500).json({ message: "Server Update Error!" });

      res.status(200).json({ message: "House updated!", house: updateHouse });
    } catch (error) {
      res.status(500).json({ message: "Server Update Error!" });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { houseId } = req.params;

      const deleteHouse = await model.deleteHouse(houseId);

      if (!deleteHouse)
        return res.status(500).json({ message: "Server Delete Error!" });

      res.status(200).json({ message: "House deleted!", house: deleteHouse });

      deleteHouse.house_media.forEach((media) => {
        fs.unlink(path.join(__dirname, "../../uploads", media), (er) => {
          console.log(er);
        });
      });
    } catch (error) {
      res.status(500).json({ message: "Server Delete Error!" });
    }
  },
};
