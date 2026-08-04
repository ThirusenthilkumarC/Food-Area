export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white">

      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          Delicious Food <span className="text-orange-500">Delivered Fast</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Experience premium dining with fresh ingredients, fast delivery,
          and unforgettable taste.
        </p>

        <div className="flex justify-center gap-5">
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition">
            Order Now
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition">
            View Menu
          </button>
        </div>
      </div>

    </section>
  );
};