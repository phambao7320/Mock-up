import CategoryList from '@components/Categories'
import HeaderMainContent from '@components/header-main-content'
import GroupItem from './GroupItem'
import GroupItemFlex from './GroupItemFlex'
import GroupItemFlexShort from './GroupItemFlexShort'
import GroupItemShort from './GroupItemShort'

const GroupList = () => {
  return (
    <div>
        <div className='flex flex-col py-[20px] px-[5px] justify-center' >
            <HeaderMainContent label='Groups' items={['Suggestions','Newest','My group']} />
            <div>
                <ul className='flex overflow-x-auto w-full'>
                    <li className='block basis-full md:basis-1/3 lg:basis-1/4 flex-shrink-0'><GroupItem/></li>
                    <li className='block basis-full md:basis-1/3 lg:basis-1/4 flex-shrink-0'><GroupItem/></li>
                    <li className='block basis-full md:basis-1/3 lg:basis-1/4 flex-shrink-0'><GroupItem/></li>
                    <li className='block basis-full md:basis-1/3 lg:basis-1/4 flex-shrink-0'><GroupItem/></li>
                </ul>
            </div>
        </div>

        <CategoryList />

        <div className='lg:flex mt-5 gap-2'>
            <div className='lg:w-3/4'>
                <HeaderMainContent label='Your Groups' items={['All Groups','Recently added','Family','University','More']} />
                <div className='grid md:grid-cols-2 gap-x-4 mt-4'>
                    <GroupItemFlexShort />
                    <GroupItemFlexShort />
                    <GroupItemFlexShort />
                    <GroupItemFlexShort />
                    <GroupItemFlexShort />
                    <GroupItemFlexShort />
                    <GroupItemFlexShort />
                    <GroupItemFlexShort />
                    <GroupItemFlexShort />
                    <GroupItemFlexShort />
                </div>
            </div>
            <div className='lg:w-1/4'>
                <h4 className='text-xl font-medium mb-2 ml-2 lg:ml-0'>Suggested For You</h4>
                <GroupItemShort />
                <GroupItemShort />
            </div>
        </div>

        <div className='my-5'>
            <div className='flex item-center justify-between mx-2'>
                <div className=''>
                    <h4 className='texs-semibold text-2xl my-0'>Suggestions</h4>
                    <p className='text-sm color-[#666] mt-1'>Find a groups You Might Be Interested In.</p>
                </div>
                <a href="#">See all</a>
            </div>
            <hr />
            <div className='grid md:grid-cols-2 gap-x-4 mt-2'>
                <GroupItemFlex />
                <GroupItemFlex />
                <GroupItemFlex />
                <GroupItemFlex />
                <GroupItemFlex />
                <GroupItemFlex />
            </div>
        </div>
    </div>
  )
}

export default GroupList