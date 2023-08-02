import BackButton from '../button/BackButton';

export default function Card({ data }) {
  const card = data.map((data) => {
    return (
      <div
        key={data.id}
        className='max-w-xl px-10 my-4 py-6 bg-darkGrey rounded-lg shadow-md mx-8 h-auto flex flex-col justify-between space-y-8 shadow-black'
      >
        <div className='flex'>
          <span
            className={`px-3 py-1 ${data.bgColor} ${data.textColor} font-merriweather-regular font-bold rounded cursor-pointer w-auto`}
          >
            {data.badge}
          </span>
        </div>
        <div>
          <h1 className='text-2xl text-title font-merriweather-bold font-bold'>
            {data.title}
          </h1>
          <p className='mt-4 text-silver font-merriweather-regular'>
            {data.description}
          </p>
        </div>
        <div className='flex flex-row justify-between items-centen mt-4'>
          <a
            className='text-frenchGrey hover:underline hover:text-white font-merriweather-light'
            href='#'
          >
            Read more
          </a>
          <div className='flex items-center'>
            <img
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
              src={data.src}
              alt={data.alt}
            />
            <h2 className='text-white font-merriweather-bold font-bold'>
              Gabriel Fierro
            </h2>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='flex flex-row flex-wrap'>
      <div className='flex w-full pl-8'>
        <BackButton />
      </div>
      {card}
    </div>
  );
}
