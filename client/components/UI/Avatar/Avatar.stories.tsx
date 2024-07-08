import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'
import Background from '../Background/Background'

const meta: Meta<typeof Avatar> = {
  title: 'Design System/UI/Avatar',
  component: Avatar,
}

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  render: () => (
    <Background>
      <Avatar
        className="h-32 w-32 rounded-full"
        src="https://www.w3schools.com/w3images/avatar2.png"
      />
    </Background>
  ),
}

export default meta
