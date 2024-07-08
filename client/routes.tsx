import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './pages/Home/Home'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
