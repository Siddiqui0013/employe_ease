import React, { useState, CSSProperties } from 'react';
// import ClipLoader from 'react-spinners/ClipLoader'; // Correct import path
import HashLoader from 'react-spinners/HashLoader'; // Correct import path

export default function Demo() {

  const [isLoading, setIsLoading] = useState(true); // Use boolean state for loading
  const [color, setColor] = useState("#ffffff");

  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red', // Example override for demonstration
  };

  return (
    <div className="sweet-loading">
      <button onClick={() => setIsLoading(!isLoading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Color of the loader"
      />

      {isLoading && ( // Conditionally render the loader only when loading
        <HashLoader
          color={color}
          loading={isLoading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
}
