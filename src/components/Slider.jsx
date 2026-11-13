import { Fragment, useState } from "react";

const Slider = ({ items, activeIndex, onSelect }) => {
  const [internalActive, setInternalActive] = useState(0);
  const active = activeIndex !== undefined ? activeIndex : internalActive;

  const handleSelect = (i) => {
    const next = active === i ? null : i;
    if (onSelect) {
      onSelect(next);
    }
    setInternalActive(next);
  };

  return (
    <section className="container-fluid py-4 overflow-hidden">
      <div className="d-flex justify-content-center align-items-center flex-wrap flex-lg-nowrap gap-3 pb-5">
        {items.map((m, i) => {
          const isActive = active === i;
          return (
            <div
              key={`${m.title}-${i}`}
              className={`slider-img position-relative rounded-4 overflow-hidden shadow-lg ${
                isActive ? "active" : ""
              }`}
              onClick={() => handleSelect(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(i);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
            >
              <img
                src={m.image}
                alt={m.title}
                className="w-100 h-100 object-fit-cover"
              />

              <h2 className="slider-vertical-title m-0 text-white fw-bold">
                {m.title}
              </h2>

              <div className="slider-details text-white w-100 pe-3">
                {m.tournaments ? (
                  <div className="slider-achievements text-start">
                    <h3 className="fw-bold fs-4 text-warning mb-3">
                      {m.title} TOURNAMENT ACHIEVEMENTS
                    </h3>
                    <div
                      className="d-flex flex-column gap-2"
                      style={{ maxHeight: "320px", overflowY: "auto" }}
                    >
                      {m.tournaments.map((t, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-3 bg-dark bg-opacity-75 border border-secondary shadow-sm"
                        >
                          <h5 className="fw-bold fs-5 text-white mb-2">
                            {t.tournament}
                          </h5>
                          <div className="d-flex flex-wrap gap-2 align-items-center">
                            <span
                              className={`badge px-3 py-2 fs-6 rounded-pill ${
                                t.category.toLowerCase().includes("women")
                                  ? "bg-danger text-white"
                                  : "bg-primary text-white"
                              }`}
                            >
                              {t.category}
                            </span>
                            <span className="badge bg-warning text-dark px-3 py-2 fs-6 rounded-pill fw-bold">
                              {t.place}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="fw-bold fs-2 text-uppercase mb-2 lh-sm">
                      {m.name.split("\n").map((line, idx, arr) => (
                        <Fragment key={line}>
                          {line}
                          {idx < arr.length - 1 && <br />}
                        </Fragment>
                      ))}
                    </h3>
                    <p className="fw-bold fs-5 text-uppercase mb-3 opacity-90">
                      {m.role}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {m.badges?.map((b) => (
                        <span
                          key={b}
                          className="badge bg-light text-dark fw-semibold py-2 px-3 rounded-pill shadow-sm"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
