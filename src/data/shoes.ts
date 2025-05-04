interface Shoe {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
  isNew: boolean;
  has360View?: boolean;
  image360BaseUrl?: string;
  image360Frames?: number;
}

const shoes: Shoe[] = [
  {
    id: 1,
    name: "Travis Scott x Air Jordan 1 Retro High OG 'Mocha'",
    brand: "Jordan",
    price: 1999.99,
    rating: 4.9,
    image: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-Travis-Scott/Images/Air-Jordan-1-Retro-High-Travis-Scott/Lv2/img01.jpg?w=576&q=60&dpr=1&updated_at=1635191289&h=384",
    isNew: true,
    has360View: true,
    image360BaseUrl: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-Travis-Scott/Images/Air-Jordan-1-Retro-High-Travis-Scott/Lv2/img",
    image360Frames: 36
  },
  {
    id: 2,
    name: "Alexander McQueen Oversized Sneaker 'White Black'",
    brand: "Alexander McQueen",
    price: 899.99,
    rating: 4.7,
    image: "https://images.stockx.com/360/Alexander-McQueen-Oversized-Ivory-Black/Images/Alexander-McQueen-Oversized-Ivory-Black/Lv2/img01.jpg?w=576&q=60&dpr=1&updated_at=1700839827&h=384",
    isNew: true,
    has360View: true,
    image360BaseUrl: "https://images.stockx.com/360/Alexander-McQueen-Oversized-Ivory-Black/Images/Alexander-McQueen-Oversized-Ivory-Black/Lv2/img",
    image360Frames: 36
  },
  {
    id: 3,
    name: "Air Jordan 11 Retro 'Cherry'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 4,
    name: "Air Jordan 11 Retro 'Cap and Gown'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 5,
    name: "Air Jordan 1 Retro High OG 'Patent Bred'",
    brand: "Jordan",
    price: 399.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 6,
    name: "Dior B22 'Black Reflective'",
    brand: "Dior",
    price: 1299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 7,
    name: "Off-White x Wmns Air Jordan 4 Retro SP 'Sail'",
    brand: "Off-White",
    price: 899.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 8,
    name: "Air Jordan 4 Retro SE 'Wet Cement'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 9,
    name: "Air Jordan 3 Retro 'Fire Red'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 10,
    name: "Balenciaga Track Sneaker 'White'",
    brand: "Balenciaga",
    price: 899.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 11,
    name: "Air Jordan 4 Retro 'Taupe Haze'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 12,
    name: "Air Jordan 4 Retro 'Lightning'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 13,
    name: "Air Jordan 5 Retro OG 'Black Metallic Reimagined'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 14,
    name: "Balenciaga Speed Sneaker 'Black'",
    brand: "Balenciaga",
    price: 899.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 15,
    name: "Nigel Sylvester x Air Jordan 4 Retro OG SP 'Brick By Brick'",
    brand: "Jordan",
    price: 399.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 16,
    name: "Balenciaga Track Sneaker 'Black White'",
    brand: "Balenciaga",
    price: 899.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 17,
    name: "Air Jordan 3 Retro SE 'Unite - CHI Exclusive'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 18,
    name: "Air Jordan 1 Retro High OG 'University Blue'",
    brand: "Jordan",
    price: 399.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 19,
    name: "Wmns Air Jordan 4 Retro 'Frozen Moments'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 20,
    name: "Off-White x Air Jordan 5 Retro SP 'Muslin'",
    brand: "Off-White",
    price: 899.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 21,
    name: "Air Jordan 5 Retro 'Raging Bull'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 22,
    name: "Air Jordan 3 Retro 'Cement Grey'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 23,
    name: "Balenciaga Wmns Runner Sneaker 'Black'",
    brand: "Balenciaga",
    price: 899.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 24,
    name: "Air Jordan 5 Retro SE 'UNC'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 25,
    name: "Air Jordan 11 Retro 'Legend Blue / Columbia'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 26,
    name: "Air Jordan 11 Retro 'Win Like '96'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 27,
    name: "Air Jordan Retro Low GS 'Cement Grey'",
    brand: "Jordan",
    price: 199.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 28,
    name: "Air Jordan 3 Retro 'White Cement Reimagined'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 29,
    name: "Fragment Design x Travis Scott x Air Jordan 1 Retro Low",
    brand: "Jordan",
    price: 1999.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 30,
    name: "Wmns Air Jordan 3 Retro 'Neapolitan'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 31,
    name: "Alexander McQueen Oversized Sneaker 'Black White'",
    brand: "Alexander McQueen",
    price: 899.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 32,
    name: "Air Jordan 3 Retro 'Dark Iris'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 33,
    name: "Air Jordan 5 Retro 'Aqua'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 34,
    name: "Air Jordan 3 Retro 'Palomino'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 35,
    name: "Air Jordan 1 Retro High OG 'Chicago Lost & Found'",
    brand: "Jordan",
    price: 399.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 36,
    name: "Air Jordan 4 Retro 'White Thunder'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 37,
    name: "Alexander McQueen Oversized Sneaker 'White Lust Red'",
    brand: "Alexander McQueen",
    price: 899.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 38,
    name: "Alexander McQueen Oversized Sneaker 'Black'",
    brand: "Alexander McQueen",
    price: 899.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 39,
    name: "Off-White x Air Jordan 5 SP 'Sail'",
    brand: "Off-White",
    price: 899.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 40,
    name: "Travis Scott x Air Jordan 1 Retro Low OG PS 'Reverse Mocha'",
    brand: "Jordan",
    price: 1999.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 41,
    name: "A Ma Maniére x Air Jordan 4 Retro 'Violet Ore'",
    brand: "Jordan",
    price: 399.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 42,
    name: "Alexander McQueen Oversized Sneaker 'White'",
    brand: "Alexander McQueen",
    price: 899.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 43,
    name: "Air Jordan 3 Retro 'Black Cat'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 44,
    name: "Balenciaga Track Sneaker 'Grey White'",
    brand: "Balenciaga",
    price: 899.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 45,
    name: "Air Jordan 11 Retro 'Cool Grey'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 46,
    name: "Off-White x Air Jordan 1 Retro High OG 'UNC'",
    brand: "Off-White",
    price: 899.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 47,
    name: "Air Jordan 5 Retro 'Racer Blue'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 48,
    name: "Balenciaga Track Sneaker 'Triple Black'",
    brand: "Balenciaga",
    price: 899.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 49,
    name: "Air Jordan 11 Retro 'Gratitude / Defining Moments'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 50,
    name: "Wmns Air Jordan 5 Retro GORE-TEX 'Off-Noir'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 51,
    name: "Dior x Air Jordan 1 High",
    brand: "Dior",
    price: 1999.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 52,
    name: "Dior B23 High 'Dior Oblique'",
    brand: "Dior",
    price: 1299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 53,
    name: "Air Jordan 3 Retro LS 'Cool Grey'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 54,
    name: "KAWS x Air Jordan 4 Retro 'Cool Grey'",
    brand: "Jordan",
    price: 1999.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 55,
    name: "Dior B30 'Charcoal Light Grey'",
    brand: "Dior",
    price: 1299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 56,
    name: "Air Jordan 4 Retro 'Black Cat'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 57,
    name: "Paris Saint-Germain x Air Jordan 4 Retro 'Bordeaux'",
    brand: "Jordan",
    price: 399.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 58,
    name: "Air Jordan 4 Retro SE Craft 'Photon Dust'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 59,
    name: "Dior B22 'White Grey'",
    brand: "Dior",
    price: 1299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 60,
    name: "Air Jordan 4 Retro 'Infrared'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 61,
    name: "Air Jordan 4 Retro 'Military Blue'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 62,
    name: "Dior B30 'Black'",
    brand: "Dior",
    price: 1299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 63,
    name: "Air Jordan 4 Retro 'Red Cement'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 64,
    name: "Air Jordan 5 Retro 'Black Grape'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 65,
    name: "Air Jordan 4 Retro 'Military Black'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 66,
    name: "Alexander McQueen Oversized Sneaker 'Black'",
    brand: "Alexander McQueen",
    price: 899.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 67,
    name: "Travis Scott x Air Jordan 1 Retro Low OG SP 'Reverse Olive'",
    brand: "Jordan",
    price: 1999.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 68,
    name: "Nike SB x Air Jordan 4 Retro SP 'Pine Green'",
    brand: "Jordan",
    price: 399.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 69,
    name: "Air Jordan 3 Retro OG 'Black Cement'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 70,
    name: "Travis Scott x Air Jordan 1 Retro Low OG SP 'Black Phantom'",
    brand: "Jordan",
    price: 1999.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 71,
    name: "Air Jordan 3 Retro 'UNC'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 72,
    name: "Air Jordan 11 Retro Low 'Emerald'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 73,
    name: "Off-White x Air Jordan 1 Retro High OG 'Chicago'",
    brand: "Off-White",
    price: 899.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 74,
    name: "Air Jordan 4 Retro 'University Blue'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 75,
    name: "Air Jordan 3 Retro 'Midnight Navy'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 76,
    name: "Air Jordan 11 Retro 'Bred'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 77,
    name: "Air Jordan 4 Retro 'Thunder'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 78,
    name: "Air Jordan 4 Retro 'Red Thunder'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 79,
    name: "Air Jordan 1 Retro High OG 'Dark Mocha'",
    brand: "Jordan",
    price: 399.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 80,
    name: "Air Jordan 3 Retro GS 'White Cement Reimagined'",
    brand: "Jordan",
    price: 199.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 81,
    name: "Travis Scott x Air Jordan 4 Retro 'Cactus Jack'",
    brand: "Jordan",
    price: 1999.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: false
  },
  {
    id: 82,
    name: "Air Jordan 4 Retro 'White Oreo'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 83,
    name: "Nike SB x Air Jordan 4 Retro SP 'Navy'",
    brand: "Jordan",
    price: 399.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  },
  {
    id: 84,
    name: "Air Jordan 4 Retro 'Bred Reimagined'",
    brand: "Jordan",
    price: 299.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80",
    isNew: true
  }
];

export default shoes;