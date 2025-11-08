import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-gray-900 mb-4">
            Visite Nossa Loja
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experimente um atendimento personalizado no coração do Anália Franco
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-2">Localização</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bairro Anália Franco<br />
                  São Paulo, SP
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-2">Telefone</h3>
                <p className="text-gray-600 leading-relaxed">
                  Entre em contato para agendarmos<br />
                  uma visita personalizada
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-2">E-mail</h3>
                <p className="text-gray-600 leading-relaxed">
                  Envie suas dúvidas e consultas<br />
                  sobre nossas peças exclusivas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-2">Horário de Atendimento</h3>
                <p className="text-gray-600 leading-relaxed">
                  Segunda a Sexta: 10h às 19h<br />
                  Sábado: 10h às 18h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Atendimento Exclusivo</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nossa loja oferece um ambiente sofisticado e privativo para que você possa conhecer nossas peças com tranquilidade e receber consultoria especializada.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cada visita é uma experiência única, onde nossos especialistas em moda de luxo estão prontos para auxiliá-lo na escolha da bolsa perfeita, seja uma Hermès Birkin, uma Chanel Classic Flap ou qualquer outra peça icônica de nossa coleção.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Agende sua visita e descubra o verdadeiro significado de luxo autêntico.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-900 text-white px-12 py-4 rounded-sm">
            <p className="text-sm tracking-wider font-light">
              CERTIFICADOS DE AUTENTICIDADE • NOTA FISCAL • GARANTIA DE PROCEDÊNCIA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
