import { Link } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  const classes =
    'px-4 py-1 font-merriweather-regular font-bold text-xl hover:scale-125 rounded cursor-pointer';
  return (
    <Header>
      <nav className='w-full mb-6'>
        <ul className='flex flex-row justify-evenly items-center w-auto'>
          <li className={`text-black bg-htmlAccentColor ${classes}`}>
            <Link to={`/html`}>HTML</Link>
          </li>
          <li className={`text-white bg-cssAccentColor ${classes}`}>
            <Link to={`/css`}>CSS</Link>
          </li>
          <li className={`text-black bg-jsAccentColor ${classes}`}>
            <Link to={`/js`}>JavaScript</Link>
          </li>
          <li className={`text-black bg-reactAccentColor ${classes}`}>
            <Link to={`/react`}>React</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default App;
