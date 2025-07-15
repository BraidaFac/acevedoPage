import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import consultaginecologica from "../../assets/fotos/consultaginecologica.jpg";
import controlembarazo from "../../assets/fotos/control-de-embarazo.jpg";
import fertilidad from "../../assets/fotos/fertilidad.jpg";
import rafrecuencia from "../../assets/fotos/radiofrecuenciaAparato.jpg";

// Array completo con la información de los slides
const slides = [
  {
    image: rafrecuencia,
    title: "Radiofrecuencia",
    description:
      "Tratamiento no invasivo para zona corporal, incontinencia urinaria y rejuvenecimiento vaginal",
    url: "/#contact",
  },
  {
    image: consultaginecologica,
    title: "Consulta Ginecologica",
    description:
      "Ambiente seguro y de confianza donde puedas expresar tus preocupaciones y recibir la mejor atención medica",
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
];

const TreatmentsCarousel = () => {
  return (
    <div className="relative w-full  h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full flex items-center "
              style={{
                backgroundImage: `url('${slide.image.src}')`,
                backgroundSize: `${
                  slide.title.startsWith("Radiofrecuencia")
                    ? "contain"
                    : "cover"
                }`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <div className="container ml-15 px-4 lg:px-8 relative z-10">
                <div className="max-w-xl absolute lg:buttom-40 top-10">
                  <h2 className="text-2xl lg:text-3xl  text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="max-w-md  text-white/90 lg:text-md mb-8">
                    {slide.description}
                  </p>
                  <a
                    href={slide.url}
                    className="inline-block text-xs text-white py-2 px-3 rounded-full bg-primary-200 hover:bg-pink-400 transition duration-500 hover:shadow-2xl"
                  >
                    {"Más información"}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-white "></div>
        <div className="swiper-button-next !text-white "></div>
      </Swiper>
    </div>
  );
};

export default TreatmentsCarousel;
