import AvatarHtml from '../../assets/images/gabrielfierro-html.png';

export default function Card() {
  return (
    <div className='max-w-xl px-10 my-4 py-6 bg-darkGrey rounded-lg shadow-md mx-8'>
      <div className='flex'>
        <p className='px-2 py-1 bg-htmlAccentColor text-white font-bold rounded cursor-pointer'>
          HTML
        </p>
      </div>
      <div className='mt-2'>
        <h1 className='text-2xl text-white font-bold'>
          Accessibility tools for designers and developers
        </h1>
        <p className='mt-2 text-silver'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
        </p>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <a className='text-frenchGrey hover:underline' href='#'>
          Read more
        </a>
        <div>
          <a className='flex items-center' href='#'>
            <img
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
              src={AvatarHtml}
              alt='avatar'
            />
            <h2 className='text-white font-bold'>Gabriel Fierro</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
