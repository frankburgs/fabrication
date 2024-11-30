import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const MermaidChart = ({ chart }) => {
  
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="mermaid">
      {chart}
    </div>
  );
};

export default MermaidChart;
