import "./App.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { FaReact } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import Swal from "sweetalert2";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById("contact-form");
    form.submit();
    Swal.fire(
      "Enviado Correctamente💙",
      "Gracias, A la brevedad me contactare",
      "success"
    );
    event.preventDefault();
  };

  useEffect(() => {
    ScrollReveal().reveal(".info", {
      delay: 300,
      distance: "100px",
      duration: 3000,
      easing: "ease-out",
      origin: "left",
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".container-tech", {
      delay: 300,
      distance: "100px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
    });

    ScrollReveal().reveal(".container-cards", {
      delay: 300,
      distance: "100px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
    });

    ScrollReveal().reveal(".certified-container", {
      delay: 300,
      distance: "100px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
    });

    ScrollReveal().reveal(".contact-container", {
      delay: 300,
      distance: "100px",
      duration: 1000,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <div>
        <Particles
          className="particulas"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#101010de",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 10,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <header>
          <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                🚀
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#SobreMi">
                      Sobre mí
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Tecnologias">
                      Tecnología
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Proyectos">
                      Proyectos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Certificados">
                      Certificados
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Contacto">
                      Contacto💙
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section className="container-dad-info" id="SobreMi">
            <div className="container-info">
              <div className="info">
                <h1>
                  <span className="span-color">Emanuel Burgos</span>
                  Desarrollador Web Fullstack
                  <FaReact />
                </h1>
                <p>
                  Soy un apasionado Desarrollador web de Argentina con un fuerte
                  enfoque en el Frontend. Me encanta crear interfaces de usuario
                  atractivas y funcionales que brinden una experiencia
                  excepcional a los usuarios. Con una sólida experiencia en
                  desarrollo web con <span className="span-color">+800</span>{" "}
                  horas de estudio y una amplia gama de habilidades técnicas,
                  estoy listo para asumir nuevos desafíos y contribuir al éxito
                  de cualquier proyecto. Soy una persona autodidacta y busco
                  ayudar al mundo con mis conocimientos.
                </p>
                <p>Me gusta el deporte, los animales y los videojuegos.</p>
                <p>
                  Actualmente estoy estudiando{" "}
                  <span className="span-color">Diseño UX/UI.</span>
                </p>
                <p>
                  ¡Te doy una amable bienvenida a mi portfolio y estaría
                  encantado de ayudarte! No dudes en contactarme. 💙
                </p>
              </div>

              <img />
            </div>
          </section>

          <section className="container-dad-tech" id="Tecnologias">
            <div className="container-tech">
              <h2 className="title-tech">Tecnologías Destacadas</h2>
              <div className="tech-image">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="Imagen 1"
                  className="javascript"
                />

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

          <section id="Proyectos" className="container-cards">
            <h2>Proyectos</h2>
            <div className="cards">
              <article className="card">
                <img src="https://my-project-emaburgos.vercel.app/images/TOOLMATCH.png" />
                <div className="titles-cards">
                  <h3>ToolMatch</h3>
                  <p>
                    Proyecto final grupal durante el bootcamp de Henry. Es un
                    marketplace de la comunidad, donde se puede registrarse para
                    poder arrendar y vender herrramientas. Se utilizo Next.js,
                    Tailwind, Prisma, Api, Autenticaciones, entre otras.
                  </p>
                  <a
                    className="btn"
                    href="https://tools-match-eight.vercel.app/"
                    target="https://tools-match-eight.vercel.app/"
                  >
                    Ver
                  </a>
                </div>
              </article>
              <article className="card">
                <img src="https://images.memphistours.com/large/8193af41e444e3f6af5afd7294c9f5ef.jpg" />
                <div className="titles-cards">
                  <h3>Food Web</h3>
                  <p>
                    Proyecto individual de bootcamp Henry, utiliza una base de
                    datos y una Api para traer recetas de comidas, se puede
                    filtrar,organizar y crear recetas. React, Node, Redux,
                    PostgreSQL, Express, Sequelize
                  </p>
                  <a
                    className="btn"
                    href="https://github.com/EmaBurgos/PI-food"
                    target="https://github.com/EmaBurgos/PI-food"
                  >
                    Ver
                  </a>
                </div>
              </article>
              <article className="card">
                <img src="https://my-project-emaburgos.vercel.app/images/descarga.jpeg" />
                <div className="titles-cards">
                  <h3>Rick y Morty</h3>
                  <p>
                    Utiliza la Api de Rick y Morty, Se pueden organizar y
                    filtrar los personajes de la Mitica serie de Rick y Morty
                  </p>
                  <a
                    className="btn"
                    href="https://github.com/EmaBurgos/Rick-y-morty"
                    target="https://github.com/EmaBurgos/Rick-y-morty"
                  >
                    Ver
                  </a>
                </div>
              </article>
              <article className="card">
                <img src="https://www.pragma.com.co/hubfs/h_react.jpg" />
                <div className="titles-cards">
                  <h3>Cotizador de Seguros</h3>
                  <p>
                    Cotiza el precio de los seguros $, Aplicacion Web creada en
                    mi tiempo libre con React
                  </p>
                  <a
                    className="btn"
                    href="https://github.com/EmaBurgos/Calculator-con-React-"
                    target="https://github.com/EmaBurgos/Calculator-con-React-"
                  >
                    Ver
                  </a>
                </div>
              </article>
              <article className="card">
                <img src="https://www.pragma.com.co/hubfs/h_react.jpg" />
                <div className="titles-cards">
                  <h3>Calculadora</h3>
                  <p>
                    Calculadora con Javascript Puro, Uno de mis primeros
                    proyectos realizados en mi tiempo libre de forma autodidacta
                  </p>
                  <a
                    className="btn"
                    // href="https://tools-match-eight.vercel.app/"
                    // target="https://tools-match-eight.vercel.app/"
                  >
                    Ver
                  </a>
                </div>
              </article>
              <article className="card">
                <img src="https://my-project-emaburgos.vercel.app/images/RELOJ.png" />
                <div className="titles-cards">
                  <h3>Reloj Virtual</h3>
                  <p>
                    Marca el horario y día de la fecha actual, Realizado
                    Javascript puro
                  </p>
                  <a
                    className="btn"
                    // href="https://tools-match-eight.vercel.app/"
                    // target="https://tools-match-eight.vercel.app/"
                  >
                    Ver
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section id="Certificados" className="certified-container">
            <h2 className="title-tech">Aprendizaje y Certificados ✔</h2>
            <div className="cards">
              <article className="card">
                <img src="https://my-project-emaburgos.vercel.app/images/HENRY.png" />
                <div className="titles-cards">
                  <h3>FullStack Developer Henry</h3>
                  <p>
                    Bootcamp Intensivo, Javascript, HTML, CSS, React, Node,
                    Redux, SQL, +800 horas
                  </p>
                </div>
              </article>
              <article className="card">
                <img src="https://my-project-emaburgos.vercel.app/images/Programacionweb.png" />
                <div className="titles-cards">
                  <h3>Programación Web</h3>
                  <p>Bases de Javascript, HTML, CSS y SQL. +40 horas</p>
                </div>
              </article>
              <article className="card">
                <img src="https://my-project-emaburgos.vercel.app/images/algoritmos.png" />
                <div className="titles-cards">
                  <h3>Algoritmos de programación</h3>
                  <p>Analisis y resolucion de algoritmos, +20 horas</p>
                </div>
              </article>
              <article className="card">
                <img src="https://my-project-emaburgos.vercel.app/images/marketing.png" />
                <div className="titles-cards">
                  <h3>Marketing Digital</h3>
                  <p>Estrategias para el marketing en la Web, +10 horas</p>
                </div>
              </article>
              <article className="card">
                <img src="https://my-project-emaburgos.vercel.app/images/big data.png" />
                <div className="titles-cards">
                  <h3>Big Data</h3>
                  <p>Organizacion y evaluacion de datos , +10 horas</p>
                </div>
              </article>
              <article className="card">
                <img src="https://my-project-emaburgos.vercel.app/images/navegacionsegura.png" />
                <div className="titles-cards">
                  <h3>Navegación Segura</h3>
                  <p>Tecnicas para la navegación Web, +10 horas</p>
                </div>
              </article>
            </div>
          </section>

          <section className="contact-container" id="Contacto">
            <h2>Visita mis redes 🤩</h2>
            <article className="redes">
              <a
                href="https://www.linkedin.com/in/emanuel-burgos-439537195/"
                target="https://www.linkedin.com/in/emanuel-burgos-439537195/"
              >
                <BsLinkedin />
              </a>

              <a
                href="https://github.com/EmaBurgos"
                target="https://github.com/EmaBurgos"
              >
                <BsGithub />
              </a>

              <a href="../CV Emanuel Burgos 42833987 Web.pdf" download>
                <GoChecklist />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=541136245137&text=Hola%2C%20Me%20interesa%20comunicarte%20una%20propuesta%20de%20trabajo."
                target="https://api.whatsapp.com/send?phone=541136245137&text=Hola%2C%20Me%20interesa%20comunicarte%20una%20propuesta%20de%20trabajo."
              >
                <BsWhatsapp />
              </a>
            </article>

            <h2 className="title-tech">Contáctame</h2>
            <section className="section-form">
              <form
                id="contact-form"
                action="https://formsubmit.co/emaburgos17@hotmail.com"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="Comida">
                  <label htmlFor="name">Nombre / Organización</label>
                  <input
                    className="input-post"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    pattern="^[a-zA-Z\s]+$"
                    title="Ingresa solo letras y espacios"
                    required
                  ></input>

                  <label htmlFor="asunto">Asunto</label>
                  <input
                    className="input-post"
                    type="text"
                    name="asunto"
                    placeholder="Propuesta"
                    pattern="^[a-zA-Z\s]+$"
                    title="Ingresa solo letras y espacios"
                    required
                  ></input>

                  <label htmlFor="email">Email</label>
                  <input
                    className="input-post"
                    type="email"
                    name="email"
                    placeholder="Email"
                    pattern={emailRegex}
                    title="Ingresa una dirección de correo electrónico válida"
                    required
                  ></input>

                  <label htmlFor="message" name="message">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Mensaje"
                    maxLength="280"
                    required
                  ></textarea>

                  <div className="boton-div">
                    <input className="btn" type="submit" value="Enviar..🚀" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://emaburgos.vercel.app/#Contacto"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                  </div>
                </div>
              </form>
            </section>
          </section>
        </main>
        <footer className="footer-ema">
          Con amor ❤ Emanuel Burgos 🚀 2023 ©Todos los Derechos reservados.
        </footer>
      </div>
    </>
  );
}

export default App;
