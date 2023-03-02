import "../styles/globals.css"

//Internal Import
import { Navbar } from "../components/index"
import { SwapTokenContextProvider } from "../context/SwapContext"

const App = ({ Component, pageProps }) => (
  <div>
    <SwapTokenContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </SwapTokenContextProvider>
  </div>
)

export default App
