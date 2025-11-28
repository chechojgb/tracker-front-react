export default function Privacy(){
    return(
        <div className="max-w-4xl mx-auto px-4 py-8 text-gray-300">
            <h1 className="text-3xl font-bold text-white mb-6">Política de Privacidad</h1>
            
            <div className="bg-gray-800 border border-green-900 rounded-lg p-6 mb-8">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h2 className="text-lg font-semibold text-green-400">Procesamiento 100% Local</h2>
                        <p className="text-green-300 mt-1">Tu información nunca abandona tu dispositivo</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">Nuestro Compromiso con tu Privacidad</h2>
                    <p className="mb-4">
                        En Tracker OS, entendemos que tus datos son sensibles y personales. Por eso hemos diseñado 
                        nuestra plataforma con un enfoque radical en la privacidad.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">Cómo Protegemos tus Datos</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <h3 className="font-semibold text-white">Procesamiento Local</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Todo el análisis de datos ocurre exclusivamente en tu dispositivo. No utilizamos servidores externos ni servicios en la nube para procesar tu información.
                            </p>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <h3 className="font-semibold text-white">Encriptación Avanzada</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Implementamos tecnología de encriptación de última generación para asegurar que tus datos permanezcan protegidos en todo momento.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">Lo que Nunca Hacemos</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            No enviamos tus datos a servidores externos
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            No compartimos información con terceros
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            No recopilamos datos para marketing
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            No realizamos tracking cruzado entre aplicaciones
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            No almacenamos tu información en la nube
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">Transparencia Total</h2>
                    <p className="mb-4 text-gray-400">
                        Creemos que la privacidad debe ser transparente. Puedes verificar nuestro código y 
                        metodología en cualquier momento. Tu confianza es nuestra prioridad.
                    </p>
                </section>

                <div className="bg-gray-800 border border-blue-900 rounded-lg p-6 mt-8">
                    <h3 className="font-semibold text-blue-400 mb-2">¿Tienes preguntas?</h3>
                    <p className="text-blue-300 text-sm">
                        Si tienes alguna duda sobre nuestra política de privacidad o cómo protegemos tus datos, 
                        no dudes en contactarnos.
                    </p>
                </div>
            </div>
        </div>
    );
}