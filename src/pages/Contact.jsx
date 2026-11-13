import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-mcc-navy">
      <Navbar />

      <main
        className="container flex-grow-1 d-flex flex-column justify-content-center py-5"
        style={{ paddingTop: "130px", paddingBottom: "80px" }}
      >
        <h1
          className="text-center fw-bold display-5 mb-5 fade-in-heading"
          style={{ color: "#b4b8ab", letterSpacing: "5px" }}
        >
          CONTACT US
        </h1>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div
              className="p-4 p-md-5 rounded-4 shadow-lg border border-3"
              style={{ backgroundColor: "#6a708f", borderColor: "#19214b" }}
            >
              <div className="row g-4 justify-content-around">
                <div className="col-12 col-md-6 d-flex align-items-center gap-3">
                  <img
                    src="./images/team/tharindu.jpg"
                    alt="Mr. Tharindu Weerasekara"
                    className="rounded-4 object-fit-cover shadow flex-shrink-0"
                    style={{ width: "95px", height: "105px" }}
                  />
                  <div>
                    <h4 className="fw-bold mb-1" style={{ color: "#153243" }}>
                      077 123 4567
                    </h4>
                    <h5 className="fw-semibold mb-0" style={{ color: "#153243" }}>
                      Mr. Tharindu Weerasekara
                    </h5>
                  </div>
                </div>

                <div className="col-12 col-md-6 d-flex align-items-center gap-3">
                  <img
                    src="./images/team/sandun.jpeg"
                    alt="Mr. Sadun Hettiarachchi"
                    className="rounded-4 object-fit-cover shadow flex-shrink-0"
                    style={{ width: "95px", height: "105px" }}
                  />
                  <div>
                    <h4 className="fw-bold mb-1" style={{ color: "#153243" }}>
                      077 123 4567
                    </h4>
                    <h5 className="fw-semibold mb-0" style={{ color: "#153243" }}>
                      Mr. Sadun Hettiarachchi
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
