import { useState } from 'react'

interface DailyTileFormProps {
  hours: number
  stats: string
  onSubmit: (data: { hours: number; stats: string }) => void
  onCancel: () => void
  mode: 1 | 2 | 3
  tiles: { id: number; hours: number; stats: string }[]
  currentTileId: number
}

export default function DailyTileForm({
  hours,
  stats,
  onSubmit,
  onCancel,
  mode,
  tiles,
  currentTileId,
}: DailyTileFormProps) {
  const [formData, setFormData] = useState({ hours, stats })
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === 'hours' ? Number(value) : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Calculate the required total hours based on the mode
    let validTotalHours
    switch (mode) {
      case 1:
        validTotalHours = 24
        break
      case 2:
        validTotalHours = 168
        break
      case 3:
        validTotalHours = 720
        break
      default:
        validTotalHours = 24
    }

    // Calculate the current total hours excluding the current tile
    const currentTotalHours = tiles.reduce((acc, tile) => acc + tile.hours, 0)
    console.log(`current tile id: ${currentTileId}`)
    console.log(`tiles: ${tiles}`)
    console.log(`tile hours${formData.hours}`)
    console.log(`current total hours: ${currentTotalHours}`)

    // Calculate the new total hours including the new value from the form
    const newTotalHours = currentTotalHours + formData.hours
    console.log(`new total hours: ${newTotalHours}`)

    // Validate the new total hours
    if (newTotalHours > validTotalHours) {
      setError(
        `Total hours across all tiles must not exceed ${validTotalHours}.`,
      )
      return
    }

    setError(null)
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Hours</label>
        <input
          type="number"
          name="hours"
          value={formData.hours}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Stats</label>
        <textarea
          name="stats"
          value={formData.stats}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
