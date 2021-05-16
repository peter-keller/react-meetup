import Navigation from "./Navigation";
import classes from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default Layout;
