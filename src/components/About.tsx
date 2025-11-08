export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-gray-900 mb-4">
            Sobre a Nossa Loja
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p className="text-lg md:text-xl font-light text-gray-800 text-center mb-12">
            Localizada no coração do bairro Anália Franco, uma das regiões mais sofisticadas e privilegiadas de São Paulo, nossa loja nasceu do amor incondicional pela elegância e pela arte da moda.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Nossa Especialidade</h3>
              <p className="text-gray-700 leading-relaxed">
                Somos especialistas em bolsas de luxo, com foco em marcas consagradas como Hermès, Louis Vuitton, Chanel, Prada, Gucci, Dior, Fendi, Saint Laurent, Balenciaga, Valentino, Miu Miu, Celine, Givenchy, Bottega Veneta, Burberry, Chloé, Versace, Alexander McQueen e Christian Louboutin. Aqui, cada detalhe é pensado para oferecer uma experiência única aos amantes da alta costura e da exclusividade.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Nosso Compromisso</h3>
              <p className="text-gray-700 leading-relaxed">
                Nosso compromisso é oferecer produtos autênticos, com certificados de origem e notas fiscais de compra, garantindo procedência, segurança e confiança a cada cliente. Buscamos constantemente no mercado internacional as edições mais raras e desejadas de bolsas Hermès Birkin, Chanel Classic Flap, Louis Vuitton Capucines, Gucci Dionysus, Dior Lady Dior e Prada Galleria, entre outras joias da moda mundial.
              </p>
            </div>
          </div>

          <div className="my-16">
            <h3 className="text-3xl font-light text-gray-900 mb-6 text-center">Excelência em Curadoria e Seleção</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A essência da nossa curadoria está na busca pela perfeição. Trabalhamos diretamente com parceiros e revendedores de prestígio, participando de leilões, feiras e eventos de moda em Paris, Milão, Londres e Nova Iorque. Nossa coleção reúne desde os clássicos eternos da Hermès e da Chanel, até os designs contemporâneos da Balenciaga e Saint Laurent.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cada peça que chega à loja passa por uma análise minuciosa de autenticidade, realizada por especialistas em couro, metais e costura — aspectos fundamentais que diferenciam uma verdadeira Louis Vuitton de uma imitação.
            </p>
          </div>

          <blockquote className="border-l-4 border-gray-900 pl-6 py-4 my-12 italic text-gray-800 text-lg">
            Somos movidos pela filosofia de que uma bolsa Hermès Birkin, uma Chanel Boy Bag ou uma Dior Saddle não são apenas acessórios, mas sim investimentos atemporais que valorizam ao longo dos anos. A escassez de produção, a exclusividade dos materiais e o trabalho artesanal tornam essas peças verdadeiras obras de arte.
          </blockquote>

          <div className="my-16">
            <h3 className="text-3xl font-light text-gray-900 mb-6 text-center">As Marcas Mais Admiradas do Mundo</h3>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-sm">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Hermès</h4>
                <p className="text-gray-700 leading-relaxed">
                  A Hermès, símbolo máximo de exclusividade, continua sendo referência no universo do luxo. Modelos como Birkin, Kelly, Constance e Lindy são fabricados manualmente por artesãos que dedicam até 48 horas para finalizar uma única peça. O couro exótico, como o Niloticus Crocodile, eleva ainda mais o valor e o prestígio de cada criação.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Chanel</h4>
                <p className="text-gray-700 leading-relaxed">
                  Na Chanel, o ícone "2.55 Classic Flap" traduz o legado de elegância e feminilidade de Coco Chanel, enquanto a Boy Bag representa o lado audacioso da marca.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Louis Vuitton</h4>
                <p className="text-gray-700 leading-relaxed">
                  A Louis Vuitton, com sua inconfundível monogram canvas, é sinônimo de tradição e modernidade, unindo o espírito de viagem e sofisticação desde 1854.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Gucci</h4>
                <p className="text-gray-700 leading-relaxed">
                  A Gucci, por sua vez, encanta pela ousadia criativa. Modelos como a Gucci Marmont, Dionysus e Jackie 1961 são objetos de desejo para mulheres de estilo marcante.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Dior</h4>
                <p className="text-gray-700 leading-relaxed">
                  A Dior mantém viva a herança do "New Look" com a icônica Lady Dior, símbolo de elegância absoluta.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Prada</h4>
                <p className="text-gray-700 leading-relaxed">
                  A Prada, mesclando minimalismo e vanguarda, apresenta modelos como a Galleria e a Re-Edition 2000, queridinhas de colecionadores.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Fendi</h4>
                <p className="text-gray-700 leading-relaxed">
                  A Fendi, com sua clássica Baguette Bag, redefiniu o conceito de "it bag" desde os anos 90.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-sm">
                <h4 className="text-xl font-medium text-gray-900 mb-3">Balenciaga</h4>
                <p className="text-gray-700 leading-relaxed">
                  E a Balenciaga, com sua estética contemporânea e ousada, conquistou o público jovem com modelos como a City e a Hourglass.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-8">
              Também trabalhamos com outras marcas de expressão mundial: Valentino, conhecida por seu toque romântico; Celine, símbolo da sofisticação parisiense; Miu Miu, irreverente e criativa; Bottega Veneta, com sua textura intrecciato inconfundível; e Givenchy, que une sobriedade e força estética em cada detalhe. Além delas, temos exemplares de Burberry, Versace, Chloé, Loewe, Alexander McQueen e Christian Louboutin, reafirmando nosso compromisso com a pluralidade do luxo.
            </p>
          </div>

          <div className="my-16 bg-gray-900 text-white p-12 rounded-sm">
            <h3 className="text-3xl font-light mb-6 text-center">Autenticidade e Transparência</h3>
            <p className="leading-relaxed mb-4">
              A autenticidade é nosso valor central. Toda bolsa Louis Vuitton, Hermès, Chanel ou Gucci adquirida em nossa loja passa por verificação documental e inspeção de autenticidade com laudos técnicos.
            </p>
            <p className="leading-relaxed mb-4">
              Trabalhamos apenas com fornecedores e representantes oficiais, garantindo que cada Dior Saddle, cada Prada Galleria e cada Fendi Baguette sejam originais, novos ou em estado de conservação impecável.
            </p>
            <p className="leading-relaxed font-medium">
              Cada cliente recebe junto à sua aquisição um certificado de autenticidade, nota fiscal e garantia de procedência.
            </p>
          </div>

          <div className="my-16">
            <h3 className="text-3xl font-light text-gray-900 mb-6 text-center">O Bairro Anália Franco e o Conceito de Luxo Urbano</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Instalar nossa loja no Anália Franco não foi uma escolha casual. Trata-se de um dos bairros mais nobres de São Paulo, reconhecido por seu público sofisticado, cercado por boutiques, restaurantes e espaços culturais de alto padrão.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A atmosfera elegante do bairro reflete a filosofia da nossa marca: sofisticação, conforto e exclusividade. Aqui, cada cliente é recebido de forma personalizada, com atendimento reservado e consultoria de estilo feita por especialistas em moda internacional e bolsas de luxo.
            </p>
          </div>

          <div className="my-16">
            <h3 className="text-3xl font-light text-gray-900 mb-6 text-center">Nossa Filosofia: Luxo com Responsabilidade</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Entendemos que o verdadeiro luxo vai além da aparência — ele envolve ética, sustentabilidade e respeito à história da moda. Por isso, priorizamos marcas que valorizam o trabalho artesanal e a produção responsável.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Hermès, por exemplo, é referência mundial em sustentabilidade de couro. A Louis Vuitton mantém rígido controle de origem e qualidade de seus materiais. A Chanel e a Gucci avançam em políticas de produção sustentável, reduzindo impacto ambiental e incentivando a reutilização de materiais nobres.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nossa loja apoia e participa de iniciativas que promovem o consumo consciente, sem abrir mão da excelência e do design refinado.
            </p>
          </div>

          <div className="my-16">
            <h3 className="text-3xl font-light text-gray-900 mb-6 text-center">As Bolsas Como Símbolo de Patrimônio e Estilo</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Possuir uma Hermès Birkin, uma Chanel Classic Flap, uma Louis Vuitton Capucines ou uma Dior Lady Dior é mais do que adquirir um item de moda — é fazer parte de uma linhagem de elegância e legado.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Essas bolsas são reconhecidas mundialmente como símbolos de status, refinamento e investimento inteligente, pois, muitas vezes, valorizam ao longo do tempo, tornando-se itens de colecionador.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Colecionadores e apaixonados por moda reconhecem que modelos icônicos como a Gucci Dionysus, a Fendi Peekaboo, a Prada Cleo e a Celine Triomphe transcendem tendências passageiras e permanecem eternos.
            </p>
          </div>

          <div className="my-16 border-t border-b border-gray-200 py-12">
            <h3 className="text-3xl font-light text-gray-900 mb-6 text-center">Comércio Ético e Relacionamento de Confiança</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nossa relação com o cliente é baseada em transparência, respeito e confiança. Buscamos sempre garantir a procedência de cada produto, atuando com rigor jurídico e comercial, conforme as normas brasileiras de consumo e importação.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Temos orgulho em dizer que, além de oferecer bolsas Hermès, Louis Vuitton, Chanel, Dior, Gucci, Prada e Fendi, também orientamos nossos clientes sobre conservação, armazenamento e valorização de cada peça.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium text-lg">
              Nosso propósito é que cada cliente que adquire uma bolsa Hermès Birkin, uma Chanel 2.55, uma Dior Saddle ou uma Louis Vuitton Neverfull sinta-se dono de algo verdadeiramente único e eterno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
