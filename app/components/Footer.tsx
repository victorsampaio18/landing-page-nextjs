"use client"

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {/* Logo da Liva junto com o texto */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img src="/images/livaLogo2.png" alt="Liva" className="h-8 sm:h-10 mb-3 sm:mb-4" />
          <p className="text-sm leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Define o menu em coluna */}
        <div>
          <h4 className="text-[#1AA584] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">NAVEGUE NO SITE</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-[#1AA584] transition-colors">
                HOME
              </a>
            </li>
            <li>
              <a href="#info" className="hover:text-[#1AA584] transition-colors">
                SOBRE A LIVA
              </a>
            </li>
            <li>
              <a href="#empreendimentos" className="hover:text-[#1AA584] transition-colors">
                EMPREENDIMENTOS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1AA584] transition-colors">
                NOTÍCIAS
              </a>
            </li>
            <li>
              <a href="#form" className="hover:text-[#1AA584] transition-colors">
                CONTATO
              </a>
            </li>
          </ul>
        </div>

        {/* Exibe os botões das redes sociais */}
        <div className="flex flex-col justify-start lg:justify-end h-full">
          <p className="text-sm mb-2">Acompanhe nas redes</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#1AA584] hover:text-white transition-colors"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#1AA584] hover:text-white transition-colors"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

        {/* Exibe os contatos e o whatsapp */}
        <div className="flex flex-col text-left sm:text-right sm:items-end">
          <p className="text-sm leading-relaxed mb-3 sm:mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
          <p className="text-lg sm:text-xl font-semibold text-white mb-1">(11) 9999-9091</p>
          <p className="text-sm mb-4">contato@livarcambr.com.br</p>
          <a
            href="#"
            className="flex items-center justify-center sm:justify-start gap-2 bg-[#1AA584] text-white px-4 sm:px-6 py-2 rounded hover:bg-[#48B79D] transition-colors w-full sm:w-auto text-sm sm:text-base font-medium"
          >
            <FaWhatsapp />
            WHATSAPP
          </a>
        </div>
      </div>

      {/* Rodapé inferior com algumas informações extras */}
      <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p className="text-center sm:text-left">Liva © 2022 Todos os direitos reservados.</p>
        <img src="/images/febaLogo.png" alt="Liva" className="w-16 sm:w-20 h-auto" />
      </div>
    </footer>
  )
}