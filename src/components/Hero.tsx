export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light tracking-wider text-gray-900 mb-6">
          Luxo Autêntico
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-700 mb-4">
          em Cada Detalhe
        </p>
        <div className="w-24 h-px bg-gray-900 mx-auto mb-8"></div>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Especialistas em bolsas de luxo das marcas mais prestigiadas do mundo
        </p>
        <p className="text-sm md:text-base text-gray-500 mt-4">
          Hermès • Louis Vuitton • Chanel • Gucci • Dior • Prada
        </p>
      </div>
    </section>
  );
}
