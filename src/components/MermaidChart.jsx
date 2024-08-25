import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const MermaidChart = () => {
  
  useEffect(() => {
    mermaid.initialize({ 
      startOnLoad: true
    });
    mermaid.contentLoaded();
  }, []);

  const cameraIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/></svg>'

  const graphDefinition = `
    flowchart LR;
      html([HTML]) --> Style;

      subgraph Style;
        direction LR;
        CSS([CSS]) --> Tailwind([Tailwind<br/>componentless]);
        CSS --> Bootstrap([Bootstrap` + cameraIcon +  `<br/>w/ components]);
      end;
      
      subgraph Frameworks;
        direction TB
        js([Javascript])
        react([React])
        vite([Vite])
      end;

      Style --> Frameworks;

      subgraph Libraries;
        direction LR
        merm([Mermaid])
        math([MathJax])
      end;

      Frameworks --> Libraries;

      Libraries --> gh([Git<br/>GitHub]);
      gh --> node([Node<br/>PG]);
      node --> sql[(Postgresql)];
      class html,js,vite,react,gh,node,sql,merm,math,Frameworks,Libraries,Style,CSS,Tailwind,Bootstrap cssClass;
      classDef cssClass fill:black,stroke:aqua,color:white;
  `;

  return (
    <div className="mermaid">
      {graphDefinition}
    </div>
  );
};

export default MermaidChart;