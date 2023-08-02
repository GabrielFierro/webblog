import CssAvatar from '../assets/images/gabrielfierro-css.webp';

// Función para crear objetos con las propiedades comunes
function createData(id, badge, title, src, alt, description) {
  return {
    id: id,
    badge: badge,
    bgColor: `bg-cssAccentColor`,
    textColor: 'text-white',
    title: title,
    src: src,
    alt: alt,
    description: description
  };
}

export const data = [
  createData(
    0,
    'CSS',
    '¿Qué es CSS?',
    CssAvatar,
    'Avatar acerca del autor Gabriel Fierro con un fondo azul',
    'Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML. CSS es utilizado para diseñar y dar estilo a las páginas web, por ejemplo, alterando la fuente, color, tamaño y espaciado del contenido, dividirlo en múltiples columnas o agregar animaciones y otras características decorativas.'
  )
];
