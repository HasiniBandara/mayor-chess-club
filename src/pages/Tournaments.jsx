import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Tournaments = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Navbar />

      <main
        className="container flex-grow-1"
        style={{ paddingTop: "120px", paddingBottom: "80px", color: "#284b63" }}
      >
        <h1
          className="text-center fw-bold display-5 mb-4 fade-in-heading"
          style={{ letterSpacing: "5px" }}
        >
          TOURNAMENTS
        </h1>

        <p
          className="fs-5 lh-lg mx-auto mb-5"
          style={{ maxWidth: "880px", textAlign: "justify" }}
        >
          The Mayor Chess Club proudly hosts a variety of chess tournaments throughout
          the year, ranging from beginner-friendly events to competitive championships.
          Our tournaments are open to players of all ages and skill levels, providing a
          platform to showcase talent, gain experience, and enjoy the thrill of
          competitive play. We also organize international, rapid, and blitz
          tournaments to keep the spirit of the game alive and growing in the community.
        </p>

        <div className="row justify-content-center g-4 g-lg-5 pt-2">
          <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
            <div
              className="card tournament-card border-0 shadow-sm rounded-4 overflow-hidden h-100 w-100"
              style={{ maxWidth: "380px" }}
            >
              <Link
                to="/tournaments/chronicles"
                className="text-decoration-none text-dark d-block h-100"
              >
                <div className="overflow-hidden" style={{ height: "280px" }}>
                  <img
                    src="./images/tournaments/chronicles.jpg"
                    alt="Chronicles of Checkmate"
                    className="w-100 h-100 object-fit-cover rounded-top-4"
                  />
                </div>
                <div className="card-body text-center py-4 bg-white">
                  <h5 className="card-title fw-bold fs-4 mb-0" style={{ color: "#153243" }}>
                    Chronicles of Checkmate
                  </h5>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
            <div
              className="card tournament-card border-0 shadow-sm rounded-4 overflow-hidden h-100 w-100"
              style={{ maxWidth: "380px" }}
            >
              <Link
                to="/tournaments/battle-of-minds"
                className="text-decoration-none text-dark d-block h-100"
              >
                <div className="overflow-hidden" style={{ height: "280px" }}>
                  <img
                    src="./images/tournaments/battleOfMinds.jpg"
                    alt="Battle of Minds"
                    className="w-100 h-100 object-fit-cover rounded-top-4"
                  />
                </div>
                <div className="card-body text-center py-4 bg-white">
                  <h5 className="card-title fw-bold fs-4 mb-0" style={{ color: "#153243" }}>
                    Battle of Minds
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tournaments;
