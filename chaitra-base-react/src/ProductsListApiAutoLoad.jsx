import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

/* 
  COMPONENT lIFECYCLE
    - componentDidMount
    - componentDidUpdate
    - componentDidUnmount

  useEffect  | sideEffect hook

*/

export default function ProductsListApiAutoLoad() {
  console.log("render | re-render");
  const [products, setProducts] = useState([]);
  const [perPage, setPerpage] = useState(5);
  const [searchTitle, setSearchTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("useEffect: component did mount");
    axios
      .get(
        `https://dummyjson.com/products/search?q=${searchTitle}&limit=${perPage}`,
      )
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [searchTitle, perPage]);

  useEffect(() => {
    console.log("useEffect: component did update, search ", searchTitle);
  }, [searchTitle]);

  return (
    <div className="ml-8">
      <p>Product List fetched from API</p>
      <br />

      <div className="flex gap-4 items-center">
        <form onSubmit={handleSubmit}>
          <input
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="border px-3 py-1"
            type="text"
            placeholder="title"
          />
        </form>

        <div>
          <span>per page: </span>
          <select
            className="border p-1"
            value={perPage}
            onChange={(e) => {
              console.log(e.target.value);
              setPerpage(e.target.value);
            }}
          >
            <option value="5">five</option>
            <option>15</option>
            <option>25</option>
            <option>30</option>
          </select>
        </div>
      </div>

      <div className="gap-4  mt-12 grid grid-cols-4">
        {products.map((el) => {
          return (
            <Link to={`/products/${el.id}`} className="border p-4" key={el.id}>
              <img src={el.thumbnail} />
              <p>{el.title}</p>
              <p>${el.price}</p>
            </Link>
          );
        })}
      </div>
      {products.length == 0 && <p>NO products found.</p>}
    </div>
  );
}
