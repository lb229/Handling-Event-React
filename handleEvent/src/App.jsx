import { MouseClicker } from "./components/MouseClicker";
import { Welcome } from "./components/Welcome";



export function App() {

  return (
    <div>
      <Welcome />
      <hr />
      <MouseClicker name="Button1"     imagesrc="vite.svg"/>
    </div>

  );
   
}


