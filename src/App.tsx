import 'normalize.css'
import './App.css.ts'
import { Route } from 'wouter'
import Home from './Home/page.tsx'
import About from './About/page.tsx'
import Download from './Download/page.tsx'

function App() {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/download' component={Download} />
    </>
  )
}

export default App