export default function About(){
    return(
        <div className="max-w-4xl mx-auto px-4 py-8 text-gray-300">
            <h1 className="text-3xl font-bold text-white mb-6">Acerca de Tracker OS</h1>
            
            <div className="bg-gray-800 border border-blue-900 rounded-lg p-6 mb-8">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h2 className="text-lg font-semibold text-blue-400">Potenciando Ideas y Conocimientos</h2>
                        <p className="text-blue-300 mt-1">Una aplicación creada con pasión por la comunidad</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">Nuestra Misión</h2>
                    <p className="text-gray-400 mb-4">
                        Tracker OS nace como un proyecto sin ánimo de lucro con un objetivo claro: potenciar ideas 
                        y conocimientos mediante herramientas accesibles para todos. Creemos en el poder de la 
                        tecnología para empoderar a la comunidad y facilitar el crecimiento personal y colectivo.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">El Creador</h2>
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-900 rounded-full p-3 mr-4">
                                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg">Sergio Ortiz</h3>
                                <p className="text-blue-400">Desarrollador y Creador</p>
                            </div>
                        </div>
                        <p className="text-gray-400">
                            Esta aplicación es el resultado del trabajo y dedicación de Sergio Ortiz, quien 
                            creó Tracker OS con la visión de contribuir a la comunidad y proveer herramientas 
                            útiles que respeten la privacidad de los usuarios.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">Nuestros Valores</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <h3 className="font-semibold text-white">Privacidad Primero</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Tu privacidad es nuestra prioridad. Todo el procesamiento ocurre localmente en tu dispositivo.
                            </p>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <h3 className="font-semibold text-white">Para la Comunidad</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Creado para ayudar y empoderar a la comunidad, sin intereses comerciales.
                            </p>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                                <h3 className="font-semibold text-white">Herramientas Accesibles</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Desarrollamos herramientas que sean fáciles de usar pero poderosas en capacidades.
                            </p>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors">
                            <div className="flex items-center mb-3">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <h3 className="font-semibold text-white">Código Abierto</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Creemos en la transparencia y el aprendizaje colectivo a través del código abierto.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">Compromiso con la Comunidad</h2>
                    <p className="text-gray-400 mb-4">
                        Tracker OS es más que una aplicación; es un compromiso con el crecimiento colectivo. 
                        Creemos que las mejores herramientas son aquellas que se comparten, se mejoran colaborativamente 
                        y están disponibles para todos, sin barreras económicas.
                    </p>
                    <p className="text-gray-400">
                        Nuestro objetivo es continuar desarrollando soluciones que potencien el conocimiento 
                        y faciliten la organización personal y profesional de manera ética y responsable.
                    </p>
                </section>

                <div className="bg-gray-800 border border-green-900 rounded-lg p-6 mt-8">
                    <h3 className="font-semibold text-green-400 mb-2">¿Quieres Contribuir?</h3>
                    <p className="text-green-300 text-sm">
                        Si te apasiona la tecnología y quieres ayudar a mejorar Tracker OS, estamos abiertos 
                        a colaboraciones, sugerencias y ideas de la comunidad. Juntos podemos crear herramientas 
                        aún más poderosas. Puedes encontrar el repositorio en el siguiente link: https://github.com/chechojgb/tracker-front-react
                    </p>
                </div>
            </div>
        </div>
    );
}