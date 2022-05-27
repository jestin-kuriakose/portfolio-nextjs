import Image from 'next/image';
import React from 'react';
import teslaAdmin from '/assets/projects/tesla-admin.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={teslaAdmin}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Tesla Electronics - Admin panel</h2>
          <h3>React JS / Redux / MongoDB / JWT / Styled components / Material UI</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This is the admin side of Tesla Electronics and was built using React JS and is hosted on Heroku. 
          the admin can view products, users, orders and all the admin information here and has the ability
          to create new users and products. This app uses MongoDB for the database storage and JWT for authentication.


          </p>
          <a href='https://github.com/jestin-kuriakose/ecommerce-react-full' target='_blank' rel="noreferrer"><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
          <a href='https://github.com/jestin-kuriakose/ecommerce-react-full' target='_blank' rel="noreferrer"><button className='px-8 py-2 mt-4'>Code</button></a>
       
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JWT
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Styled components
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material UI
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
