import { ActivityTable } from "../components/data/ActivityTable";
import { ThemeSwitchButton } from "../components/layout/ThemeSwitchButton";

export const HomePage = () => {
  return (
    <div
      style={{
        marginTop: "15px",
      }}
    >
      {/* <h2
        style={{
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: 1.4,
          margin: 0,
          padding: "20px",

          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      > */}
      <div
        style={{
          // fontWeight: 400,
          lineHeight: 1.4,
          margin: 0,
          padding: "20px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ paddingLeft: "8px" }}>Esteban Basili</span>
          <span
            className="table-subtitle"
            // style={{ fontSize: "1.2rem" }}
          >
            Architect and Software Design Engineer. Portfolio
          </span>
        </div>
        <div>
          <ThemeSwitchButton />
        </div>
      </div>

      {/* </h2> */}
      <div>
        <ActivityTable />
      </div>
    </div>
  );
};
