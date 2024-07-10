import { twMerge } from 'tailwind-merge'

interface DailyTileProps {
    title: string;
    hours: number;
    stats: string;
  }

export default function DailyTile({title, hours, stats}: DailyTileProps){
    return (
        <div className='h-52 block rounded-lg bg-tile shadow-lg shadow-black'>
            <div className='font-poppins items-start'>
                <div className='pl-2.5 py-2 my-2 text-lg'>
                 <h2 className='font-poppins text-font text-lg'>{title}</h2>
                </div>
                <div className='pl-1.5 py-2 my-2 text-4xl'>
                 <h1 className='font-poppins text-font'>{hours}hrs</h1>
                </div>
                <div className='pl-2.5 py-2 my-2 text-sm'>
                 <p className='font-light text-gray-500'>{stats}</p>
                </div>
            </div>
        </div>
    )

}