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
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
  <div>
    <h2 className="text-3xl font-bold text-orange-500">50K+</h2>
    <p className="text-gray-400">Happy Customers</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-orange-500">120+</h2>
    <p className="text-gray-400">Food Items</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-orange-500">4.9⭐</h2>
    <p className="text-gray-400">Customer Rating</p>
  </div>
</div>
        </div>
      </div>

    </section>
  );
};