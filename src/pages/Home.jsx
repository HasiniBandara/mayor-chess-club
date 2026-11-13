import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Navbar />

      <div
        className="hero-banner bg-mcc-navy py-5 text-center position-relative shadow-sm"
        style={{ marginTop: "85px" }}
      >
        <div className="container py-4">
          <div className="typewriter-container d-inline-block">
            <h1
              className="fw-bolder display-4 mb-2 text-logo"
              style={{
                color: "#c7d6dc",
                letterSpacing: "5px",
                textShadow: "4px 8px 10px #3d5661",
              }}
            >
              MAYOR CHESS CLUB
            </h1>
          </div>
          <div className="mt-3">
            <span
              className="text-white-50 fs-5 fw-medium d-inline-block"
              style={{ letterSpacing: "3px" }}
            >
              Let's make the winning move ...
            </span>
          </div>
        </div>
      </div>

      <section className="container py-5 my-4 flex-grow-1" style={{ color: "#284b63" }}>
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-8 order-2 order-lg-1">
            <h1
              className="fw-bold display-5 mb-4 fade-in-heading"
              style={{ letterSpacing: "8px" }}
            >
              ABOUT US
            </h1>
            <div className="fs-5 lh-lg">
              <p className="mb-4" style={{ textAlign: "justify" }}>
                Founded in 2015 by chess enthusiast <b>Tharindu Weerasekara</b>, the{" "}
                <b>Mayor Chess Club</b> was established with a vision to promote
                intellectual growth, strategic thinking, and community spirit through
                the game of chess. What started as a small group of passionate players
                has quickly grown into a vibrant hub for chess lovers of all ages and
                skill levels.
              </p>
              <p className="mb-0" style={{ textAlign: "justify" }}>
                Based in Colombo, the club welcomes students, professionals, and seniors
                alike, creating an inclusive environment where everyone can learn,
                compete, and share their love for chess. Our mission is to develop young
                talent, encourage fair competition, and foster a lifelong appreciation
                for the game.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-4 text-center order-1 order-lg-2">
            <img
              src="/images/logo/mayor.jpeg"
              alt="Mayor Chess Club logo"
              className="img-fluid rounded-4 shadow-lg logo-zoom"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
