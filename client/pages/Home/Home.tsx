import { Link } from "react-router-dom"
import Avatar from "../../components/UI/Avatar/Avatar"
import DailyTileContainer from "../../components/DailyTile/DailyTileContainer"


export default function Home() {
  console.log('test')
  return (
    <div className="bg-background h-screen flex items-center justify-center">
      <div className="font-poppins w-full max-w-6xl px-4 sm:px-8 lg:px-16">
        <div className="relative font-poppins grid grid-cols-4 gap-4">
          <div className="grid grid-rows-subgrid gap-4 row-span-2">
            <div className=" bg-profilePrimary row-start-1 rounded-lg p-4 text-font">
              <Avatar
                className="h-32 w-32 rounded-full"
                src="https://media.licdn.com/dms/image/C5603AQFNSYsgI_rAbg/profile-displayphoto-shrink_800_800/0/1597302294920?e=1726099200&v=beta&t=qz48tM1E0z8eZmK8Nxmlatvz0Kcr8s1FDehmoKUWl6w"
              />
              <br />
              <p className="font-thin">Report For</p>
              <h2 className="font-poppins">Robert Hall</h2>
            </div>
            <div className=" bg-tile row-start-2 rounded-lg p-4 text-font place-items-center">
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="text-font hover:bg-profilePrimary bg-profilePrimary rounded-md p-2"
                >
                  Daily
                </Link>
                <Link
                  to="/weekly"
                  className="text-font hover:bg-profilePrimary rounded-md p-2"
                >
                  Weekly
                </Link>
                <Link
                  to="/monthly"
                  className="text-font hover:bg-profilePrimary rounded-md p-2"
                >
                  Monthly
                </Link>
              </nav>
            </div>
          </div>
          <div className="bg-orange-700 rounded-lg p-4">
            <DailyTileContainer title={'Work'} mode={'daily'} id={1} />
          </div>
          <div className="bg-green-600 rounded-lg p-4">
            <DailyTileContainer title={'Play'} mode={'daily'} id={2} />
          </div>
          <div className="bg-red-600 rounded-lg p-4">
            <DailyTileContainer title={'Study'} mode={'daily'} id={3} />
          </div>
          <div className="bg-blue-600 rounded-lg p-4">
            <DailyTileContainer title={'Exercise'} mode={'daily'} id={4} />
          </div>
          <div className=" bg-purple-600 rounded-lg p-4">
            <DailyTileContainer title={'Social'} mode={'daily'} id={5} />
          </div>
          <div className=" bg-yellow-600 rounded-lg p-4">
            <DailyTileContainer title={'Self Care'} mode={'daily'} id={6} />
          </div>
        </div>
      </div>
    </div>
  )
}
