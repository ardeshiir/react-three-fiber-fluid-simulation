import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber";
import FluidField from "./components/FluidField";

function App() {
  return (
      <Canvas style={{width:'100vw',height:'100vh'}}>
        <FluidField/>
      </Canvas>
  );
}

export default App;
