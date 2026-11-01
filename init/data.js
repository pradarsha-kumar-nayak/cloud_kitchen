
const sampleMenus = [
  {
    name: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=687&auto=format&fit=crop",
    title: "Hyderabadi Chicken Biryani",
    price: 1500,
  },
  {
    name: "Chicken Dum Biryani",
    image: "https://images.unsplash.com/photo-1642972420043-4736c570a716?q=80&w=1032&auto=format&fit=crop",
    title: "Royal Chicken Dum Biryani",
    price: 1200,
  },
  {
    name: "Mutton Biryani",
    image: "https://images.unsplash.com/photo-1705174299330-939dd03cc864?q=80&w=687&auto=format&fit=crop",
    title: "Special Mutton Biryani",
    price: 1000,
  },
  {
    name: "Chicken curry",
    image: "https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?q=80&w=1160&auto=format&fit=crop",
    title: "Special Chicken curry",
    price: 250,
  },
  {
    name: "Bone less chicken",
    image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=1160&auto=format&fit=crop",
    title: "bone less chicken fry",
    price: 350,
  },
  {
    name: "Chicken Kebab",
    image: "https://plus.unsplash.com/premium_photo-1695456065048-52a053ce9dd2?q=80&w=764&auto=format&fit=crop",
    title: "Juicy Grilled Chicken Kebab",
    price: 300,
  },
  {
    name: "Mutton Curry",
    image: "https://images.unsplash.com/photo-1727280213367-ecca818ba188?q=80&w=1160&auto=format&fit=crop",
    title: "Traditional Mutton Curry",
    price: 450,
  },
  {
    name: "Butter Chicken",
    image: "https://plus.unsplash.com/premium_photo-1700752342459-c276465c177e?q=80&w=1170&auto=format&fit=crop",
    title: "Creamy Butter Chicken",
    price: 400,
  },
  {
    name: "Chicken Curry",
    image: "https://images.unsplash.com/photo-1652545296893-ff9227b3512e?q=80&w=1176&auto=format&fit=crop",
    title: "Homestyle Chicken Curry",
    price: 350,
  },
  {
    name: "Veg biryani",
    image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?q=80&w=946&auto=format&fit=crop",
    title: "Authentic style veg biryani",
    price: 200,
  },
  
  {
    name: "Veg thali",
    image: "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?q=80&w=1111&auto=format&fit=crop",
    title: "Authentic style veg thali",
    price: 500,
  },
  {
    name: "Tadka",
    image: "https://plus.unsplash.com/premium_photo-1700751850890-63da65f9ce88?q=80&w=1170&auto=format&fit=crop",
    title: "masala tadka",
    price: 100,
  },
  {
    name: "Fish",
    image: "https://images.unsplash.com/photo-1620894580123-466ad3a0ca06?q=80&w=735&auto=format&fit=crop",
    title: "fish curry",
    price: 320,
  },
  {
    name: "Fish",
    image: "https://images.unsplash.com/photo-1761314036779-84078bec535c?q=80&w=1170&auto=format&fit=crop",
    title: "fish curry",
    price: 250,
  },
  {
    name: "Elish fish",
    image: "https://images.unsplash.com/photo-1654863404432-cac67587e25d?q=80&w=1170&auto=format&fit=crop",
    title: "Authentic style elish fish curry",
    price: 280,
  },
  {
    name: "Egg biriyani",
    image: "https://images.unsplash.com/photo-1764315652645-81e5c2bdafb9?q=80&w=948&auto=format&fit=crop",
    title: "egg biriyani",
    price: 450,
  },
  {
    name: "Egg curry ",
    image: "https://images.unsplash.com/photo-1764315197254-94385571df22?q=80&w=1031&auto=format&fit=crop",
    title: "Spicy egg Masala",
    price: 550,
  },
  {
    name: "Half boil egg",
    image: "https://images.unsplash.com/photo-1579353446482-1005b0adea1d?q=80&w=778&auto=format&fit=crop",
    title: "egg and rice",
    price: 420,
  },
  {
    name: "Veg fried Rice",
    image: "https://images.unsplash.com/photo-1733414717515-d997dafb7341?q=80&w=954&auto=format&fit=crop",
    title: "Wok-Tossed Veg Fried Rice",
    price: 280,
  },
  {
    name: "Egg fried Rice",
    image: "https://images.unsplash.com/photo-1609570324378-ec0c4c9b6ba8?q=80&w=1170&auto=format&fit=crop",
    title: "Wok-Tossed Veg Fried Rice",
    price: 250,
  },
  {
    name: "Chicken Noodles",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=992&auto=format&fit=crop",
    title: "Spicy chicken noodles",
    price: 220,
  },
  {
    name: "Veg Noodles",
    image: "https://images.unsplash.com/photo-1607328874071-45a9cd600644?q=80&w=1171&auto=format&fit=crop",
    title: "plane veg noodles",
    price: 180,
  },
  {
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1709201417401-5c72ed84f191?q=80&w=923&auto=format&fit=crop",
    title: "spicy pasta",
    price: 220,
  },
  {
    name: "Egg noodles",
    image: "https://images.unsplash.com/photo-1751151497803-baad38515fe4?q=80&w=736&auto=format&fit=crop",
    title: "testy spicy noodles",
    price: 100,
  },
  {
    name: "Berger",
    image: "https://images.unsplash.com/photo-1623407176536-6b5a8c020bd8?q=80&w=687&auto=format&fit=crop",
    title: "Crispy testy burger",
    price: 320,
  },
  {
    name: "Egg maggie",
    image: "https://images.unsplash.com/photo-1603033172872-c2525115c7b9?q=80&w=1160&auto=format&fit=crop",
    title: "testy egg maggie",
    price: 120,
  },
];

module.exports = { data: sampleMenus };