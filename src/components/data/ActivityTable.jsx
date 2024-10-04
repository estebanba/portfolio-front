import { useState } from "react";
import { activity } from "../../data/activity";

export const ActivityTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleFilter = (filter) => {
    setSearchTerm(filter.toLowerCase());
  };

  // Filter function that filters based on any field in the object
  const filteredData = activity.filter((item) => {
    return Object.values(item).some(
      (value) =>
        // Check if the value is an array, convert to string if it is
        value != null &&
        (Array.isArray(value) ? value.join(" ") : value)
          .toString()
          .toLowerCase()
          .includes(searchTerm)
    );
  });

  const handleRowClick = (url) => {
    window.open(
      url,
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  return (
    <div
      style={{
        lineHeight: 1.4,
        margin: 0,
        padding: "20px",

        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "20px",
          border: "none",
          fontWeight: 300,
        }}
      />
      <div className="button-group">
        <button onClick={() => handleFilter("project")}>Projects</button>
        <button onClick={() => handleFilter("experiment")}>Experiment</button>
        <button onClick={() => handleFilter("blog")}>Blog</button>
        <button onClick={() => handleFilter("photography")}>Photography</button>
        {/* <button onClick={() => handleFilter("")}>All</button> */}
      </div>
      <div className="button-group">
        <button onClick={() => handleFilter("software")}>Software</button>
        <button onClick={() => handleFilter("architecture")}>
          Architecture
        </button>

        <button onClick={() => handleFilter("")}>All</button>
      </div>

      <table
        style={{
          width: "100%",
          // borderCollapse: "separate",
          // borderSpacing: "0 5px",
        }}
      >
        <tbody>
          {filteredData
            .sort((a, b) => b.date - a.date)
            .map((item, index) => (
              <tr
                key={`${item.title}-${index}`} // Ensures unique key on every search
                style={{
                  cursor: "pointer", // Make rows clickable
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out forwards ${0.05 * index}s`,
                }}
                onClick={() => handleRowClick(item.url)} // Add the row click handler
              >
                <td className="table-row">
                  <div>{item.title}</div>
                  <div className="table-subtitle">{item.subtitle}</div>
                </td>
                <td className="date">{item.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
