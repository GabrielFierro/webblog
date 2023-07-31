import Card from './components/card/Card';

function App() {
  return (
    <div className='flex flex-col items-center py-12 justify-center bg-black min-w-full h-full px-2'>
      <h1 className='font-bold text-4xl mb-12'>
        <span className='text-white '>Welcome to </span>
        <span className='animate-changing-color'>Webblog</span>
      </h1>
      <div className='h-full w-full flex flex-row flex-wrap'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
