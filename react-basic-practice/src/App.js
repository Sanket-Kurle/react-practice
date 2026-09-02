// Important:
import { Header } from "./components/Header.jsx";
import { TabButton } from "./components/TabButton.jsx";
import {CoreConcepts} from "./components/CoreConcepts.jsx"
import {Examples} from "./components/Examples.jsx"
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

function App() {
  return (
    <div>
      <Header />
      <main>
      <CoreConcepts/>
        <Examples/>
          </main>
    </div>
  );
}

export default App;
