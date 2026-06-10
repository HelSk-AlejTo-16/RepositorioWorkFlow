import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <div className="avatar-base">LAT</div>
          <div className="badge-orbit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>

        <div>
          <h1>Leonel Alejandro Torres Pérez</h1>
          <p>Desarrollador de software · México</p>
          <p style={{ marginTop: '0.5rem' }}>
            Edita <code>src/App.jsx</code> y guarda para probar <code>HMR</code>
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Me han saludado {count} veces
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="about">
          <h2>Sobre mí</h2>
          <p>Apasionado por crear experiencias web modernas y eficientes.</p>
          <div className="chips">
            <span className="skill-chip">React</span>
            <span className="skill-chip">Vite</span>
            <span className="skill-chip">JavaScript</span>
            <span className="skill-chip">CSS</span>
            <span className="skill-chip">Node.js</span>
          </div>
        </div>

        <div id="social">
          <h2>Conéctate</h2>
          <p>Encuéntrame en las redes</p>
          <ul>
            <li>
              <a href="https://github.com/tu-usuario" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:leonel@example.com">
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App