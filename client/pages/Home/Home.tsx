import { Link } from "react-router-dom"
import Avatar from "../../components/UI/Avatar/Avatar"

export default function Home() {
  console.log('test')
  return (
    <div className="bg-background h-screen flex items-center justify-center">
      <div className="font-poppins w-full max-w-6xl px-4 sm:px-8 lg:px-16">
        <h1>Thyme Track</h1>
        <div className="font-poppins grid grid-cols-4 gap-4">
          <div className="grid grid-rows-subgrid gap-4 row-span-2">
           <div className=" bg-profilePrimary row-start-1 border border-gray-300 rounded-lg p-4 text-font">
            <Avatar
            className="h-32 w-32 rounded-full"
            src="https://media.licdn.com/dms/image/C5603AQFNSYsgI_rAbg/profile-displayphoto-shrink_800_800/0/1597302294920?e=1726099200&v=beta&t=qz48tM1E0z8eZmK8Nxmlatvz0Kcr8s1FDehmoKUWl6w"
            />
            <br/>
            <p className="font-thin">Report For</p>
            <h2 className="font-poppins">Robert Hall</h2>
           </div>
           <div className=" bg-tile row-start-2 border border-gray-300 rounded-lg p-4 text-font place-items-center">
            <Link to="/">Daily</Link>
            <br/>
            <Link to="/">Weekly</Link>
            <br/>
            <Link to="/">Monthly</Link>
            <br/>
           </div>
          </div>
          <div className="border  bg-tile border-gray-300 rounded-lg p-4">3</div>
          <div className="border  bg-tile border-gray-300 rounded-lg p-4">4</div>
          <div className="border  bg-tile border-gray-300 rounded-lg p-4">5</div>
          <div className="border  bg-tile border-gray-300 rounded-lg p-4">6</div>
          <div className="border  bg-tile border-gray-300 rounded-lg p-4">7</div>
          <div className="border  bg-tile border-gray-300 rounded-lg p-4">8</div>
        </div>
      </div>
    </div>
  )
}
