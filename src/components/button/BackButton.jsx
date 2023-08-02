export default function BackButton({ goBack }) {
  return (
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
  );
}
