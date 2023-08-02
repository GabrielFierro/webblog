import ReactAvatar from '../assets/images/gabrielfierro-react.webp';

// Función para crear objetos con las propiedades comunes
function createData(id, badge, title, src, alt, description) {
  return {
    id: id,
    badge: badge,
    bgColor: `bg-reactAccentColor`,
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
    'React',
    '¿Qué es React?',
    ReactAvatar,
    'Avatar acerca del autor Gabriel Fierro con un fondo celeste',
    'La biblioteca para interfaces de usuario web y nativas. React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes.'
  )
];
