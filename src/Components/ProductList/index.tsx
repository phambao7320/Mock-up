import HeaderMainContent from '@components/header-main-content'
import React from 'react'
import Categories from './Categories'
import ProductItem from './ProductItem'

const ProductList = () => {
  return (
    <div>
        <div className='bg-[#f9fafb]'>
            <div className='flex flex-col py-[20px] px-[5px] justify-center' >
                <HeaderMainContent label='Products' items={['Suggestion','Newest','My games']} />
                <div className='mt-2 overflow-hidden w-full'>
                    <ul className='flex overflow-x-auto w-full'>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                    </ul>
                </div>
            </div>

            <div className='mx-[5px]'>
                <div className='flex item-center justify-between mx-2'>
                    <div className=''>
                        <h4 className='texs-semibold text-2xl my-0'>Categories</h4>
                        <p className='text-sm color-[#666] mt-1'>Find a group by browsing top categories.</p>
                    </div>
                    <a href="#">See all</a>
                </div>
                <div className='mt-2 overflow-hidden w-full'>
                    <ul className='flex overflow-x-auto w-full'>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><Categories/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><Categories/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><Categories/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><Categories/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><Categories/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><Categories/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><Categories/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><Categories/></li>
                    </ul>
                </div>
            </div>


            <div className='flex flex-col py-[20px] px-[5px] justify-center' >
                <HeaderMainContent label='Brand Collection' items={[]} />
                <div className='mt-2 overflow-hidden w-full'>
                    <ul className='flex overflow-x-auto w-full'>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                        <li className='block basis-1/2 md:basis-1/3 lg:basis-1/5 flex-shrink-0'><ProductItem/></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList