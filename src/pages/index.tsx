import {NavBar} from "@/components/molecules/nav-bar/NavBar";
import Head from "next/head";
import {Slider} from "@/components/molecules/slider/Slider";
import {MainCollections} from "@/components/molecules/main-collections/MainCollections";
import {CardFilmList} from "@/components/molecules/card-film-list/CardFilmList";


export default function Home() {
  return (
    <>
      <Head>
        <title>Disney Plus Clone</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>


        <link rel="icon"
              href="/disney-favicon.ico"/>
      </Head>
      <div className="main-container">
        <div className="main-container-background">

          <header className="header">
            <NavBar/>

            <section>
              <Slider></Slider>
            </section>
          </header>


          <main className="main">
            <section>
              <MainCollections/>
            </section>
            <section>
              <CardFilmList titleCard="Principales" position={0} numberOfElements={20}/>
              <CardFilmList titleCard="Nominados al Globo de oro" isLarge={true}/>
              <CardFilmList titleCard="Drama y suspenso" position={20} numberOfElements={15}/>
              <CardFilmList titleCard="Destacados de Star" position={35} numberOfElements={15}/>
              <CardFilmList titleCard="Tendencias" position={50} numberOfElements={13}/>
              <CardFilmList titleCard="Star Wars" position={63} numberOfElements={10}/>
              <CardFilmList titleCard="Recomendaciones para ti" position={73} numberOfElements={14}/>
            </section>
          </main>


          <footer className="footer">
            <div className="footer-container">

              <div className="footer__home">
                <img src="/nav-icons/disney-logo.png" alt=""/>
              </div>

              <div className="footer__links">
                <button>Terminos de uso</button>
                <button>Políticas de cookies</button>
                <button>Política de privacidad</button>
                <button>Complemento Política de privacidad</button>
                <button>Acuerdo de suscripción</button>
                <button>Ayuda</button>
                <button>Dispositivos compatibles</button>
                <button>Acerca de Disney+</button>
                <button>Publicidad personalizada</button>
                <span>Disney+ es un servicio por suscripción de pago, su contenido está sujeto a
                disponibilidad. El servicio Disney+ es comercializado por The Walt Disney Company
              Colombia S.A., Calle 70 Bis No. 4 - 41, Bogotá D.C., Colombia, y el número de NIT es
              800.246.937-1.</span>
              </div>

            </div>

            <div className="footer__right">
              <span>Hecho por Yeison Cordoba 2025.</span>
            </div>

          </footer>

        </div>


      </div>
    </>
  );
}
