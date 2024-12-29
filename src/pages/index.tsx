import { NavBar } from "@/components/nav-bar/NavBar";

import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <title>Disney Plus Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-container">
        <main>
            <header>
                <NavBar/>

            </header>
            

        </main>

        <footer>

        </footer>
      </div>
    </>
  );
}