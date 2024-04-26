import React from 'react'

export default function Signin() {
  return (

    <div className="container">
      <div className="signin">

        <h1>Sign-in</h1>
        
        <div className="text">
          <input type="text" placeholder="Enter your Plain Text" />
        </div>

        <div className="key">
          <input type="number" min="-26" max="26" placeholder="Enter Key (-26 to +26)" />
        </div>

        <div className="button">
          <button className="btn">Encrypt</button>
        </div>

        <div className="encrypted">
          <div className="solutionText">
            <h3>The Encrypted text is :</h3>
          </div>
          <div className="solInput">
            <input type="text" readOnly />
          </div>
        </div>

        <div className="toDecrypt">
          <p>Want to Decrypt a Cipher ?</p>
          <button className="decryptBtn">Decrypt</button>
        </div>
      
      </div>

      <div className="decrypt">

        <h1>Decrypt Cipher Text</h1>
        
        <div className="text">
          <input type="text" placeholder="Enter your Cipher Text" />
        </div>

        <div className="key">
          <input type="text" placeholder="Enter Key (-26 to +26)" />
        </div>

        <div className="button">
          <button className="btn">Decrypt</button>
        </div>

        <div className="encrypted">
          <div className="solutionText">
            <h3>The Encrypted text is :</h3>
          </div>
          <input type="text" readOnly />
        </div>

        <div className="toDecrypt">
          <p>Want to Encrypt a Plain text?</p>
          <button className="decryptBtn">Encrypt</button>
        </div>
      </div> 
    </div>

  )
}
