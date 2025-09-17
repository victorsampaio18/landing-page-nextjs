export default function Info() {
  return (
    <section id="info" className="py-20 bg-white px-6 sm:px-12 md:px-40 grid md:grid-cols-2 items-stretch gap-12">
      {/* Imagem (que fica oculta na versão mobile) */}
      <div className="hidden md:block">
        <div className="h-full">
          <img
            src="/images/info1.png"
            alt="Quem somos"
            className="w-full max-h-[500px] object-contain rounded-md mx-auto"
          />
        </div>
      </div>

      {/* Texto informativo */}
      <div className="flex flex-col items-start justify-center h-full max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight text-left">
          Contruimos confiança <br />
          <span className="text-green-600">e realizamos sonhos!</span>
        </h2>

        <p className="mt-6 text-gray-600 text-base leading-relaxed text-justify">
          Na Liva, cada projeto é planejado para facilitar a vida dos moradores,
          trazendo uma sensação máxima de bem-estar. Espaços que abrigam histórias
          de vida e que são desenvolvidos para que você viva momentos incríveis ao
          lado da sua família.
        </p>

        <button className="mt-8 inline-block border border-black px-6 py-2 rounded-sm text-sm font-medium tracking-wide text-black hover:bg-black hover:text-white transition w-auto">
          SAIBA MAIS
        </button>
      </div>
    </section>
  );
}