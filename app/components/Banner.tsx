"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// caminho das imagens
const slides = [
  {
    id: 1,
    image: "/images/banner1.jpg",
  },
  {
    id: 2,
    image: "/images/banner2.jpg"
  },
  {
    id: 3,
    image: "/images/banner3.jpg"
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // função para voltar a imagem do carrossel
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  //função para passar a imagem do carrossel
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Imagem para o carrossel */}
          <img
            src={slide.image}
            className="w-full h-full object-cover"
          />

          {/* Conteúdo sobreposto a imagem do banner */}
          <div className="absolute inset-0 flex flex-col justify-center pl-4 xl:pl-50 max-w-xl items-start">
            <p className="text-white uppercase tracking-widest text-sm font-medium text-shadow-lg pl-1">
              Pré lançamento
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-2 text-shadow-lg">
              Barra View
            </h1>
            <p className="mt-4 inline-block bg-[#48B79D] text-black px-4 py-1 rounded-md font-medium text-shadow-sm">
              Apartamento com 3 dormitórios sendo 1 suíte
            </p>
            <button className="mt-6 border border-white text-white px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors text-shadow-sm inline-block w-auto">
              Saiba Mais
            </button>
          </div>
        </div>
      ))}

      {/* Botão da esquerda (para voltar a imagem anterior) */}
      <button
        onClick={prevSlide}
        className="absolute left-0 bottom-0 md:top-1/2 md:-translate-y-1/2 md:self-center bg-black/90 px-4 py-6 text-white hover:bg-black transition"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Botão direita (para avançar para a próxima imagem*/}
      <button
        onClick={nextSlide}
        className="absolute right-0 bottom-0 md:top-1/2 md:-translate-y-1/2 md:self-center bg-black/90 px-4 py-6 text-white hover:bg-black transition"
      >
        <FaArrowRight size={20} />
      </button>
    </section>
  );
}