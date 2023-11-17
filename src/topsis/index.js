const { phones } = require('./db');

// Fungsi untuk normalisasi matriks keputusan
function normalizeMatrix(matrix) {
  let normalizedMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j] * matrix[i][j];
    }
    let sqrtSum = Math.sqrt(sum);
    let normalizedRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      normalizedRow.push(matrix[i][j] / sqrtSum);
    }
    normalizedMatrix.push(normalizedRow);
  }
  return normalizedMatrix;
}

// Fungsi untuk menghitung matriks solusi ideal positif dan negatif
function calculateIdealSolutions(matrix) {
  let positiveIdeal = [];
  let negativeIdeal = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let column = matrix.map((row) => row[i]);
    positiveIdeal.push(Math.max(...column));
    negativeIdeal.push(Math.min(...column));
  }
  return { positiveIdeal, negativeIdeal };
}

// Fungsi untuk menghitung jarak relatif terhadap solusi ideal positif dan negatif
function calculateDistances(matrix, positiveIdeal, negativeIdeal) {
  let positiveDistances = [];
  let negativeDistances = [];
  for (let i = 0; i < matrix.length; i++) {
    let positiveDistance = 0;
    let negativeDistance = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      positiveDistance += (matrix[i][j] - positiveIdeal[j]) ** 2;
      negativeDistance += (matrix[i][j] - negativeIdeal[j]) ** 2;
    }
    positiveDistances.push(Math.sqrt(positiveDistance));
    negativeDistances.push(Math.sqrt(negativeDistance));
  }
  return { positiveDistances, negativeDistances };
}

// Fungsi untuk menghitung nilai preferensi
function calculatePreferences(positiveDistances, negativeDistances) {
  let preferences = [];
  for (let i = 0; i < positiveDistances.length; i++) {
    let preference =
      negativeDistances[i] /
      (negativeDistances[i] + positiveDistances[i]);
    preferences.push(preference);
  }
  return preferences;
}

// Fungsi utama Topsis untuk pemilihan smartphone
function topsisForSmartphones(userInput, smartphones) {
  // Matriks keputusan berdasarkan spesifikasi yang dimasukkan oleh pengguna
  let decisionMatrix = [];
  for (let i = 0; i < smartphones.length; i++) {
    let specification = [];
    for (let j = 0; j < userInput.length; j++) {
      specification.push(userInput[j] / smartphones[i][j]);
    }
    decisionMatrix.push(specification);
  }

  // Normalisasi matriks keputusan
  let normalizedMatrix = normalizeMatrix(decisionMatrix);

  let { positiveIdeal, negativeIdeal } =
    calculateIdealSolutions(normalizedMatrix);
  let { positiveDistances, negativeDistances } = calculateDistances(
    normalizedMatrix,
    positiveIdeal,
    negativeIdeal
  );
  let preferences = calculatePreferences(
    positiveDistances,
    negativeDistances
  );

  // Hasil akhir
  let result = [];
  for (let i = 0; i < preferences.length; i++) {
    result.push({
      smartphone: `Smartphone ${i + 1}`,
      preference: preferences[i],
      phone: phones[i],
    });
  }

  // Urutkan hasil dari yang tertinggi ke terendah
  result.sort((a, b) => b.preference - a.preference);

  return result;
}

// Contoh penggunaan
let userInput = [1, 5000, 32, 128, 4]; // Contoh spesifikasi yang dimasukkan oleh pengguna
let smartphones = [
  // Spesifikasi Smartphone 1 //garansi, baterai, ram,rom,harga
  [1, 5000, 12, 256, 20000000],
  [1, 5003, 8, 128, 18000000],
  [1, 4500, 12, 256, 19000000],
  [1, 5000, 12, 256, 21000000],
  [1, 4500, 12, 256, 22000000],
  [1, 4360, 8, 256, 24000000],
  [1, 6000, 16, 256, 25000000],
  [1, 5000, 12, 256, 23000000],
  [1, 4500, 12, 256, 21000000],
  [3, 5000, 4, 64, 3000000],
  [3, 5000, 6, 128, 2500000],
  [3, 5000, 6, 128, 3500000],
  [3, 4000, 4, 64, 2000000],
  [3, 5000, 4, 64, 2800000],
  [3, 5000, 4, 64, 2200000],
  [3, 5000, 4, 64, 2600000],
  [3, 5200, 4, 64, 1800000],
  [3, 5000, 4, 64, 2400000],
  [3, 5000, 3, 64, 1600000],
  [3, 6000, 4, 64, 1700000],
  [3, 5020, 3, 32, 1600000],
  [3, 6000, 4, 64, 2000000],
  [3, 4000, 3, 32, 1400000],
  [3, 5000, 4, 64, 1500000],
  [3, 5000, 3, 32, 1300000],
  [3, 4230, 3, 32, 1400000],
  [3, 5000, 2, 32, 1200000],
  [3, 4000, 3, 32, 1600000],
  [3, 4000, 4, 64, 1400000],
  [2, 5000, 8, 128, 6500000],
  [2, 4500, 8, 128, 6000000],
  [2, 5000, 6, 128, 7000000],
  [2, 4500, 6, 128, 6000000],
  [2, 5000, 6, 128, 5500000],
  [2, 4000, 8, 128, 6500000],
  [2, 4300, 8, 128, 6800000],
  [2, 5000, 8, 128, 7500000],
  [2, 4000, 8, 128, 6800000],
];

let result = topsisForSmartphones(userInput, smartphones);

const getSmartphoneTopsis = (userInput) => {
  let allRangking = topsisForSmartphones(userInput, smartphones);

  let result = [];
  allRangking.map((res, i) => {
    if (i < 3) {
      return result.push(res);
    }
  });

  return result;
};

module.exports = { result, getSmartphoneTopsis };
