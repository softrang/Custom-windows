import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';

function Codeeditor() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Preview</title>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Edit this code to see live changes!</p>
  <script>
    console.log('Hello from the embedded script!');
  </script>
</body>
</html>`);

  const iframeRef = useRef(null);

  const handleEditorChange = (value) => {
    setCode(value || ''); // Update the code state when changes are made
  };

  useEffect(() => {
    // Update the iframe content whenever code changes
    const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(code);
    iframeDocument.close();
  }, [code]);

  return (
    <div className="w-full h-full bg-gray-100 p-2   ">
       
      <div className=" w-full h-full  ">
        {/* Code Editor */}
        <div className="w-full h-1/2">
          <Editor
            height="100%"
            defaultLanguage="html"
            theme="vs-dark"
            value={code}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              fontSize: 12,
              scrollBeyondLastLine: true,
            }}
          />
        </div>
        
        {/* Live Preview */}
        <div className="w-full h-1/2 bg-white border border-gray-300 overflow-y-auto ">
          <iframe
            ref={iframeRef}
            title="Live Preview"
            className="w-full h-full"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}

export default Codeeditor;
