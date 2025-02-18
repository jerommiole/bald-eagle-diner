const Loading = () => {
  return (
    <div className="bg-grey500">
      <section className="mx-auto lg:max-w-7xl p-6 lg:p-24">
        <div className="flex flex-wrap gap-2 mb-8">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-md bg-gray-200 animate-pulse w-24 h-10"
            ></div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="relative group p-4 bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md bg-gray-200 animate-pulse"></div>
              <p className="mt-2 pt-2 text-md md:text-lg font-semibold text-center bg-gray-200 animate-pulse h-6 w-3/4 mx-auto"></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Loading;
