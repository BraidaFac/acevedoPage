import cryoRfMax from "../assets/fotos/cryo-rf-max.jpg";
import enygma from "../assets/fotos/enygma.jpg";
import himfu from "../assets/fotos/himfu.jpg";
import refreeze from "../assets/fotos/refreeze.jpg";

export type Treatment = {
  id: string;
  name: string;
  description: string;
  image: any;
  url: string;
  categories: string[];
  benefits: string[];
  shortDescription: string;
};

export const treatments: Treatment[] = [
  {
    id: "enygma",
    name: "Enygma",
    description:
      "Tratamiento avanzado para rejuvenecimiento íntimo y mejora de la salud vaginal.",
    shortDescription: "Rejuvenecimiento íntimo no invasivo",
    image: enygma,
    url: "/tratamientos/enygma",
    categories: ["menopausia", "incontinencia-urinaria"],
    benefits: [
      "No invasivo",
      "Sin tiempo de recuperación",
      "Resultados progresivos",
    ],
  },
  {
    id: "himfu",
    name: "HImFU",
    description:
      "Tecnología de ultrasonido focalizado de alta intensidad para resultados no invasivos.",
    shortDescription: "Ultrasonido focalizado de alta intensidad",
    image: himfu,
    url: "/tratamientos/himfu",
    categories: ["adiposidad-localizada", "celulitis"],
    benefits: ["No invasivo", "Resultados duraderos", "Tecnología avanzada"],
  },
  {
    id: "cryo-rf-max",
    name: "Cryo-RF MAX",
    description:
      "Combinación de crioterapia y radiofrecuencia para tratamientos corporales efectivos.",
    shortDescription: "Crioterapia y radiofrecuencia combinadas",
    image: cryoRfMax,
    url: "/tratamientos/cryo-rf-max",
    categories: ["adiposidad-localizada", "celulitis"],
    benefits: [
      "Doble acción",
      "Resultados visibles",
      "Tratamiento personalizado",
    ],
  },
  {
    id: "refreeze",
    name: "Refreeze",
    description:
      "Sistema de enfriamiento avanzado para reducción de adiposidad localizada.",
    shortDescription: "Enfriamiento avanzado para adiposidad",
    image: refreeze,
    url: "/tratamientos/refreeze",
    categories: ["adiposidad-localizada", "celulitis"],
    benefits: ["No invasivo", "Sin dolor", "Resultados naturales"],
  },
  {
    id: "radiofrecuencia",
    name: "Radiofrecuencia en cicatriz",
    description:
      "Tratamiento especializado para mejorar la apariencia y elasticidad de cicatrices.",
    shortDescription: "Mejora de cicatrices con radiofrecuencia",
    image: cryoRfMax,
    url: "/tratamientos/radiofrecuencia-cicatriz",
    categories: ["cicatriz-cesarea", "celulitis"],
    benefits: ["Estimula colágeno", "Mejora elasticidad", "No invasivo"],
  },
];
