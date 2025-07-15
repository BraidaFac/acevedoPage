import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Treatment } from "../data/treatments";
import { treatments } from "../data/treatments";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";

interface TreatmentsProps {
  category?: string;
  showAll?: boolean;
  layout?: "carousel" | "grid";
  title?: string;
  description?: string;
}

const Treatments: React.FC<TreatmentsProps> = ({
  category,
  showAll = false,
  layout = "carousel",
  title = "Tratamientos",
  description = "Descubre tratamientos especializados diseñados para ayudarte a alcanzar tus objetivos de salud y bienestar.",
}) => {
  // Filtrar tratamientos según la categoría o mostrar todos
  const filteredTreatments = showAll
    ? treatments
    : treatments.filter((treatment) =>
        treatment.categories.includes(category || "")
      );

  const renderTreatmentCard = (treatment: Treatment) => (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
      <div className="lg:h-72 relative">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${treatment.image.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-200/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end" />
      </div>
      <div className="p-6">
        <h4 className="font-bold text-black mb-3 group-hover:text-black transition-colors">
          {treatment.name}
        </h4>
        <p className="text-black text-sm mb-4">{treatment.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {treatment.benefits.map((beneficio: string) => (
            <span
              key={beneficio}
              className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full"
            >
              {beneficio}
            </span>
          ))}
        </div>
        <a
          href={treatment.url}
          className="inline-flex items-center text-sm font-medium text-black hover:text-black transition-colors"
        >
          Más información
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section id="treatments" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-title text-title-100 mb-6 font-bold">
            {title}
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">{description}</p>
        </div>

        {layout === "carousel" ? (
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="pb-16"
            >
              {filteredTreatments.map((treatment) => (
                <SwiperSlide key={treatment.id}>
                  <div className="group">{renderTreatmentCard(treatment)}</div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <button className="swiper-button-prev-custom absolute top-1/2 -left-6 z-30 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:ring-4 focus:ring-primary-100 focus:outline-none transition-all duration-300">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Anterior</span>
            </button>

            <button className="swiper-button-next-custom absolute top-1/2 -right-6 z-30 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:ring-4 focus:ring-primary-100 focus:outline-none transition-all duration-300">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Siguiente</span>
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((treatment) => (
              <div key={treatment.id} className="group">
                {renderTreatmentCard(treatment)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Treatments;
