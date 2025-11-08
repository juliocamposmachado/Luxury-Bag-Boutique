const brands = [
  'Hermès',
  'Louis Vuitton',
  'Chanel',
  'Prada',
  'Gucci',
  'Dior',
  'Fendi',
  'Saint Laurent',
  'Balenciaga',
  'Valentino',
  'Miu Miu',
  'Celine',
  'Givenchy',
  'Bottega Veneta',
  'Burberry',
  'Chloé',
  'Versace',
  'Alexander McQueen',
  'Christian Louboutin',
];

export default function Brands() {
  return (
    <section id="marcas" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-gray-900 mb-4">
            Marcas Exclusivas
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com as marcas mais prestigiadas e admiradas do mundo da alta costura
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-white p-8 flex items-center justify-center border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              <span className="text-lg md:text-xl font-light tracking-wide text-gray-800 text-center">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Cada marca representa décadas de tradição, excelência artesanal e design atemporal.
            Nossa curadoria garante que você tenha acesso às peças mais icônicas e desejadas do mercado internacional.
          </p>
        </div>
      </div>
    </section>
  );
}
