import HtmlAvatar from '../assets/images/gabrielfierro-html.webp';

// Función para crear objetos con las propiedades comunes
function createData(id, badge, title, src, alt, description) {
  return {
    id: id,
    badge: badge,
    bgColor: `bg-htmlAccentColor`,
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
    'HTML',
    '¿Qué es HTML?',
    HtmlAvatar,
    'Avatar acerca del autor Gabriel Fierro con un fondo naranja',
    'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web.'
  ),
  createData(
    1,
    'HTML',
    '¿Qué es HTML?',
    HtmlAvatar,
    'Avatar acerca del autor Gabriel Fierro con un fondo naranja',
    'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web.'
  ),
  createData(
    2,
    'HTML',
    '¿Qué es HTML?',
    HtmlAvatar,
    'Avatar acerca del autor Gabriel Fierro con un fondo naranja',
    'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web.'
  ),
  createData(
    3,
    'HTML',
    '¿Qué es HTML?',
    HtmlAvatar,
    'Avatar acerca del autor Gabriel Fierro con un fondo naranja',
    'HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web.'
  )
];
