import { data } from './data';

const card = data.map((data) => {
  return (
    <div
      key={data.id}
      className='max-w-xl px-10 my-4 py-6 bg-darkGrey rounded-lg shadow-md mx-8 h-auto flex flex-col justify-between space-y-8'
    >
      <div className='flex'>
        <span
          className={`px-2 py-1 ${data.bgColor} ${data.textColor} font-bold rounded cursor-pointer w-auto`}
        >
          {data.badge}
        </span>
      </div>
      <div className='mt-2'>
        <h1 className='text-2xl text-white font-bold'>{data.title}</h1>
        <p className='mt-4 text-silver'>{data.description}</p>
      </div>
      <div className='flex flex-row justify-between items-centen mt-4'>
        <a className='text-frenchGrey hover:underline' href='#'>
          Read more
        </a>
        <div className='flex items-center'>
          <img
            className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            src={data.src}
            alt={data.alt}
          />
          <h2 className='text-white font-bold'>Gabriel Fierro</h2>
        </div>
      </div>
    </div>
  );
});

export default function Card() {
  return <>{card}</>;
}
