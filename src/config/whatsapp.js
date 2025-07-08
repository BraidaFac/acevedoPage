// Configuración del WhatsApp
export const whatsappConfig = {
  // Número de teléfono (formato internacional sin +)
  phoneNumber: "5491112345678", // Reemplaza con el número real

  // Mensaje predeterminado
  message:
    "Hola! Me gustaría obtener más información sobre sus servicios médicos.",

  // Configuración del botón
  button: {
    size: "p-4", // p-3 (pequeño), p-4 (mediano), p-5 (grande)
    color: "bg-green-500 hover:bg-green-600", // Colores del botón
    position: "bottom-6 right-6", // Posición del botón
    showTooltip: true, // Mostrar tooltip en desktop
    showPulse: true, // Mostrar animación de pulso
  },

  // Configuración del tooltip
  tooltip: {
    text: "¡Chatea con nosotros!",
    position: "right", // right, left, top, bottom
  },
};

// Función para generar la URL de WhatsApp
export function getWhatsAppUrl(
  phone = whatsappConfig.phoneNumber,
  message = whatsappConfig.message
) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Función para generar la URL con mensaje personalizado
export function getWhatsAppUrlWithMessage(message) {
  return getWhatsAppUrl(whatsappConfig.phoneNumber, message);
}
