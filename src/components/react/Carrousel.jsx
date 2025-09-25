import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import controlembarazo from "../../assets/fotos/carrousel1.jpeg";
import fertilidad from "../../assets/fotos/consuFerti.jpg";
import consultaginecologica from "../../assets/fotos/consultaGinecologica.jpeg";
import rafrecuencia from "../../assets/fotos/recuPostPartoRadioFrec.jpeg";

const slides = [
  {
    image: consultaginecologica,
    title: "Consulta Ginecológica",
    description:
      "Ambiente seguro y de confianza donde puedas expresar tus preocupaciones y recibir la mejor atención médica",
    url: "/#contact",
  },
  {
    image: fertilidad,
    title: "Consultas de Fertilidad",
    description:
      "Asesoramiento personalizado para ayudarte a cumplir tu sueño de ser madre",
    url: "/#contact",
  },
  {
    image: controlembarazo,
    title: "Control de Embarazo",
    description:
      "Acompañamiento integral durante tu embarazo con atención cálida y profesional",
    url: "/#contact",
  },
  {
    image: rafrecuencia,
    title: "Radiofrecuencia PostParto",
    description:
      "Tratamiento no invasivo para zona corporal, incontinencia urinaria y rejuvenecimiento vaginal",
    url: "/#contact",
  },
];

const TreatmentsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Detección simple y directa
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  // Renderizar solo el componente apropiado basado en el tamaño de pantalla
  if (isMobile) {
    return (
      <div className="w-full h-[calc(100vh-4rem)]">
        <div className="w-full h-full relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-mobile",
              prevEl: ".swiper-button-prev-mobile",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.image.src})` }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-30 left-5 z-10 text-white">
                    <h2 className="text-lg mb-4">{slide.title}</h2>
                    <p className="mb-6 text-sm">{slide.description}</p>
                    <a
                      href={slide.url}
                      className="inline-block text-xs text-white py-2 px-3 rounded-full bg-primary-200 hover:bg-pink-400 transition duration-500 hover:shadow-2xl"
                    >
                      Más información
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación personalizados para móvil */}
          <button className="swiper-button-prev-mobile absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 border border-gray-100 z-20">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="swiper-button-next-mobile absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 border border-gray-100 z-20">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-5rem)] py-5">
      <div className="lg:grid relative h-full grid-cols-2 gap-x-10 px-10">
        {/* Carousel */}
        <div className="h-full w-3/4 mx-auto relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-full flex items-center rounded-3xl"
                  style={{
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                    backgroundImage: `url(${slide.image.src})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute bottom-20 -right-10 w-24 h-24 bg-pink-300/30 rounded-full"></div>
        </div>

        {/* Texto sincronizado con botones de navegación */}
        <div className="flex flex-col justify-center px-16 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/10 rounded-full -translate-y-16 translate-x-16"></div>

          {/* Contenido principal */}
          <div className="relative z-10">
            {/* Indicador de slide */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-sm text-gray-500 font-medium">
                Tratamiento
              </span>
              <div className="flex gap-1">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary-200 w-6"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Título con efecto */}
            <h2 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">
              {slides[activeIndex].title}
            </h2>

            {/* Línea decorativa */}
            <div className="w-16 h-1 bg-gradient-to-r from-primary-200 to-pink-400 mb-8 rounded-full"></div>

            {/* Descripción */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
              {slides[activeIndex].description}
            </p>

            {/* Botón con mejor diseño */}
            <a
              href={slides[activeIndex].url}
              className="inline-flex items-center gap-2 text-sm text-white py-4 px-8 rounded-full bg-gradient-to-r from-primary-200 to-pink-400 hover:from-pink-400 hover:to-primary-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 font-medium"
            >
              Más información
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Botones de navegación personalizados */}
          <div className="absolute bottom-10 right-20 flex gap-4">
            <button className="swiper-button-prev-custom w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 border border-gray-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="swiper-button-next-custom w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 border border-gray-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsCarousel;
