const model = require("./model");

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
};
