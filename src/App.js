import linkedin from '../src/imgs/linkedin.svg'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <main>
      <Header />
      <div className='sections'>
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}

export default App;
