import Navbar from "./components/ui/navbar/navbar"
import Panel from "./components/ui/panel/panel"

function App() {
  return (
    <> 
      <Navbar/>
      <div className="container py5">     {/* Escribir: div.container.py5 para que salga la estructura */}
        <Panel className="mb-1">
          <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum hic inventore id voluptas voluptatum impedit commodi ea autem facilis aut a est explicabo molestias, dolorem veniam quis, possimus minima quibusdam?</p>
        </Panel>

        <Panel mode="danger">
          <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum hic inventore id voluptas voluptatum impedit commodi ea autem facilis aut a est explicabo molestias, dolorem veniam quis, possimus minima quibusdam?</p>
        </Panel>
      </div>    

    </>
  )
}

export default App