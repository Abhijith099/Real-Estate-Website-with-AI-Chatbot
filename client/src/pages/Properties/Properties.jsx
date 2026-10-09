import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");

  // ✅ Read search text from the URL (e.g., /properties?search=mysuru)
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search");

    if (searchQuery) {
      setFilter(searchQuery);
    }
  }, [location.search]);

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  // Normalize filter text
  const filterLower = filter.toLowerCase();

  // 🔍 Filter logic (title, city, country, description, address)
  const filteredProperties = data.filter((property) => {
    return (
      property.title.toLowerCase().includes(filterLower) ||
      property.city.toLowerCase().includes(filterLower) ||
      property.country.toLowerCase().includes(filterLower) ||
      property.address.toLowerCase().includes(filterLower) ||
      property.description.toLowerCase().includes(filterLower)
    );
  });

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">

        {/* 🔎 Search Bar */}
        <SearchBar filter={filter} setFilter={setFilter} />

        {/* Property Cards */}
        <div className="paddings flexCenter properties">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((card, i) => (
              <PropertyCard card={card} key={i} />
            ))
          ) : (
            <span style={{ marginTop: "2rem", color: "#888" }}>
              ❌ No properties found matching "{filter}"
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
