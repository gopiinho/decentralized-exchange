import "../styles/globals.css"

//Internal Import
import { Navbar } from "../components/index"

const App = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
)

export default App
