import Avatar from '../UI/Avatar/Avatar'

export default function ProfileNav() {
  return (
    <div className="w-52 h-52 bg-red-400 border-dashed">
      <div>
        <Avatar
          className="h-32 w-32 rounded-full"
          src="https://media.licdn.com/dms/image/C5603AQFNSYsgI_rAbg/profile-displayphoto-shrink_800_800/0/1597302294920?e=1726099200&v=beta&t=qz48tM1E0z8eZmK8Nxmlatvz0Kcr8s1FDehmoKUWl6w"
        />
      </div>
      <div></div>
    </div>
  )
}
