import classic from "@/assets/cake-classic.jpg";
import pistachio from "@/assets/cake-pistachio.jpg";
import caramel from "@/assets/cake-caramel.jpg";
import espresso from "@/assets/cake-espresso.jpg";

export type Cake = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
};

export const cakes: Cake[] = [
  {
    id: "classic-cocoa",
    name: "Classic Cocoa",
    tagline: "The original lazy cake",
    description: "Belgian dark chocolate folded with butter biscuits and a whisper of vanilla. Dense, fudgy, and sliced cold.",
    price: 28,
    image: classic,
    tag: "Bestseller",
  },
  {
    id: "pistachio-rose",
    name: "Pistachio & Rose",
    tagline: "Floral, nutty, refined",
    description: "White chocolate ganache with crushed Sicilian pistachios and a delicate rosewater finish.",
    price: 34,
    image: pistachio,
    tag: "New",
  },
  {
    id: "salted-caramel",
    name: "Salted Caramel Hazelnut",
    tagline: "Buttery and golden",
    description: "Soft caramel, toasted Piedmont hazelnuts, and flaky sea salt over a chocolate biscuit base.",
    price: 32,
    image: caramel,
  },
  {
    id: "espresso",
    name: "Espresso Tiramisu",
    tagline: "For the coffee devoted",
    description: "Mascarpone, single-origin espresso, and ladyfingers layered into a cold-set cocoa loaf.",
    price: 30,
    image: espresso,
  },
];
