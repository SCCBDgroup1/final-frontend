import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Ticketing FC Barcelona</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-teal-400">
              Tickets available
            </a>
          </Link>
          <Link href="/create-and-list-nft">
            <a className="mr-6 text-teal-400">
              Sell a new Ticket (only FCB Admins)
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-teal-400">
              My Tickets
            </a>
          </Link>
          <Link href="/my-listed-nfts">
            <a className="mr-6 text-teal-400">
              My Listed Tickets
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
