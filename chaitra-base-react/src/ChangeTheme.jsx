import React, { useState } from "react";

function ChangeTheme() {
  // let darkTheme = true;

  const [darkTheme, setDarkTheme] = useState(false);

  const changeToDarkTheme = () => {
    // darkTheme = true;
    setDarkTheme(true);
    console.log("changeToDarkTheme",darkTheme);
  };

  const changeToLightTheme = () => {
    // darkTheme = false;
    setDarkTheme(false);
    console.log("changeToLightTheme");
  };
  

  // re-render
  return (
    <div className={darkTheme ? "dark-mode" : ""}>
      
       {/* <button
        style={{ display: darkTheme ? "none" : "" }}
        onClick={changeToDarkTheme}
      >
        dark theme
      </button>
      <button
        style={{ display: !darkTheme ? "none" : "" }}
        onClick={changeToLightTheme}
      >
        light theme
      </button>  */}

     

      {darkTheme ? (
        <button onClick={changeToLightTheme}>light theme</button>
      ) : (
        <button onClick={changeToDarkTheme}>dark theme</button>
      )}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quibusdam minima atque eligendi quidem voluptatibus ex, possimus quasi
        id nemo tempora alias voluptatum officia dolor doloremque sit iste
        laudantium libero!
      </p>
      <br />
    </div>
  );
}

export default ChangeTheme;
