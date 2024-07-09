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
        src="https://media.licdn.com/dms/image/C5603AQFNSYsgI_rAbg/profile-displayphoto-shrink_800_800/0/1597302294920?e=1726099200&v=beta&t=qz48tM1E0z8eZmK8Nxmlatvz0Kcr8s1FDehmoKUWl6w"
      />
    </Background>
  ),
}

export default meta
