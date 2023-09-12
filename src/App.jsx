import React, { useState } from "react";
import copy from "./emojiList.json";

function App() {
  const [search, setSearch] = useState("");

  const hand = () => {
    setSearch(copy);
  };

  return (
    
    <>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={hand}>Search</button>
      <div>
        {copy.map((data) => {
          const { title, symbol, keywords } = data;
          return (
            <>
              <div key={title}>
                <div>{title}</div>
                <div>{symbol}</div>
                <div>{keywords}</div>
                {/* <div className="bg-red-400">{search}</div> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;

// const hand = (pd) => {
//   setemoji(pd.target.value);
// };-

// const filtedemojie = copyuu.filter((emoji) => {
//   const eemojiename = emoji.name;
//   return eemojiename.includes(searchTrem);
// });

// return (
//   <>
//     <div>
//       <h1>react emoji</h1>
//       <input type="text" value={searchTrem} onChange={hand} />
//       <div>{filtedemojie.map((emoji) => emoji.symbol)}</div>
//     </div>
//   </>
// );
