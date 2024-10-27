import 'normalize.css'
import { Route } from 'wouter'
import Home from './Home/page.tsx'

function App() {
  return (
    <>
      <Route path='/' component={Home} />
    </>
  )
}

export default App