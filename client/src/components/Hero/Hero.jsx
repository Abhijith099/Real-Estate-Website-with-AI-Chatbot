import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // 🚀 Navigate to Properties page with search query
  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/properties?search=${query.trim()}`);
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* LEFT SIDE */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
            >
              Discover <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>

          {/* Description */}
          <div className="flexColStart secondaryText flexhero-des">
            <span>
              Explore a wide variety of properties and find the one that suits you effortlessly.
            </span>
            <span>Say goodbye to the hassle of finding your perfect home.</span>
          </div>

          {/* ⭐ SEARCH BAR (Fully Working) */}
          <div className="search-bar">
            <span className="search-icon">
              <i className="fa fa-map-marker" />
            </span>

            <input
              type="text"
              placeholder="Search by title / city / country"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            <button onClick={handleSearch} className="search-btn">
              Search
            </button>
          </div>

          {/* STATS */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> +
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> +
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> +
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "ease-in" }}
            className="image-container"
          >
            <img src="./r3.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
