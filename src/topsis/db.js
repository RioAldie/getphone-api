const phones = [
  {
    id: 12,
    nama: 'Samsung Galaxy S21 Ultra',
    harga: 20000000,
    ram: 12,
    prosesor: 'Exynos 2100',
    brand: 'Samsung',
    kamera: 108,
    ram_rom: '12GB/256GB',
    baterai: 5000,
  },
  {
    id: 13,
    nama: 'Google Pixel 6 Pro',
    harga: 18000000,
    ram: 8,
    prosesor: 'Google Tensor',
    brand: 'Google',
    kamera: 50,
    ram_rom: '8GB/128GB',
    baterai: 5003,
  },
  {
    id: 14,
    nama: 'OnePlus 9 Pro',
    harga: 19000000,
    ram: 12,
    prosesor: 'Snapdragon 888',
    brand: 'OnePlus',
    kamera: 48,
    ram_rom: '12GB/256GB',
    baterai: 4500,
  },
  {
    id: 15,
    nama: 'Xiaomi Mi 11 Ultra',
    harga: 21000000,
    ram: 12,
    prosesor: 'Snapdragon 888',
    brand: 'Xiaomi',
    kamera: 50,
    ram_rom: '12GB/256GB',
    baterai: 5000,
  },
  {
    id: 16,
    nama: 'Sony Xperia 1 III',
    harga: 22000000,
    ram: 12,
    prosesor: 'Snapdragon 888',
    brand: 'Sony',
    kamera: 12,
    ram_rom: '12GB/256GB',
    baterai: 4500,
  },
  {
    id: 17,
    nama: 'Huawei P50 Pro',
    harga: 24000000,
    ram: 8,
    prosesor: 'Kirin 9000',
    brand: 'Huawei',
    kamera: 50,
    ram_rom: '8GB/256GB',
    baterai: 4360,
  },
  {
    id: 18,
    nama: 'Asus ROG Phone 5',
    harga: 25000000,
    ram: 16,
    prosesor: 'Snapdragon 888',
    brand: 'Asus',
    kamera: 64,
    ram_rom: '16GB/256GB',
    baterai: 6000,
  },
  {
    id: 19,
    nama: 'Motorola Edge+ (2021)',
    harga: 23000000,
    ram: 12,
    prosesor: 'Snapdragon 870',
    brand: 'Motorola',
    kamera: 108,
    ram_rom: '12GB/256GB',
    baterai: 5000,
  },
  {
    id: 20,
    nama: 'Vivo X70 Pro+',
    harga: 21000000,
    ram: 12,
    prosesor: 'Exynos 1080',
    brand: 'Vivo',
    kamera: 50,
    ram_rom: '12GB/256GB',
    baterai: 4500,
  },
  {
    id: 1,
    nama: 'Xiaomi Redmi Note 10',
    harga: 3000000,
    ram: 4,
    prosesor: 'Snapdragon 678',
    brand: 'Xiaomi',
    kamera: 48,
    ram_rom: '4GB/64GB',
    baterai: 5000,
  },
  {
    id: 2,
    nama: 'Realme 7',
    harga: 2500000,
    ram: 6,
    prosesor: 'Helio G95',
    brand: 'Realme',
    kamera: 64,
    ram_rom: '6GB/128GB',
    baterai: 5000,
  },
  {
    id: 3,
    nama: 'Samsung Galaxy A32',
    harga: 3500000,
    ram: 6,
    prosesor: 'Mediatek Helio G80',
    brand: 'Samsung',
    kamera: 64,
    ram_rom: '6GB/128GB',
    baterai: 5000,
  },
  {
    id: 4,
    nama: 'Nokia 5.4',
    harga: 2000000,
    ram: 4,
    prosesor: 'Snapdragon 662',
    brand: 'Nokia',
    kamera: 48,
    ram_rom: '4GB/64GB',
    baterai: 4000,
  },
  {
    id: 5,
    nama: 'Motorola Moto G Power (2021)',
    harga: 2800000,
    ram: 4,
    prosesor: 'Snapdragon 662',
    brand: 'Motorola',
    kamera: 48,
    ram_rom: '4GB/64GB',
    baterai: 5000,
  },
  {
    id: 6,
    nama: 'Vivo Y20',
    harga: 2200000,
    ram: 4,
    prosesor: 'Mediatek Helio P35',
    brand: 'Vivo',
    kamera: 13,
    ram_rom: '4GB/64GB',
    baterai: 5000,
  },
  {
    id: 7,
    nama: 'OPPO A53',
    harga: 2600000,
    ram: 4,
    prosesor: 'Snapdragon 460',
    brand: 'OPPO',
    kamera: 13,
    ram_rom: '4GB/64GB',
    baterai: 5000,
  },
  {
    id: 8,
    nama: 'Infinix Hot 10',
    harga: 1800000,
    ram: 4,
    prosesor: 'Mediatek Helio G70',
    brand: 'Infinix',
    kamera: 16,
    ram_rom: '4GB/64GB',
    baterai: 5200,
  },
  {
    id: 9,
    nama: 'Lenovo K12 Note',
    harga: 2400000,
    ram: 4,
    prosesor: 'Snapdragon 662',
    brand: 'Lenovo',
    kamera: 48,
    ram_rom: '4GB/64GB',
    baterai: 5000,
  },
  {
    id: 10,
    nama: 'Huawei Y6p',
    harga: 1600000,
    ram: 3,
    prosesor: 'Mediatek Helio P22',
    brand: 'Huawei',
    kamera: 13,
    ram_rom: '3GB/64GB',
    baterai: 5000,
  },
  {
    id: 21,
    nama: 'Realme C25',
    harga: 1700000,
    ram: 4,
    prosesor: 'Helio G70',
    brand: 'Realme',
    kamera: 13,
    ram_rom: '4GB/64GB',
    baterai: 6000,
  },
  {
    id: 22,
    nama: 'Xiaomi Redmi 9',
    harga: 1600000,
    ram: 3,
    prosesor: 'Mediatek Helio G80',
    brand: 'Xiaomi',
    kamera: 13,
    ram_rom: '3GB/32GB',
    baterai: 5020,
  },
  {
    id: 23,
    nama: 'Samsung Galaxy M32',
    harga: 2000000,
    ram: 4,
    prosesor: 'Mediatek Helio G80',
    brand: 'Samsung',
    kamera: 64,
    ram_rom: '4GB/64GB',
    baterai: 6000,
  },
  {
    id: 24,
    nama: 'Nokia 3.4',
    harga: 1400000,
    ram: 3,
    prosesor: 'Snapdragon 460',
    brand: 'Nokia',
    kamera: 13,
    ram_rom: '3GB/32GB',
    baterai: 4000,
  },
  {
    id: 25,
    nama: 'Motorola Moto E7 Plus',
    harga: 1500000,
    ram: 4,
    prosesor: 'Snapdragon 460',
    brand: 'Motorola',
    kamera: 48,
    ram_rom: '4GB/64GB',
    baterai: 5000,
  },
  {
    id: 26,
    nama: 'Vivo Y12s',
    harga: 1300000,
    ram: 3,
    prosesor: 'Mediatek Helio P35',
    brand: 'Vivo',
    kamera: 13,
    ram_rom: '3GB/32GB',
    baterai: 5000,
  },
  {
    id: 27,
    nama: 'OPPO A15',
    harga: 1400000,
    ram: 3,
    prosesor: 'Mediatek Helio P35',
    brand: 'OPPO',
    kamera: 13,
    ram_rom: '3GB/32GB',
    baterai: 4230,
  },
  {
    id: 28,
    nama: 'Infinix Smart 5',
    harga: 1200000,
    ram: 2,
    prosesor: 'Mediatek Helio G25',
    brand: 'Infinix',
    kamera: 13,
    ram_rom: '2GB/32GB',
    baterai: 5000,
  },
  {
    id: 29,
    nama: 'Lenovo K11',
    harga: 1600000,
    ram: 3,
    prosesor: 'Mediatek Helio G25',
    brand: 'Lenovo',
    kamera: 13,
    ram_rom: '3GB/32GB',
    baterai: 4000,
  },
  {
    id: 30,
    nama: 'Huawei Y7p',
    harga: 1400000,
    ram: 4,
    prosesor: 'Kirin 710F',
    brand: 'Huawei',
    kamera: 48,
    ram_rom: '4GB/64GB',
    baterai: 4000,
  },
  {
    id: 51,
    nama: 'Xiaomi Mi 10T Pro',
    harga: 6500000,
    ram: 8,
    prosesor: 'Snapdragon 865',
    brand: 'Xiaomi',
    kamera: 108,
    ram_rom: '8GB/128GB',
    baterai: 5000,
  },
  {
    id: 52,
    nama: 'Realme GT',
    harga: 6000000,
    ram: 8,
    prosesor: 'Snapdragon 870',
    brand: 'Realme',
    kamera: 64,
    ram_rom: '8GB/128GB',
    baterai: 4500,
  },
  {
    id: 53,
    nama: 'Samsung Galaxy A72',
    harga: 7000000,
    ram: 6,
    prosesor: 'Snapdragon 720G',
    brand: 'Samsung',
    kamera: 64,
    ram_rom: '6GB/128GB',
    baterai: 5000,
  },
  {
    id: 54,
    nama: 'Nokia X30',
    harga: 6000000,
    ram: 6,
    prosesor: 'Snapdragon 732G',
    brand: 'Nokia',
    kamera: 64,
    ram_rom: '6GB/128GB',
    baterai: 4500,
  },
  {
    id: 55,
    nama: 'Motorola Moto G Power (2022)',
    harga: 5500000,
    ram: 6,
    prosesor: 'Snapdragon 665',
    brand: 'Motorola',
    kamera: 50,
    ram_rom: '6GB/128GB',
    baterai: 5000,
  },
  {
    id: 56,
    nama: 'Vivo V21e',
    harga: 6500000,
    ram: 8,
    prosesor: 'Dimensity 800U',
    brand: 'Vivo',
    kamera: 64,
    ram_rom: '8GB/128GB',
    baterai: 4000,
  },
  {
    id: 57,
    nama: 'OPPO Reno6',
    harga: 6800000,
    ram: 8,
    prosesor: 'Dimensity 900',
    brand: 'OPPO',
    kamera: 64,
    ram_rom: '8GB/128GB',
    baterai: 4300,
  },
  {
    id: 58,
    nama: 'Infinix Note 11',
    harga: 5500000,
    ram: 6,
    prosesor: 'Mediatek Helio G96',
    brand: 'Infinix',
    kamera: 50,
    ram_rom: '6GB/128GB',
    baterai: 5000,
  },
  {
    id: 59,
    nama: 'Lenovo Legion Y90',
    harga: 7500000,
    ram: 8,
    prosesor: 'Snapdragon 768G',
    brand: 'Lenovo',
    kamera: 64,
    ram_rom: '8GB/256GB',
    baterai: 5000,
  },
  {
    id: 60,
    nama: 'Huawei Nova 8',
    harga: 6800000,
    ram: 8,
    prosesor: 'Kirin 985',
    brand: 'Huawei',
    kamera: 64,
    ram_rom: '8GB/128GB',
    baterai: 4000,
  },
];

module.exports = { phones };
