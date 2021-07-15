import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Samil",
      email: "samilkivanc26@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Asus Rog Strix",
      category: "Laptop",
      image:
        "https://productimages.hepsiburada.net/s/90/550/110000033411725.jpg/format:webp",
      price: 2000,
      countInStock: 10,
      brand: "Asus",
      rating: 1.5,
      numReviews: 10,
      description: "High Quality Laptop",
    },
    {
      name: "Acer Swift SF314-42",
      category: "Laptop",
      image:
        "https://productimages.hepsiburada.net/s/51/550/11057427054642.jpg/format:webp",
      price: 1500.0,
      countInStock: 8,
      brand: "Acer",
      rating: 4.5,
      numReviews: 10,
      description:
        "Acer Swift SF314-42 AMD Ryzen 3 4300U 8GB 128GB SSD Linux 14",
    },
    {
      name: "Lenovo ThinkPad E15",
      category: "Laptop",
      image:
        "https://productimages.hepsiburada.net/s/93/550/110000036389082.jpg/format:webp",
      price: 3500.0,
      countInStock: 0,
      brand: "Lenovo",
      rating: 4.5,
      numReviews: 10,
      description:
        "Lenovo ThinkPad E15 AMD Ryzen 7 4700U 16GB 512GB SSD Freedos 15.6",
    },
    {
      name: "HP 14S-FQ0034NT",
      category: "Laptop",
      image:
        "https://productimages.hepsiburada.net/s/82/550/110000024053924.jpg/format:webp",
      price: 4000.0,
      countInStock: 10,
      brand: "Asus",
      rating: 4.5,
      numReviews: 10,
      description:
        "HP 14S-FQ0034NT AMD Ryzen 5 4500U 8GB 256GB SSD Windows 10 Home 14",
    },
    {
      name: "Casper Excalibur G770.1030-BUJ0X",
      category: "Laptop",
      image:
        "https://productimages.hepsiburada.net/s/79/550/110000021601759.jpg/format:webp",
      price: 6000.0,
      countInStock: 10,
      brand: "Casper",
      rating: 4.5,
      numReviews: 10,
      description:
        "Casper Excalibur G770.1030-BUJ0X Intel Core i5 10300H 16GB 240GB M2 SSD GTX1650Ti FreeDos 15.6",
    },
    {
      name: "MSI Modern 15 A10M-614XTR",
      category: "Laptop",
      image:
        "https://productimages.hepsiburada.net/s/58/550/11325632675890.jpg/format:webp",
      price: 2750.0,
      countInStock: 10,
      brand: "Asus",
      rating: 5,
      numReviews: 10,
      description:
        "MSI Modern 15 A10M-614XTR Intel Core i5 10210U 8GB 256GB SSD Freedos 15.6",
    },
    {
      name: "Apple MacBook Air M1",
      category: "Laptop",
      image:
        "https://productimages.hepsiburada.net/s/49/550/10983950254130.jpg/format:webp",
      price: 2750.0,
      countInStock: 10,
      brand: "Apple",
      rating: 5,
      numReviews: 10,
      description: "Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13",
    },
    {
      name: "Dell G315 Intel Core i7 10750H",
      category: "Laptop",
      image:
        "https://productimages.hepsiburada.net/s/74/550/110000015963850.jpg/format:webp",
      price: 2750.0,
      countInStock: 10,
      brand: "Dell",
      rating: 5,
      numReviews: 10,
      description:
        "Dell G315 Intel Core i7 10750H 8GB 512GB SSD GTX1650 Ubuntu 15.6",
    },
  ],
};
export default data;
