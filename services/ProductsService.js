const PRODUCTS = [
  {
    id: 100,
    name: "ReactProX Headset",
    price: 350,
    image: require("../assets/products/headset-100.jpg"),
    description:
      "A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).",
  },
  {
    id: 101,
    name: "SMX Sprocket",
    price: 6000,
    image: require("../assets/products/sprocket-101.jpg"),
    description: "Sprockets are useful",
  },
  {
    id: 102,
    name: "SweetHome Cupcake",
    price: 2,
    image: require("../assets/products/cake-102.jpg"),
    description:
      "A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
