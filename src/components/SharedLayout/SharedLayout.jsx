import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from "./layout.module.css"


const SharedLayout = () => {
  return (<>
    <header className={css.header}>
      <div className={css.container}>
            <nav className={css.navigation}>
              <NavLink to="/" className={css.link}>HOME</NavLink>
              <NavLink to="/movies" className={css.link}>MOVIES</NavLink>
            </nav>
            </div>
      </header>
      <div className={css.container}>
      <main>
        <Suspense fallback={<p>...Loading page</p>}>
            <Outlet />
        </Suspense>
      </main>
    </div>
  </>
    )
}

export default SharedLayout;