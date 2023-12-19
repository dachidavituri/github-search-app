import search from "./assets/icon-search.svg";
import "./search.css";

function Search(props: {
  value: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fetch: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form action="" className="card input-form" onSubmit={props.fetch}>
      <div className="search-place">
        <img src={search} alt="search" />
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Search GitHub username…"
          value={props.value}
          onChange={props.handleInput}
        />
      </div>
      <div className="search-result">
        <button className="search-btn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
