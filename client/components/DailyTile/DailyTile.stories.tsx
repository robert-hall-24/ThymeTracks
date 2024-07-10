import type { Meta, StoryObj } from '@storybook/react'

import DailyTile from './DailyTile'
import Background from '../UI/Background/Background'

const meta: Meta<typeof DailyTile> = {
  title: 'Design System/UI/DailyTile',
  component: DailyTile,
}

type Story = StoryObj<typeof DailyTile>

export const Primary: Story = {
  render: () => (
    <Background>
      <DailyTile
      />
    </Background>
  ),
}

export default meta


