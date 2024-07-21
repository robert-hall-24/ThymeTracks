import { twMerge } from 'tailwind-merge'
import { hours } from '../../../models/activity'

interface DailyTileProps {
  title: string
  stats: string
  onEdit: () => void
}

interface DailyTileProps extends hours {}
export default function DailyTile({
  title,
  hours,
  stats,
  onEdit,
}: DailyTileProps) {
  return (
    <div className="h-52 block rounded-lg bg-tile shadow-lg shadow-black">
      <div className="font-poppins items-start">
        <div className="pl-3 py-2 my-2 text-lg">
          <h2 className="font-poppins text-font text-lg">{title}</h2>
        </div>
        <div className="pl-2.5 py-2 my-2 text-4xl">
          <h1 className="font-poppins text-font">{hours}hrs</h1>
        </div>
        <div className="pl-3 py-2 my-2 text-sm">
          <p className="font-light text-gray-500">{stats}</p>
        </div>
        <div className="pl-3 pb-4 mb-4">
          <button
            onClick={onEdit}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}
