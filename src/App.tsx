import 'normalize.css'
import './App.css.ts'
import { Route } from 'wouter'
import Home from './Home/page.tsx'
import About from './About/page.tsx'
import Download from './Download/page.tsx'
import Event from './Event/page.tsx'

function App() {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/download' component={Download} />
      <Route path='/event' component={Event} />
    </>
  )
}

export default App