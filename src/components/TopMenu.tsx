import Image from 'next/image'
import { CiMenuBurger } from 'react-icons/ci'

export const TopMenu = () => {
  return (
    <div className='sticky top-0 h-20 border-b bg-white lg:py-2.5 z-50'>
      <div className='px-6 flex felx-col items-center justify-between space-x-4'>

        <div className='flex flex-row items-start gap-3'>
          <Image src='/logo_nav.png' alt='SINCHI Logo' width={40} height={40} />
          <div>
            <h5 hidden className='text-2xl text-gray-600 font-medium lg:block'>
              Proyectos SINCHI
            </h5>
            <h6>Prueba de concepto</h6>
          </div>
        </div>

        <button className='w-12 h-16 -mr-2 border-r lg:hidden'>
          <CiMenuBurger size={30} />
        </button>

        {/* <div className='flex space-x-2'>
          <div hidden className='md:block'>
            <div className='relative flex items-center text-gray-400 focus-within:text-cyan-400'>
              <span className='absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300'>
                <CiSearch />
              </span>
              <input
                type='search'
                name='leadingIcon'
                id='leadingIcon'
                placeholder='Search here'
                className='w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition'
              />
            </div>
          </div>

          <button className='flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden'>
            <CiSearch />
          </button>
          <button className='flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200'>
            <CiChat1 size={25} />
          </button>
          <button className='flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200'>
            <CiBellOn size={25} />
          </button>
        </div> */}
      
      </div>
    </div>
  )
}
