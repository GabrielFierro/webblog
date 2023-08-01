import { Outlet } from 'react-router-dom';

export default function Header({ children }) {
  return (
    <div
      id='pages'
      className='flex flex-col items-center py-12 justify-start bg-black min-w-full min-h-screen px-2'
    >
      <h1 className='font-bold text-4xl mb-12'>
        <span className='text-white '>Welcome to </span>
        <span className='animate-changing-color'>Webblog</span>
      </h1>
      <Outlet />
      <div className='h-full w-full flex flex-row flex-wrap'>{children}</div>
    </div>
  );
}
