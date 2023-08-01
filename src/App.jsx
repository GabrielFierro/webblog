import { Link } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <Header>
      <nav className='w-full mb-6'>
        <ul className='flex flex-row justify-evenly items-center w-auto'>
          <li className='text-black bg-htmlAccentColor px-2 py-1 font-bold text-xl hover:scale-125 rounded cursor-pointer'>
            <Link to={`/html`}>HTML</Link>
          </li>
          <li className='text-white bg-cssAccentColor px-2 py-1 font-bold text-xl hover:scale-125 rounded cursor-pointer'>
            <Link to={`/css`}>CSS</Link>
          </li>
          <li className='text-black bg-jsAccentColor px-2 py-1 font-bold text-xl hover:scale-125 rounded cursor-pointer'>
            <Link to={`/js`}>JavaScript</Link>
          </li>
          <li className='bg-reactAccentColor px-2 py-1 font-bold text-xl hover:scale-125text-black hover:scale-125 rounded cursor-pointer '>
            <Link to={`/react`}>React</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default App;
