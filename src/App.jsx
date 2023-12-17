import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
// import Exper
// import "./App.css";
import Level from "./components/Level";
import Test from "./components/Test";

function App() {
    return (
        <>
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 4, 6],
                }}
            >
                <Experience />

            </Canvas>
        </>
    );
}

export default App;
