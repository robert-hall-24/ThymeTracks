import { useState } from 'react'
import DailyTile from './DailyTile'
import DailyTileForm from './DailyTileForm'
import { useActivity, useActivityHours } from '../../hooks/useActivities'
import { useMutation } from '@tanstack/react-query'
import { updateHours } from '../../apis/update-hours'

interface DailyTileContainerProps {
  id: number
  title: string
  mode: 1 | 2 | 3
}

interface TileData {
  id: number
  hours: number
  stats: string
}

export default function DailyTileContainer({
  id,
  title,
  mode,
}: DailyTileContainerProps) {
  const [tileData, setTileData] = useState<TileData>({
    id,
    hours: 0,
    stats: 'Sample Stats',
  })
  const [isEditing, setIsEditing] = useState(false)
  const { data, isLoading, isError } = useActivityHours(
    Number(mode),
    Number(id),
  )

  if (isLoading) {
    return <span> Loading...</span>
  }

  if (isError) {
    return <span>Error...</span>
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSubmit = (data: { hours: number }) => {
    setTileData({ ...tileData, ...data })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <DailyTileForm
          hours={tileData.hours}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          mode={mode}
          currentTileId={id}
        />
      ) : (
        <DailyTile
          title={title}
          hours={data}
          stats={tileData.stats}
          onEdit={handleEdit}
        />
      )}
    </div>
  )
}
