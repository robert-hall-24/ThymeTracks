export default function Home() {
  console.log('test')
  return (
    <div className="bg-green-600 text-white">
      <div className="bg-background font-poppins text-center text-font">
        <h1>Thyme Track</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-tile p-4 text-gray-800">1</div>
          <div className="bg-tile-200 p-4 text-gray-800">2</div>
          <div className="bg-gray-200 p-4 text-gray-800">3</div>
          <div className="bg-gray-200 p-4 text-gray-800">4</div>
          <div className="bg-gray-200 p-4 text-gray-800">5</div>
          <div className="bg-gray-200 p-4 text-gray-800">6</div>
          <div className="bg-gray-200 p-4 text-gray-800">7</div>
          <div className="bg-gray-200 p-4 text-gray-800">8</div>
        </div>
      </div>
    </div>
  )
}
