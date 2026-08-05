import { Heart, ShoppingCart, Star } from "lucide-react";

interface FoodCardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}

export default function FoodCard({
  image,
  name,
  price,
  rating,
}: FoodCardProps) {
  return (
    <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
          <Heart size={18} className="text-red-500" />
        </button>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold">{name}</h2>

        <div className="flex items-center gap-2 mt-2">
          <Star className="text-yellow-500 fill-yellow-500" size={18} />
          <span>{rating}</span>
        </div>

        <div className="flex justify-between items-center mt-5">
          <h3 className="text-2xl font-bold text-orange-500">
            ₹{price}
          </h3>

          <button className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}