"use client";
import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md px-6 md:px-50 relative">
      {/* Logo da Liva */}
      <div className="flex items-center gap-2">
        <Image src="/images/livaLogo.png" alt="Liva" width={100} height={40} />
      </div>

      {/* Menu para a versão desktop */}
      <nav className="hidden md:flex gap-10 font-bold text-gray-800">
        <a href="#home" className="hover:text-[#1AA584] transition">Home</a>
        <a href="#info" className="hover:text-[#1AA584] transition">Sobre a Liva</a>
        <a href="#empreendimentos" className="hover:text-[#1AA584] transition">Empreendimentos</a>
        <a href="#noticias" className="hover:text-[#1AA584] transition">Notícias</a>
        <a href="#form" className="hover:text-[#1AA584] transition">Contato</a>
      </nav>

      {/* Redes sociais para a versão desktop */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full hover:bg-[#1AA584] hover:text-white">
          <FaFacebookF size={14} />
        </a>
        <a href="#" className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full hover:bg-[#1AA584] hover:text-white">
          <FaInstagram size={14} />
        </a>
        <a
          href="https://wa.me/123456789"
          target="_blank"
          rel="noreferrer"
          className="ml-4 flex items-center gap-2 bg-[#1AA584] text-white px-4 py-2 rounded hover:bg-[#48B79D] transition"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
      </div>

      {/* Botão para o menu versão mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl text-gray-800"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu na versão mobile */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-start p-6 z-50 shadow-lg">
          {/* Logo e botão para fechar o menu */}
          <div className="w-full flex justify-between items-center mb-6 text-black">
            <Image src="/images/livaLogo.png" alt="Liva" width={90} height={36} />
            <button onClick={() => setIsOpen(false)} className="text-2xl">
              <FiX />
            </button>
          </div>

          {/* Menu para a versão mobile */}
          <nav className="flex flex-col gap-6 font-bold text-gray-800 text-lg w-full">
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre a Liva</a>
            <a href="#empreendimentos" onClick={() => setIsOpen(false)}>Empreendimentos</a>
            <a href="#noticias" onClick={() => setIsOpen(false)}>Notícias</a>
            <a href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
          </nav>

          {/* Redes sociais na versão mobile */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-[#1AA584]">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-[#1AA584]">
              <FaInstagram size={16} />
            </a>
          </div>

          {/* Botão WhatsApp na versão mobile */}
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noreferrer"
            className="mt-50 w-full py-3 text-center bg-[#1AA584] text-white rounded font-semibold hover:bg-[#48B79D] transition"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}