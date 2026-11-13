import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const yearsData = [
  {
    image: "/images/background/background.jpg",
    title: "2025",
    tournaments: [
      {
        tournament: "Chronicles of Checkmate International Rating Festival",
        category: "Open Category",
        place: "Champion (1st Place)",
      },
      {
        tournament: "National Women's Blitz Championship",
        category: "Women Category",
        place: "Champion (1st Place)",
      },
      {
        tournament: "Colombo District Open Rapid Tournament",
        category: "Open Category",
        place: "1st Runner-Up (2nd Place)",
      },
    ],
  },
  {
    image: "/images/logo/mayor.jpeg",
    title: "2024",
    tournaments: [
      {
        tournament: "Chronicles of Checkmate International Rating Festival",
        category: "Open Category",
        place: "Champion (1st Place)",
      },
      {
        tournament: "National Women's Blitz Championship",
        category: "Women Category",
        place: "Champion (1st Place)",
      },
      {
        tournament: "Colombo District Open Rapid Tournament",
        category: "Open Category",
        place: "1st Runner-Up (2nd Place)",
      },
    ],
  },
  {
    image: "/images/background/background.jpg",
    title: "2023",
    tournaments: [
      {
        tournament: "Chronicles of Checkmate International Rating Festival",
        category: "Open Category",
        place: "Champion (1st Place)",
      },
      {
        tournament: "National Women's Blitz Championship",
        category: "Women Category",
        place: "Champion (1st Place)",
      },
      {
        tournament: "Colombo District Open Rapid Tournament",
        category: "Open Category",
        place: "1st Runner-Up (2nd Place)",
      },
    ],
  },
  {
    image: "/images/logo/mayor.jpeg",
    title: "2022",
    tournaments: [
      {
        tournament: "Chronicles of Checkmate International Rating Festival",
        category: "Open Category",
        place: "Champion (1st Place)",
      },
      {
        tournament: "National Women's Blitz Championship",
        category: "Women Category",
        place: "Champion (1st Place)",
      },
      {
        tournament: "Colombo District Open Rapid Tournament",
        category: "Open Category",
        place: "1st Runner-Up (2nd Place)",
      },
    ],
  },
];

const Achievements = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const selectedYear =
    activeYearIndex !== null && activeYearIndex >= 0
      ? yearsData[activeYearIndex]
      : null;

  return (
    <div className="d-flex flex-column min-vh-100 bg-mcc-navy">
      <Navbar />

      <main className="flex-grow-1" style={{ paddingTop: "120px", paddingBottom: "60px" }}>
        <div className="container text-center mb-4">
          <h1
            className="fw-bold display-5 fade-in-heading"
            style={{ color: "#b4b8ab", letterSpacing: "5px" }}
          >
            ACHIEVEMENTS
          </h1>
          <p className="text-white-50 fs-5 mt-2">
            Select a year to view tournament victories and standings
          </p>

          {/* Quick Year Selection Pills */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mt-4 mb-3">
            {yearsData.map((y, idx) => (
              <button
                key={y.title}
                type="button"
                className={`btn px-4 py-2 rounded-pill fw-bold transition-all ${
                  activeYearIndex === idx
                    ? "btn-warning text-dark shadow-lg scale-105"
                    : "btn-outline-light"
                }`}
                onClick={() => setActiveYearIndex(idx)}
              >
                {y.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Year Cards / Slider */}
        <Slider
          items={yearsData}
          activeIndex={activeYearIndex}
          onSelect={(idx) => setActiveYearIndex(idx)}
        />

        {/* Detailed Tournament Results Card for Selected Year */}
        {selectedYear && (
          <div className="container mt-2" style={{ maxWidth: "860px" }}>
            <div
              className="card bg-dark bg-opacity-50 border border-secondary rounded-4 shadow-lg p-4 p-md-5 text-white"
            >
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary gap-2">
                <div>
                  <h2 className="fw-bold fs-3 text-warning mb-1">
                    {selectedYear.title} Achievements
                  </h2>
                  <span className="text-white-50 small">
                    Tournament victories, categories, and final placements
                  </span>
                </div>
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill fs-6 fw-semibold">
                  {selectedYear.tournaments.length} Tournaments Recorded
                </span>
              </div>

              <div className="row g-3">
                {selectedYear.tournaments.map((t, idx) => {
                  const isWomen = t.category.toLowerCase().includes("women");
                  return (
                    <div key={idx} className="col-12">
                      <div className="p-3 p-md-4 rounded-3 bg-dark bg-opacity-75 border border-secondary shadow-sm d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div className="text-start">
                          <span className="text-white-50 text-uppercase small fw-bold d-block mb-1">
                            Tournament Name
                          </span>
                          <h4 className="fw-bold fs-5 mb-0 text-white">
                            {t.tournament}
                          </h4>
                        </div>

                        <div className="d-flex flex-wrap gap-2 align-items-center">
                          <div className="text-md-end me-md-2">
                            <span className="text-white-50 text-uppercase small fw-bold d-block mb-1">
                              Category
                            </span>
                            <span
                              className={`badge px-3 py-2 fs-6 rounded-pill ${
                                isWomen
                                  ? "bg-danger text-white"
                                  : "bg-primary text-white"
                              }`}
                            >
                              {t.category}
                            </span>
                          </div>

                          <div className="text-md-end">
                            <span className="text-white-50 text-uppercase small fw-bold d-block mb-1">
                              Place
                            </span>
                            <span className="badge bg-warning text-dark px-3 py-2 fs-6 rounded-pill fw-bold shadow-sm">
                              🏆 {t.place}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Achievements;
