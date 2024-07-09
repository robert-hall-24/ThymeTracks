import type { Meta, StoryObj } from '@storybook/react'

import ProfileNav from './ProfileNav'
import Background from '../UI/Background/Background'

const meta: Meta<typeof ProfileNav> = {
  title: 'Design System/Page Components/ProfileNav',
  component: ProfileNav,
  render: () => (
    <Background>
      <ProfileNav />
    </Background>
  ),
}

export default meta

type Story = StoryObj<typeof ProfileNav>

export const Main: Story = {}
