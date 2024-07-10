import { useState } from 'react';
import DailyTile from './DailyTile';
import DailyTileForm from './DailyTileForm';

interface DailyTileContainerProps {
    title: string;
    mode: 'daily' | 'weekly' | 'monthly';
}

export default function DailyTileContainer({ title, mode }: DailyTileContainerProps) {
    const [tileData, setTileData] = useState({
        hours: 24,
        stats: 'Sample Stats'
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = (data: { hours: number; stats: string }) => {
        setTileData({ ...tileData, ...data });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <DailyTileForm
                    hours={tileData.hours}
                    stats={tileData.stats}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    mode={mode}
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
    );
}
