export default function Configuration(){
    return(
        <div className="max-w-4xl mx-auto px-4 py-8 text-gray-300">
            <h1 className="text-3xl font-bold text-white mb-6">Configuración y Funcionamiento</h1>
            
            <div className="bg-gray-800 border border-purple-900 rounded-lg p-6 mb-8">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h2 className="text-lg font-semibold text-purple-400">Configuración 100% Local</h2>
                        <p className="text-purple-300 mt-1">Toda la personalización ocurre en tu dispositivo</p>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">Cómo Funciona la Configuración</h2>
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-purple-900 rounded-full p-2 mt-1 mr-4">
                                    <span className="text-white font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Descarga e Instalación</h3>
                                    <p className="text-gray-400">
                                        Al descargar la aplicación, obtienes un sistema completo que se instala localmente en tu dispositivo. 
                                        No requiere conexión constante a internet para funcionar.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-purple-900 rounded-full p-2 mt-1 mr-4">
                                    <span className="text-white font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Personalización Inicial</h3>
                                    <p className="text-gray-400">
                                        Configuras qué datos quieres rastrear, cómo visualizarlos y qué métricas son importantes para ti. 
                                        Toda esta configuración se guarda localmente en tu dispositivo.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-purple-900 rounded-full p-2 mt-1 mr-4">
                                    <span className="text-white font-bold text-sm">3</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Activación y Monitoreo</h3>
                                    <p className="text-gray-400">
                                        Una vez activada, la aplicación comienza a recopilar y procesar datos según tu configuración. 
                                        Todo el análisis ocurre en tiempo real dentro de tu dispositivo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">La Configuración Define tus Datos</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <h3 className="font-semibold text-white">Métricas Personalizadas</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Configuras qué métricas quieres rastrear. La aplicación solo recopila y muestra los datos que tú específicamente habilitas.
                            </p>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                                <h3 className="font-semibold text-white">Visualización Adaptable</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Eliges cómo quieres ver tus datos: gráficos, tablas, dashboards. La interfaz se adapta completamente a tus preferencias.
                            </p>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="font-semibold text-white">Frecuencia de Actualización</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Controlas cada cuánto se actualizan los datos y qué tan detallado quieres el historial. Tú defines el ritmo.
                            </p>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                                <h3 className="font-semibold text-white">Almacenamiento Local</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Todos los datos recopilados se guardan exclusivamente en tu dispositivo. Tú controlas el espacio de almacenamiento.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-4">Una Vez Activada...</h2>
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <p className="text-gray-400 mb-4">
                            Cuando activas la aplicación con tu configuración personalizada, el sistema comienza a operar de manera autónoma:
                        </p>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Recopila datos según los parámetros que configuraste</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Procesa la información localmente usando los recursos de tu dispositivo</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Almacena todo el historial de datos de forma segura y encriptada</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Muestra los resultados en tiempo real según tus preferencias de visualización</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="bg-gray-800 border border-blue-900 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-400 mb-2">Control Total en Tus Manos</h3>
                    <p className="text-blue-300 text-sm">
                        Recuerda: puedes modificar tu configuración en cualquier momento. Los cambios se aplican inmediatamente 
                        y afectan solo a los datos futuros, manteniendo tu historial existente intacto.
                    </p>
                </div>
            </div>
        </div>
    );
}