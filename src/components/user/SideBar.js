import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const SideBar = () => {
  const endpoint = useLocation();
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  const handleLogOut = () => {
    dispatch({ type: "logout" });
    navigate("/");
  };
  return (
    <div>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}

        <p className="brand-link">
          <img
            src={process.env.PUBLIC_URL + "/dist/img/iware.png"}
            alt="iware  Logo"
            className="brand-image img-circle elevation-4"
            style={{ filter: "brightness(1.75)" }}
          />
          <span className="brand-text font-weight-light">IWARE POS</span>
        </p>
        

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={process.env.PUBLIC_URL + "/dist/img/user2-160x160.jpg"}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>

          <div className="info">
              <a href="www.BLABLABLA.com" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">

            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname === "/vendeur/objectif" ? "active" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                  </svg>

                  <Link to="/vendeur/objectif" className="sidelink">
                    Home
                  </Link>
                </p>
              </li>
              <li className="nav-item pt-3">
  <p className="nav-link">
  
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="nav-icon mr-3"
      style={{ fill: "currentColor", color: "#D6D8D9 !important" }}><path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.8-7.2-16-16-16H16C7.2 64 0 71.2 0 80v336c0 17.7 14.3 32 32 32h464c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
    <Link to="/vendeur/statistics" className="sidelink">
      Statics   
    </Link>
  </p>
</li>

<li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname === "/vendeur/calendrier" ? "active" : ""
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}><path d="M504 255.5c.3 136.6-111.2 248.4-247.8 248.5-59 0-113.2-20.5-155.8-54.9-11.1-8.9-11.9-25.5-1.8-35.6l11.3-11.3c8.6-8.6 22.4-9.6 31.9-2C173.1 425.1 212.8 440 256 440c101.7 0 184-82.3 184-184 0-101.7-82.3-184-184-184-48.8 0-93.1 19-126.1 49.9l50.8 50.8c10.1 10.1 2.9 27.3-11.3 27.3H24c-8.8 0-16-7.2-16-16V38.6c0-14.3 17.2-21.4 27.3-11.3l49.4 49.4C129.2 34.1 189.6 8 256 8c136.8 0 247.7 110.8 248 247.5zm-180.9 78.8l9.8-12.6c8.1-10.5 6.3-25.5-4.2-33.7L288 256.3V152c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v135.7l65.4 50.9c10.5 8.1 25.5 6.3 33.7-4.2z"/></svg>
                  <p>
                    <Link to="/vendeur/calendrier" className="sidelink">
                      Historique
                    </Link>
                  </p>
                </p>
              </li>
              
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname === "/vendeur/calendrier" ? "active" : ""
                  }`}
                >
                 
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/></svg>
                  <p>
                    <Link to="/vendeur/calendrier" className="sidelink">
                      Gestion utilisateur
                    </Link>
                  </p>
                </p>
              </li>
              
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname === "/vendeur/calendrier" ? "active" : ""
                  }`}
                >
                 
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}><path d="M139.6 35.5a12 12 0 0 0 -17 0L58.9 98.8l-22.7-22.1a12 12 0 0 0 -17 0L3.5 92.4a12 12 0 0 0 0 17l47.6 47.4a12.8 12.8 0 0 0 17.6 0l15.6-15.6L156.5 69a12.1 12.1 0 0 0 .1-17zm0 159.2a12 12 0 0 0 -17 0l-63.7 63.7-22.7-22.1a12 12 0 0 0 -17 0L3.5 252a12 12 0 0 0 0 17L51 316.5a12.8 12.8 0 0 0 17.6 0l15.7-15.7 72.2-72.2a12 12 0 0 0 .1-16.9zM64 368c-26.5 0-48.6 21.5-48.6 48S37.5 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16zm0-320H208a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0 -16-16zm0 160H208a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z"/></svg>
                  <p>
                    <Link to="/vendeur/calendrier" className="sidelink">
                      Assign Permessions
                    </Link>
                  </p>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p className={`nav-link`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="nav-icon mr-2"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                  </svg>

                  <button
                    onClick={handleLogOut}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#c2c7d0",
                    }}
                  >
                    Lougout
                  </button>
                </p>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideBar;
