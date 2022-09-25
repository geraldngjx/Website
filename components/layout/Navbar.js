import MainNavigation from './MainNavigation'

import classes from './Navbar.module.css'

function Navbar(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Navbar;