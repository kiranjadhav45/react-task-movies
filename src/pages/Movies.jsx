import "./Movies.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/Slices/AllMovies";
import { Link } from "react-router-dom";

const Movies = () => {
  const dispatch = useDispatch();
  const Products = useSelector((store) => store.movieDetails);
  console.log(Products, "movie");
  return (
    <div>
      <nav>
        <div className="py-4 ms-4">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
      </nav>
      <div className="moviesDetails">
        <div className="movie">
          <div className="imagediv text-center">
            {Products.show.image && (
              <img
                width={300}
                src={
                  Products.show.image.original
                    ? Products.show.image.original
                    : Products.show.image.medium
                }
                alt="imageMovie"
              />
            )}
          </div>
          <div className="generssss">
            <span className="mx-1">{Products.show.genres[0]}</span>
            {Products.show.genres[1] && (
              <span className="mx-1">{Products.show.genres[1]}</span>
            )}
            {Products.show.genres[2] && (
              <span className="mx-1">{Products.show.genres[2]}</span>
            )}
          </div>
          <div className="row">
            <div className="col">
              <h5> {Products.show.name}</h5>
            </div>
            <div className="col">Rating {Products.show.rating.average}</div>
          </div>
          <div>{Products.show.summary.slice(3, 350)}...</div>
        </div>
        <a className="mt-2" target="_blank" href={Products.show.url}>
          Read more
        </a>
      </div>
      <footer
        style={{ backgroundColor: "rgb(51,51,51)", color: "white" }}
        className="text-center py-4 fixed-bottom"
      >
        copyright@2023
      </footer>
    </div>
  );
};

export default Movies;
