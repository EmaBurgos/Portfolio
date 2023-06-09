import './App.css'

function App() {
 

  return (
    <>
    <div>
      <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">🚀</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sobre mi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tecnologias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto💙</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
<main>

      <section>
        <div className='container-info'>
          <div className='info'>
            <h1>Emanuel Burgos, Desarrollador Web Fullstack</h1>
            <p>Soy un apasionado desarrollador web de Argentina con un fuerte enfoque en el frontend. 
              Me encanta crear interfaces de usuario atractivas y funcionales que brinden una experiencia excepcional a
               los usuarios.
Con una sólida experiencia en desarrollo web con mas de +800 Horas de estudio y una amplia gama de habilidades técnicas, estoy listo para asumir nuevos desafíos
 y contribuir al éxito de cualquier proyecto.
               </p>

          </div>

          <img/>

        </div>
      </section>


      <section>
        <div className='container-tech'>
        <h2>Tecnologias Destacadas</h2>
        <div className='tech-image'>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Imagen 1" className="javascript" />

        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        

        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
        
        
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          
          
        
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
        
          
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          

        
          

          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />

        
        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />

          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" />

        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" />

          
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" />
          

        
          
          
          
          
          
          
          
          
          
          
          
          
          

        </div>
        

        </div>
      </section>

      <section className='container-cards'>
        <h2>Proyectos</h2>
        <div className='cards'>
          <article className='card'>
            <img src="https://www.pragma.com.co/hubfs/h_react.jpg"/>
            <div className='titles-cards'>
              <h3>Proyecto x</h3>
              <p>Calculadora React</p>
            </div>
          </article>
          <article className='card'>
            <img src="https://www.pragma.com.co/hubfs/h_react.jpg"/>
            <div className='titles-cards'>
              <h3>Proyecto x</h3>
              <p>Calculadora React</p>
            </div>
          </article>
          <article className='card'>
            <img src="https://www.pragma.com.co/hubfs/h_react.jpg"/>
            <div className='titles-cards'>
              <h3>Proyecto x</h3>
              <p>Calculadora React</p>
            </div>
          </article>
          <article className='card'>
            <img src="https://www.pragma.com.co/hubfs/h_react.jpg"/>
            <div className='titles-cards'>
              <h3>Proyecto x</h3>
              <p>Calculadora React</p>
            </div>
          </article>
          

        </div>
        
      </section>

      <section>
        Formulario
      </section>

</main>
      <footer className='footer-ema'>
        Emanuel Burgos 🚀 2023©
      </footer>
      </div>
    </>
  )
}

export default App
