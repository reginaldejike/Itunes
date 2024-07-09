import { CiSearch } from "react-icons/ci";
import "./Barner.scss";
import BarnerPic from "../../assets/images/Barnerpics.png";
import React from "react";
import { useOutletContext } from "react-router-dom";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Barner = () => {
  const { search, setSearch } = useOutletContext<Props>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="barner">
        <div className="barner-left">
          <h2>Don't Miss Out!</h2>
          <p>
            Enhance your digital life with the best technology. Upgrade your
            work setup, find the latest gadgets, or get the perfect gift—we’ve
            got you covered
          </p>
          <form action="" className="search-wrapper">
            <div className="search-input">
              <CiSearch size="2rem" className="search" />
              <input
                type="text"
                className="input-element"
                value={search}
                onChange={onChange}
              />
            </div>
            <button
              className="search-button"
              onClick={(e) => e.preventDefault()}
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <img src={BarnerPic} alt="Barnar Picture" className="barnar-pic" />
        </div>
      </div>
    </>
  );
};

export default Barner;
