const Footer = () => (
  <footer className="footer bg-mcc-navy py-4 text-center w-100 mt-auto">
    <div className="container">
      <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
        <a
          href="https://www.facebook.com/slmayorchessclub/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon d-inline-block text-decoration-none"
          aria-label="Facebook"
        >
          <img
            src="/images/social/facebook-logo.png"
            alt="Facebook"
            className="rounded"
            style={{ width: "32px", height: "32px" }}
          />
        </a>

        <a
          href="https://www.tiktok.com/@mayor.chess.club?_r=1&_t=ZS-93cKRtfa2Ro"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon d-inline-block text-decoration-none"
          aria-label="TikTok"
        >
          <img
            src="/images/social/tiktok-logo.png"
            alt="TikTok"
            className="rounded"
            style={{ width: "32px", height: "32px" }}
          />
        </a>

        <a
          href="https://www.youtube.com/@mcccolombosrilanka"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon d-inline-block text-decoration-none"
          aria-label="YouTube"
        >
          <img
            src="/images/social/youtube-logo.png"
            alt="YouTube"
            className="rounded"
            style={{ width: "32px", height: "32px" }}
          />
        </a>
      </div>

      <p className="text-white small mb-0 opacity-75">
        © Mayor Chess Club | All Rights Reserved
      </p>
    </div>
  </footer>
);

export default Footer;
