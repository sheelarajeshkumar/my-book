import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-900">
      <div className={styles.container}>
        <Head>
          <title>అ స మ ర్థు డు</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>
          <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <a
              className="font-bold text-2xl lg:text-4xl text-left text-white"
              href="#"
            >
              అ స మ ర్థు డు
            </a>
            <div className="block lg:hidden text-white">
              <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
           {/*  <div className="hidden lg:block text-white">
              <ul className="inline-flex">
                <li>
                  <a className="px-4 font-bold" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="px-4 hover:text-gray-800" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="px-4 hover:text-gray-800" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </nav>

        <main className={styles.main}>
          <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
           
            <div className="bg-gray-600 h-64 w-96 md:w-64 rounded-lg shadow-md bg-cover bg-center">
            <img src="/book.png"/>
            </div>
            
            <div className="w-96 md:w-64 bg-gray-600 -mt-5 shadow-lg rounded-lg overflow-hidden">
              <div className="py-2 text-center font-bold uppercase tracking-wide text-white">
                అ స మ ర్థు డు
              </div>
              <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
                <h1 className="text-gray-800 font-bold ">₹ 300</h1>
                <form>
                  <script
                    src="https://checkout.razorpay.com/v1/payment-button.js"
                    data-payment_button_id="pl_Ge6aoEF7spuW7B"
                    async
                  >
                    {" "}
                  </script>{" "}
                </form>
                {/* <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Buy Now</button> */}
              </div>
            </div>

          </div>
          {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

          {/*   <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
              
        </div> */}
        </main>

        <footer className={styles.footer}>
          <a
            href="https://rajeshkumarsheela.surge.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Powered by{" "}
            <img src="https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-business-man-free1.png" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </div>
  );
}
