import { 
  HiChip,
  HiTrendingUp,
  HiChartBar,
  HiLockClosed
} from 'react-icons/hi';
export default function Features(){
    const features = [
        {
          icon: HiTrendingUp,
          title: "Analíticas Predictivas",
          description: "Pronostica tu productividad y sugiere mejoras",
          color: "from-green-500 to-blue-500"
        },
        {
          icon: HiLockClosed,
          title: "Privacidad Total",
          description: "Tus datos nunca salen de tu computador",
          color: "from-orange-500 to-red-500"
        },
        {
          icon: HiChartBar,
          title: "Reportes Automáticos",
          description: "Genera insights detallados automáticamente",
          color: "from-cyan-500 to-blue-500"
        }
    ];
    return(
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combinamos machine learning, análisis de datos y diseño intuitivo 
              para ofrecerte la mejor experiencia de tracking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
    </section>
    );
}