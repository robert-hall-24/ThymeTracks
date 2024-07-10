import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './pages/Home/Home'
import Weekly from './pages/Home/Weekly'
import Monthly from './pages/Home/Monthly'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/weekly" element={<Weekly />} />
    <Route path="/monthly" element={<Monthly />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
