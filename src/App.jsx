
import { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=40258800-c4ae8c1b1fa7ecfd88b45f046&q=${search}&image_type=photo`)
      .then((res) => res.json())
      .then((d) => setData(d.hits));
  }, [search]); // Pass [search] as a dependency to useEffect

  return (


    <div>
      <div className="navbar" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap" ,marginBottom:"10px",border:" black ", height:"50px",backgroundColor:"gray"}}>
        <h3 style={{color:"black", marginLeft:"50px"}}>Pixabay</h3>
        <input type="search" onChange={(e) => setSearch(e.target.value)}  style={{height:"30px" ,borderRadius:"10%"}}/>
      </div>
      
      <section style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap"}}>
        {data.map((x) => (
          <div key={x.id}>
            <img src={x.largeImageURL} alt={x.tags} width='300px' height='300px'  />
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;