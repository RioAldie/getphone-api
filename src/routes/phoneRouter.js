const express = require('express');
const {
  getSmartphone,
  getPhoneBySpec,
} = require('../controllers/phoneController');
const router = express();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get ALL Phone' });
});

router.get('phone/:id', getSmartphone);

router.post('/api/phone', getPhoneBySpec);

module.exports = router;
