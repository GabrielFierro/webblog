import { Outlet } from 'react-router-dom';

export default function Header({ children }) {
  return (
    <div
      id='pages'
      className='flex flex-col items-center pt-9 justify-start bg-black min-w-full min-h-screen px-2'
    >
      <h1 className='font-merriweather-regular font-bold text-4xl mb-4'>
        <span className='animate-changing-color'>Webblog</span>
      </h1>
      <p className='text-frenchGrey font-merriweather-regular text-lg mt-2 mb-6'>
        Acá encontrarás información acerca de las tecnologías HTML, CSS,
        JavaScript, y React.
      </p>
      <div className='h-full w-full flex flex-row flex-wrap'>{children}</div>
      <Outlet />
    </div>
  );
}
