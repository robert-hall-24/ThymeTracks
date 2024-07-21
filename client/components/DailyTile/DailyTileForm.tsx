import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { updateHours } from '../../apis/update-hours'
import { hours } from '../../../models/activity'

interface DailyTileFormProps {
  hours: number
  onSubmit: (data: { hours: number }) => void
  onCancel: () => void
  mode: 1 | 2 | 3
  currentTileId: number
}

export default function DailyTileForm({
  hours,
  onSubmit,
  onCancel,
  mode,
  currentTileId,
}: DailyTileFormProps) {
  const [formData, setFormData] = useState({ hours })
  const stats = 'placeholder'
  const [error, setError] = useState<string | null>(null)

  const queryClient = useQueryClient()
  const updateHoursMutation = useMutation({
    mutationFn: (Hours: hours) => updateHours(Hours, mode, currentTileId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Hours'],
      })
    },
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [event?.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateHoursMutation.mutate(formData)
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
          onChange={(e) => handleChange(e)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Stats</label>
        <textarea
          name="stats"
          value={stats}
          onChange={(e) => handleChange(e)}
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
