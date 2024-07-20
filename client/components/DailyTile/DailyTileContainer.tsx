import { useState } from 'react'
import DailyTile from './DailyTile'
import DailyTileForm from './DailyTileForm'
import { useActivity } from '../../hooks/useActivities'

interface DailyTileContainerProps {
  id: number
  title: string
  mode: 'daily' | 'weekly' | 'monthly'
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
  const { data, isLoading, isError } = useActivity()
  console.log('back end data', data)

  if (isLoading) {
    return <span> Loading...</span>
  }

  if (isError) {
    return <span>Error...</span>
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSubmit = (data: { hours: number; stats: string }) => {
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
          stats={tileData.stats}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          mode={mode}
          tiles={[]}
          currentTileId={id}
        />
      ) : (
        <DailyTile
          title={title}
          hours={tileData.hours}
          stats={tileData.stats}
          onEdit={handleEdit}
        />
      )}
    </div>
  )
}
