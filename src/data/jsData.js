import JsAvatar from '../assets/images/gabrielfierro-js.webp';

// Función para crear objetos con las propiedades comunes
function createData(id, badge, title, src, alt, description) {
  return {
    id: id,
    badge: badge,
    bgColor: `bg-jsAccentColor`,
    textColor: 'text-black',
    title: title,
    src: src,
    alt: alt,
    description: description
  };
}

export const data = [
  createData(
    0,
    'JavaScript',
    '¿Qué es JavaScript?',
    JsAvatar,
    'Avatar acerca del autor Gabriel Fierro con un fondo amarillo',
    'JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).'
  )
];
