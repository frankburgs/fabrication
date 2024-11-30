import Sample from "./sample"
import mermaid from "mermaid"
import { useEffect } from "react"
import React from "react"
import MermaidChart from "./MermaidChart"

function App() {

  const chartDefinition = ` graph TD; A-->B; A-->C; B-->D; C-->D; `;

  return (
    <>
      <h1>Vite + React</h1>
      
      <MermaidChart chart={chartDefinition} />

      <button type="button" className="btn btn-primary">
        hello
      </button>

      <Sample />
    </>
  )
}

export default App