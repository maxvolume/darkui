import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layouts";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);

  return (
    <>
      <img src="public/images/maddelena-1.webp" className="max-w-40" />
      <h1 className="text-3xl">Bun FullStack Increaser</h1>
      <h2 className="text-5xl text-red-400">{count}</h2>
      {/*<button
        className="text-x1 text-amber-100 px-6 py-2 bg-amber-500 rounded-x1"
        onClick={increase}
      >
        Increase
      </button>*/}
      <Button onClick={increase}>Increase</Button>
    </>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <Layout className="gap-5">
    <StrictMode>
      <App />
    </StrictMode>
  </Layout>,
);
