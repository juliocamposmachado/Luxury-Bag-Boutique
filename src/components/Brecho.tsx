import { Phone, MapPin, Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';

const fashionImages = [
  {
    url: 'https://www.rocknromancevintage.com/cdn/shop/files/IMG_0631_1024x1024.jpg?v=1695291775?auto=compress&cs=tinysrgb&w=600',
    alt: 'Figurino vintage clássico',
    category: 'Clássico'
  },
  {
    url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Figurino retrô anos 70',
    category: 'Retrô'
  },
  {
    url: 'https://images.pexels.com/photos/2115286/pexels-photo-2115286.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Alta costura e elegância',
    category: 'Luxo'
  },
  {
    url: 'https://images.pexels.com/photos/3621644/pexels-photo-3621644.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Moda contemporânea',
    category: 'Contemporâneo'
  },
  {
    url: 'https://images.pexels.com/photos/2291155/pexels-photo-2291155.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Tendência fashion',
    category: 'Tendência'
  },
  {
    url: 'https://images.pexels.com/photos/1690290/pexels-photo-1690290.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Estilo pessoal único',
    category: 'Estilo'
  }
];

const figurinoCategories = [
  {
    title: 'Figurinos de Época',
    description: 'Roupas do século XIX, trajes vitorianos, vestidos eduardianos e uniformes antigos',
    icon: '👑'
  },
  {
    title: 'Vintage & Retrô',
    description: 'Moda dos anos 20, 30, 40, 50, 60, 70 e 80 com autenticidade original',
    icon: '🎬'
  },
  {
    title: 'Cosplay & Fantasy',
    description: 'Personagens de animes, filmes, séries e games confeccionados com fidelidade',
    icon: '⚡'
  },
  {
    title: 'Alta Costura',
    description: 'Peças de marcas como Hermès, Dior, Gucci, Louis Vuitton e Chanel',
    icon: '✨'
  },
  {
    title: 'Cinema & TV',
    description: 'Réplicas e peças inspiradas em grandes produções mundiais',
    icon: '🎥'
  },
  {
    title: 'Moda Contemporânea',
    description: 'Looks modernos, minimalistas e criativos para produções atuais',
    icon: '🌟'
  }
];

export default function Brecho() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section id="brecho" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-gray-900 mb-4">
            Brechó Like Look Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-2">A Nova Referência Nacional em Figurinos</p>
          <div className="w-24 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Figurinos históricos, moda de época, alta costura e tendências mundiais reunidas em um único espaço criativo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="relative h-96 bg-gray-200 overflow-hidden group">
              <img
                src={fashionImages[selectedImage].url}
                alt={fashionImages[selectedImage].alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-2xl font-light">{fashionImages[selectedImage].alt}</p>
                <p className="text-sm text-gray-200">{fashionImages[selectedImage].category}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {fashionImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`h-24 overflow-hidden transition-all duration-300 ${selectedImage === idx ? 'ring-2 ring-gray-900' : 'opacity-60 hover:opacity-100'}`}
              >
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 text-white p-12 rounded-sm mb-16">
          <h3 className="text-3xl font-light mb-6 text-center">Nossa Missão</h3>
          <p className="text-lg leading-relaxed text-center mb-4">
            Ser a maior referência em figurinos e moda de época no Brasil. Mais do que um brechó, somos um espaço criativo e cultural dedicado à curadoria de peças únicas, figurinos históricos, roupas de alta costura, fantasias e itens raros que contam histórias.
          </p>
          <p className="text-lg font-light text-center text-gray-300">
            "Pensou em figurino, pensou Like Look Solutions."
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-light text-gray-900 mb-8 text-center">Nossas Categorias de Figurinos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {figurinoCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">{category.title}</h4>
                <p className="text-gray-700 leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 mb-16">
          <h3 className="text-3xl font-light text-gray-900 text-center">Localização e Atendimento</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Endereço</h4>
                  <p className="text-gray-700">
                    Rua Dante Pellacani, nº 92<br />
                    Anália Franco / Tatuapé<br />
                    São Paulo, SP
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Sparkles className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Parceiro</h4>
                  <p className="text-gray-700">
                    Em parceria com a<br />
                    Rádio Tatuapé FM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-900 p-8">
            <h4 className="text-2xl font-light text-gray-900 mb-6 text-center">Contatos Diretos</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-gray-600">WhatsApp & Telefone</p>
                  <p className="text-lg font-medium text-gray-900">+55 11 99770-6292</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-gray-600">Telefone</p>
                  <p className="text-lg font-medium text-gray-900">+55 11 3680-8030</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-gray-600">WhatsApp</p>
                  <p className="text-lg font-medium text-gray-900">+55 11 99294-6628</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-gray-600">WhatsApp</p>
                  <p className="text-lg font-medium text-gray-900">+55 11 97060-3441</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-sm">
            <h4 className="text-2xl font-light text-gray-900 mb-4">A Alma do Brechó</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Brechó Like Look Solutions nasceu da paixão por descobrir o extraordinário no esquecido. Somos garimpeiros de estilo, exploradores da moda mundial, caçadores de figurinos que atravessam o tempo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nosso olhar atento e experiência em curadoria permitem identificar valor onde muitos veem apenas uma peça antiga. Cada roupa, acessório ou calçado é cuidadosamente selecionado, higienizado, catalogado e restaurado com o respeito que merece.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-sm">
            <h4 className="text-2xl font-light text-gray-900 mb-4">Como Trabalhamos</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nosso brechó funciona como um ateliê de figurinos e moda personalizada. O cliente pode entrar em contato e solicitar o que deseja — seja uma roupa de época para teatro, um figurino de cosplay raro ou um traje de gala para um evento especial.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Mesmo que não tenhamos a peça em estoque, nossa equipe entra em ação: garimpamos, procuramos, importamos e encontramos o que você precisa!
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-sm text-center">
          <h3 className="text-3xl font-light mb-4">Marcas de Alta Costura</h3>
          <p className="text-gray-300 mb-6">Trabalhamos com as mais prestigiadas marcas internacionais</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Hermès', 'Louis Vuitton', 'Chanel', 'Gucci', 'Dior', 'Prada', 'Fendi', 'Saint Laurent'].map((brand) => (
              <span key={brand} className="bg-gray-700 px-4 py-2 text-sm tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white border border-gray-200 p-12 rounded-sm">
          <h3 className="text-3xl font-light text-gray-900 mb-6 text-center">Sustentabilidade e Moda</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-4">
            O brechó é sinônimo de sustentabilidade. Em um mundo cada vez mais consciente, o reaproveitamento e a ressignificação de roupas e figurinos tornam-se atitudes éticas e sofisticadas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto font-medium">
            Nosso lema é: <span className="text-gray-900 font-semibold">renovar, reutilizar e reinventar.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
