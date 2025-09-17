"use client"
import type React from "react"
import { useState } from "react"
import { FiFilter, FiX } from "react-icons/fi"

interface Project {
  id: number
  title: string
  image: string
  tag?: string
  city?: string
  district?: string
  description?: string
}

// Define os dados e as imagens
const projects: Project[] = [
  {
    id: 1,
    title: "HORIZONTE RESIDENCE",
    image: "/images/proj1.jpg",
    tag: "PRÉ LANÇAMENTO",
    city: "Barra Velha",
    district: "Tabuleiro",
    description: "Apartamento com 3 dormitórios sendo 1 suíte",
  },
  { id: 2, title: "ONE TOWER", image: "/images/proj2.jpg" },
  { id: 3, title: "INFINITY COAST", image: "/images/proj3.jpg" },
  { id: 4, title: "SKYLINE TOWER", image: "/images/proj4.jpg" },
  { id: 5, title: "GRANDE PLACE TOWER", image: "/images/proj5.jpg" },
  { id: 6, title: "IMPERIUM TOWER", image: "/images/proj6.jpg" },
  { id: 7, title: "TITANIUM TOWER", image: "/images/proj7.jpg" },
  { id: 8, title: "BLUE COST TOWER I", image: "/images/proj8.jpg" },
  { id: 9, title: "GRAND PLACE TOWER II", image: "/images/proj9.jpg" },
]

const ProjectsSection: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <section id="empreendimentos" className="py-8 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-50 bg-white">
      {/* Define o título e o botão do filtro */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
          Confira todos os <br className="hidden sm:block" />
          <span className="text-[#1AA584] font-bold">empreendimentos da Liva</span>
        </h2>

        {/* Botão do filtro */}
        <button
          onClick={() => setShowFilters((s) => !s)}
          className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-md transition text-sm sm:text-base font-medium w-full sm:w-auto
            ${showFilters ? "bg-white border border-black text-black" : "bg-black text-white hover:bg-gray-800"}`}
        >
          {showFilters ? <FiX size={18} /> : <FiFilter size={18} />}
          FILTROS
        </button>
      </div>

      {/* Define os dropdowns do filtro */}
      {showFilters && (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full text-black">
          <select className="flex-1 border border-black px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white text-sm sm:text-base">
            <option>Estágio do empreendimento</option>
            <option>Em construção</option>
            <option>Pronto para morar</option>
          </select>

          <select className="flex-1 border border-black px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white text-sm sm:text-base">
            <option>Localização</option>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Outros</option>
          </select>

          <select className="flex-1 border border-black px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white text-sm sm:text-base">
            <option>Tipo de imóvel</option>
            <option>Apartamento</option>
            <option>Casa</option>
            <option>Cobertura</option>
          </select>
        </div>
      )}

      {/* Grid com os cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[240px] md:auto-rows-[260px]">
        {projects.map((project, index) => {
          const isMain = project.id === 1 // apenas id=1 terá infos extras e um tamanho maior
          return (
            <div
              key={project.id}
              className={`relative rounded-lg overflow-hidden group cursor-pointer
                ${isMain ? "sm:col-span-2 lg:col-span-2 xl:col-span-2 sm:row-span-2" : "row-span-1"}`}
            >
              {/* imagem com zoom no hover */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div
                className={`absolute left-3 sm:left-4 right-3 sm:right-4 transition-all duration-500 ${
                  isMain
                    ? "bottom-3 sm:bottom-4 group-hover:bottom-16 sm:group-hover:bottom-24"
                    : "bottom-3 sm:bottom-4"
                }`}
              >
                {/* Tag com Pré-lançamento */}
                {project.tag && (
                  <span className="inline-block bg-white text-black text-xs sm:text-sm px-2 sm:px-3 py-1 rounded">
                    {project.tag}
                  </span>
                )}

                {/* Título dos cards*/}
                <h3
                  className={`text-white text-base sm:text-lg lg:text-xl mt-2 sm:mt-3 transition-transform duration-500 font-medium ${
                    isMain ? "group-hover:-translate-y-2" : ""
                  }`}
                >
                  {project.title}
                </h3>

                {/* Informações extras que aparece somente no id=1 */}
                {isMain && (
                  <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-3 sm:mt-4 text-xs sm:text-sm text-white space-y-2">
                    <div className="flex gap-4 sm:gap-8">
                      <div>
                        <span className="font-semibold block">Cidade</span>
                        <span>{project.city ?? "—"}</span>
                      </div>
                      <div>
                        <span className="font-semibold block">Bairro</span>
                        <span>{project.district ?? "—"}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <p className="leading-snug">{project.description ?? ""}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span>Condomínio Fechado</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Botão para carregar mais */}
      <div className="text-center mt-8 sm:mt-10">
        <button
          onClick={() => {}}
          className="px-4 sm:px-6 py-2 sm:py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition text-sm sm:text-base font-medium"
        >
          CARREGAR MAIS
        </button>
      </div>
    </section>
  )
}

export default ProjectsSection