import React, { useState } from "react";
import Data from "./emojiList.json";

function App() {
  const [data, setData] = useState(Data);

  return (

    <>
      <center>
        <input
          type="text"
          onChange={(e) =>
            setData(Data.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
          }
        />
        {/* <button onClick={onSearch}>Search</button> */}
        <div>
          {data.map((d) => {
            const { title, symbol, keywords } = d;
            return (

              <div key={title}>
                <div>{title}</div>
                <div>{symbol}</div>
                <div>{keywords}</div>
              </div>

            );
          })}
        </div>
      </center>
    </>
  );
}

export default App;