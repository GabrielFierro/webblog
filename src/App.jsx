import { Link } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <Header>
      <nav className='w-full mb-6'>
        <ul className='flex flex-row justify-evenly items-center w-auto'>
          <li className='text-htmlAccentColor font-bold'>
            <Link to={`/html`}>HTML</Link>
          </li>
          <li className='text-cssAccentColor font-bold'>
            <Link to={`/css`}>CSS</Link>
          </li>
          <li className='text-jsAccentColor font-bold'>
            <Link to={`/js`}>JavaScript</Link>
          </li>
          <li className='text-reactAccentColor font-bold'>
            <Link to={`/react`}>React</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default App;
