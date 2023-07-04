import { useState } from 'react';
import {ColorPalette} from "./styles/ColorPalette";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React?</h1>
      <div className="card" style={{ color: ColorPalette.blue["200"] }}>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is
          {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;