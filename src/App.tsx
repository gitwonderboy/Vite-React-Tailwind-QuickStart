import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import tailwindLogo from './assets/tailwind.png';
import './App.css';

export default function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={tailwindLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className=" font-bold">Vite + React + Tailwind</h1>
    </>
  );
}
