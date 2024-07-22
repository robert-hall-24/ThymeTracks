import { useState } from 'react'
import DailyTile from './DailyTile'
import DailyTileForm from './DailyTileForm'
import { useActivityHours } from '../../hooks/useActivities'

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const handleSubmit = () => {}

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <DailyTileForm
          hours={data}
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
