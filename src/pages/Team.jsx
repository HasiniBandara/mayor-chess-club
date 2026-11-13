import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const members = [
  {
    image: "./images/team/washini.jpg",
    title: "Washini",
    name: "Washini\nChamithri",
    role: "Secretary",
    badges: ["FIDE \u00a0Arbiter", "National \u00a0Instructor"],
  },
  {
    image: "./images/team/sandun.jpeg",
    title: "Sandun",
    name: "Sadun Hettiarachchi",
    role: "Vice \u00a0President",
    badges: ["National \u00a0Arbiter"],
  },
  {
    image: "./images/team/tharindu.jpg",
    title: "Tharindu",
    name: "Tharindu Weerasekara",
    role: "President",
    badges: ["International \u00a0Arbiter", "National \u00a0Instructor"],
  },
  {
    image: "./images/team/wajira.png",
    title: "Wajira",
    name: "Wajira Gunasinghe",
    role: "Deputy \u00a0President",
    badges: ["International \u00a0Arbiter", "National \u00a0Instructor"],
  },
  {
    image: "./images/team/dilan.jpeg",
    title: "Dilan",
    name: "Dilan Udayashantha",
    role: "Treasurer",
    badges: ["FIDE \u00a0Arbiter"],
  },
];

const Team = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-mcc-navy">
      <Navbar />

      <main className="flex-grow-1" style={{ paddingTop: "120px" }}>
        <div className="container text-center mb-4">
          <h1
            className="fw-bold display-5 fade-in-heading"
            style={{ color: "#b4b8ab", letterSpacing: "5px" }}
          >
            OUR TEAM
          </h1>
        </div>

        <Slider items={members} />
      </main>

      <Footer />
    </div>
  );
};

export default Team;
