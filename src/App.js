import Body from "./components/Body";
import Header from "./components/Header";
import { ParticlesBackground } from "./components/Particles";
import { SearchContextProvider } from "./hooks/useSearch";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <SearchContextProvider>
      <Body />
      <ParticlesBackground />
      <GlobalStyle />
      <Header />
    </SearchContextProvider>
  );
}

export default App;
