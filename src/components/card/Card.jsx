import { useNavigate } from 'react-router-dom';

export default function Card({ data }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const card = data.map((data) => {
    return (
      <div
        key={data.id}
        className='max-w-xl px-10 my-4 py-6 bg-darkGrey rounded-lg shadow-md mx-8 h-auto flex flex-col justify-between space-y-8 shadow-black'
      >
        <div className='flex'>
          <span
            className={`px-2 py-1 ${data.bgColor} ${data.textColor} font-bold rounded cursor-pointer w-auto`}
          >
            {data.badge}
          </span>
        </div>
        <div>
          <h1 className='text-2xl text-title font-bold'>{data.title}</h1>
          <p className='mt-4 text-silver'>{data.description}</p>
        </div>
        <div className='flex flex-row justify-between items-centen mt-4'>
          <a
            className='text-frenchGrey hover:underline hover:text-white'
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
            <h2 className='text-white font-bold'>Gabriel Fierro</h2>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='flex flex-row flex-wrap'>
      <div className='flex w-full pl-8'>
        <button
          onClick={goBack}
          className='text-base rounded-r-none hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-greyLight bg-greyRegular text-white border duration-200 ease-in-out border-darkGrey transition'
        >
          <div className='flex leading-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='100%'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-chevron-left w-5 h-5'
            >
              <polyline points='15 18 9 12 15 6'></polyline>
            </svg>
            Back
          </div>
        </button>
      </div>
      {card}
    </div>
  );
}
