const model = require("./model");
const nodemailerFn = require("../../utils/nodemailer");

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

      const infoClient = `
      <h1> Saytimiz orqali uy va bank tanlaganingiz uchun rahmat, tez orada siz bilan bog'lanishadi!</h1>
      <h4>Ajoyib tanlov!</h4>
      <p>${user.user_firstname} - firmasi eng zo'r firmaladan bittasi!</p>
      <p>${bank.bank_name} - bank eng zo'r bankladan bittasi!</p>
      `;
      const infoUser = `
      <h1> Saytimiz orqali yengi Client uyizi sotib olmoqchi! </h1>
      <p> ISM: ${fullName}, TEL: ${tell}, Email: ${email}</p>
      `;
      const infoBank = `
      <h1> Saytimiz orqali yengi Client sizdan kredit olmoqchi! </h1>
      <p> ISM: ${fullName}, TEL: ${tell}, Email: ${email}</p>
      `;

      nodemailerFn(email, infoClient);
      nodemailerFn(user.user_email, infoUser);
      nodemailerFn(bank.bank_email, infoBank);

      console.log(bank, user);

      res.status(200).json({ message: "ok" });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  },
};
