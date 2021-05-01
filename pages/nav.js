import Head from "next/head";

export default function Nav() {
    return (
        <>
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
              {/* అ స మ ర్థు డు */}
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
          </div>
        </nav>
        </>
    )
}