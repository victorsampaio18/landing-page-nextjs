"use client";
import { useState } from "react";

export default function FormSection() {
  // Variáveis para armazenar os dados
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  // Realiza a captura dos dados
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Realiza o envio dos dados
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Dados capturados:", formData);
    alert("Dados capturados no console!");
  }

  return (
    // Cria a section com um background na cor determinada
    <section id="form" className="relative w-full flex flex-col md:flex-row bg-[#03110D]">
      {/* Define o lado esquerdo com o texto e a imagem dos consultores */}
      <div className="w-full md:w-[60%] text-white flex flex-col justify-center py-8 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-50">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
          Fale agora <br /> com um consultor <br /> de vendas
        </h2>
        <p className="text-white text-base md:text-lg leading-relaxed mb-8">
          Tire suas dúvidas e conheça de perto o seu novo jeito de morar.
        </p>

        {/* Formulário para a versão mobile */}
        <div className="inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 bg-white rounded-md p-4 sm:p-6 w-auto text-black z-20 lg:hidden">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Fale agora mesmo com a Liva</h3>

          <form className="flex flex-col space-y-3 sm:space-y-4">
            <input
              name="nome"
              type="text"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className="border p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1AA584] text-sm sm:text-base"
            />
            <input
              name="telefone"
              type="tel"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="border p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1AA584] text-sm sm:text-base"
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1AA584] text-sm sm:text-base"
            />
            <textarea
              name="mensagem"
              placeholder="Mensagem"
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              className="border p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1AA584] text-sm sm:text-base resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#1AA584] hover:bg-[#48B79D] text-white py-2 sm:py-3 rounded-md font-semibold transition-colors text-sm sm:text-base"
            >
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>

        {/* Imagem dos consultores */}
        <div className="flex flex-col items-center md:items-start pt-10 md:pt-0">
          <p className="text-sm text-gray-400 mb-3">Consultores online</p>
          <div className="flex -space-x-1">
            <img
              src="/images/consultor1.jpg"
              alt="Consultor 1"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src="/images/consultor2.jpg"
              alt="Consultor 2"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src="/images/consultor3.jpg"
              alt="Consultor 3"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
          </div>
        </div>

      </div>

      {/* Define o lado direito apenas com a imagem sobreposta ao background */}
      <div className="w-full md:w-[40%] relative hidden md:block">
        <img
          src="/images/form1.jpg"
          alt="Form visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Formulário na versão desktop sobrepondo o background e a imagem */}
      <div className="absolute right-75 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-md p-6 md:p-8 w-full max-w-md text-black hidden md:block">
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Fale agora mesmo com a Liva</h3>

        <form className="flex flex-col space-y-3 sm:space-y-4">
          <input
            name="nome"
            type="text"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            className="border p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1AA584] text-sm sm:text-base"
          />
          <input
            name="telefone"
            type="tel"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="border p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1AA584] text-sm sm:text-base"
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1AA584] text-sm sm:text-base"
          />
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            rows={4}
            value={formData.mensagem}
            onChange={handleChange}
            className="border p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1AA584] text-sm sm:text-base resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#1AA584] hover:bg-[#48B79D] text-white py-2 sm:py-3 rounded-md font-semibold transition-colors text-sm sm:text-base"
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </section>
  );
}