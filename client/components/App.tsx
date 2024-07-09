import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default App
