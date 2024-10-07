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
      <div className="table-nav">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            fontFamily: "inherit",
            width: "100%",
            padding: "8px",
            // marginBottom: "20px",
            border: "none",
            fontWeight: 300,
          }}
        />
        <div className="button-group">
          <button onClick={() => handleFilter("project")}>Projects</button>
          <button onClick={() => handleFilter("experiment")}>
            Experiments
          </button>
          <button onClick={() => handleFilter("blog")}>Texts</button>
          <button onClick={() => handleFilter("photography")}>
            Photographies
          </button>
          {/* <button onClick={() => handleFilter("")}>All</button> */}
        </div>
        <div className="button-group">
          <button onClick={() => handleFilter("software")}>Software</button>
          <button onClick={() => handleFilter("architecture")}>
            Architecture
          </button>

          <button onClick={() => handleFilter("")}>All</button>
        </div>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          // borderSpacing: "0 5px",
        }}
      >
        <tbody>
          {filteredData
            .sort((a, b) => b.dateFrom - a.dateFrom)
            .map((item, index) => {
              // console.log(item.dateFrom);
              return (
                <tr
                  key={`${item.title}-${index}`} // Ensures unique key on every search
                  style={{
                    // cursor: "pointer", // Make rows clickable
                    // opacity: 0,
                    animation: `fadeIn 0.5s ease-out forwards ${0.05 * index}s`,
                  }}
                  onClick={() => handleRowClick(item.url)} // Add the row click handler
                >
                  <td className="table-row">
                    <span>{item.title}</span>
                    <span className="table-subtitle">{item.subtitle}</span>
                  </td>
                  <td className="table-row">
                    <span className="table-date">
                      {item.dateFrom && item.dateFrom.getFullYear()}
                      {/* {item.dateUntil && "-" + item.dateUntil.getFullYear()} */}
                      {/* {item.dateUntil && item.dateUntil.getFullYear()} */}
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
