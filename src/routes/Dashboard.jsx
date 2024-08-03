import stylesDashboard from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <p id={stylesDashboard.zeroState}>
      This is a demo for React Router.
      <br />
      Check out{" "}
      <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
    </p>
  );
}
