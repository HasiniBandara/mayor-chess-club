import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BattleOfMinds = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-mcc-navy">
      <Navbar />

      <main
        className="container flex-grow-1 text-center d-flex flex-column justify-content-center py-5"
        style={{ paddingTop: "140px", paddingBottom: "80px", color: "#b4b8ab" }}
      >
        <h1
          className="fw-bold display-5 mb-4 fade-in-heading"
          style={{ letterSpacing: "5px" }}
        >
          BATTLE OF MINDS
        </h1>
        <p className="fs-5 text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
          An electrifying rapid and blitz chess showdown featuring tactical masterclasses
          and high-intensity competition.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default BattleOfMinds;
