const { getSmartphoneTopsis } = require('../topsis');

const getSmartphone = (req, res) => {
  res.status(200).json({ message: 'detail ponsel' });
};

const getPhoneBySpec = async (req, res) => {
  try {
    let userInput = [1, 5000, 8, 256, 15000000];

    const user = req.body.input;

    const data = await getSmartphoneTopsis(user);
    console.log(req.body);
    res.status(200).json({ message: 'decision support', body: data });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};

module.exports = { getSmartphone, getPhoneBySpec };
