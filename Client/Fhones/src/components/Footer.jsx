export const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="">
        <footer
          className="text-center text-lg-start text-black"
          style={{ backgroundColor: "#ffffffd9" }}
        >
          {/* Section: Social media */}
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "#ffffff6b" }}
          >
            {/* Left */}
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href="" className="text-black me-4">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-google" />
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="text-black me-4">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">Fhones.corp</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    "Elevate Your Digital Experience with the Latest Innovations
                    from Our Technological Services. Bringing Together a Range
                    of Leading Mobile Brands, We're Here to Propel You to the
                    Forefront of Modern Technology."
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Bootstrap
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      GSM Arena API
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Express
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Work With</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      JWT
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Jest
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Google Cloud
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Sequelize
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <i className="fas fa-home mr-3" /> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" /> info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              Fhones.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* Footer */}
    </>
  );
};
