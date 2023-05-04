import "./Home.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/Slices/AllMovies";
import { useNavigate } from "react-router-dom";
import { add } from "../redux/Slices/movieDetails";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [topRated, setTopRated] = useState("");
  // const [data, setData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Products = useSelector((store) => store.allMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  // useEffect(async () => {
  //   const data = await Products.data;
  //   const filterd = await data.filter((show) => show.rating.average >= 6);
  // });

  console.log(Products, "products");
  const handleMovie = (movies) => {
    dispatch(add(movies));
    navigate("/movies");
  };
  const handleOnSearch = () => {
    dispatch(fetchMovies(query));
  };
  return (
    <div>
      <div className="mt-4 container">
        <nav className="NavBar mb-2">
          <div>
            <Link className="nav-link bolder" to={"/"}>
              Home
            </Link>
          </div>
          <div className="Searchcontrol">
            <input
              placeholder="Search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => handleOnSearch()}>search</button>
          </div>
        </nav>

        <div className="mainheadline row">
          {Products.data &&
            Products.data.slice(2, 3).map((item) => {
              return (
                <div
                  className="col-lg-8 mt-2 "
                  onClick={() => handleMovie(item)}
                  style={{ cursor: "pointer" }}
                >
                  {item.show.image && (
                    <div className="text-center">
                      <img
                        width={300}
                        className="img-fluid"
                        src={item.show.image.original}
                        alt="oswald-elsaboath-ym-EI-DTS1g-unsplash-1"
                        border="0"
                      />
                    </div>
                  )}
                  <h5 className="mt-2">{item.show.name}</h5>
                  <div>{item.show.summary.slice(3, 300)}</div>
                </div>
              );
            })}

          {/* side bar top rated */}
          <div className="col-lg-4 mt-2">
            <h3>Top Rated Movies</h3>

            {Products.data &&
              Products.data.slice(0, 4).map((item) => {
                return (
                  <>
                    <div
                      className="toprateddiv d-flex d-flex gap-4 mt-4"
                      onClick={() => handleMovie(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.show.image && (
                        <img
                          className="img-fluid"
                          width={60}
                          src={item.show.image.medium}
                          alt="oswald-elsaboath-ym-EI-DTS1g-unsplash-1"
                          border="0"
                        />
                      )}
                      <div className="d-flex flex-column mt-1">
                        <h6>{item.show.name}</h6>
                        <div> {item.show.rating.average}</div>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="moviescard row mt-4">
          {Products.data &&
            Products.data.map((item) => {
              return (
                <div
                  className="col-lg-2 my-4"
                  onClick={() => handleMovie(item)}
                  style={{ cursor: "pointer" }}
                >
                  {item.show.image && (
                    <img src={item.show.image.medium} alt="gfdg" />
                  )}
                  <div>{item.show.rating.average}</div>
                  <h6>{item.show.name}</h6>
                  <button>Details</button>
                </div>
              );
            })}
        </div>
      </div>
      <footer
        style={{ backgroundColor: "rgb(51,51,51)", color: "white" }}
        className="text-center py-4"
      >
        copyright@2023
      </footer>
    </div>
  );
};

export default Home;
