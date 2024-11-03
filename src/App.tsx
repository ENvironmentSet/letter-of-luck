import 'normalize.css'
import './App.css.ts'
import { Route } from 'wouter'
import Home from './Home/page.tsx'
import About from './About/page.tsx'

function App() {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </>
  )
}

export default App