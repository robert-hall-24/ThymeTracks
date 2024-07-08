import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <main className="bg-background">
        <Outlet />
      </main>
      <footer className=""></footer>
    </>
  )
}

export default App
