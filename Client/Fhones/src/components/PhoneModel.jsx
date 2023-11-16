import { Link } from "react-router-dom";

export const PhoneModel = () => {
  return (
    <>
      {/* Image */}
      <section
        className="vh-50 imageContainer"
        style={{ backgroundColor: "#ffffff" }}
      >
        <hr />
        <div className="flex-column">
          <img
            src="https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid imageCategory"
            alt=""
          />
          <p className="display-1 displayCustom customtext">Apple Phones</p>
        </div>
      </section>
      {/* Image */}

      {/* Image Model */}
      <section className="vh-100" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3 cusRow">
              <div className="imageOuter d-flex flex-column align-items-center">
                <Link
                  to={"/device-detail"}
                  href=""
                  className="link-underline-opacity-0link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"
                >
                  <img
                    src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
                    className="img-fluid"
                    alt="Gambar 1"
                  />
                  <div className="mt-2">
                    <p className="mb-0">iPhone 15 Promax</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-3 mb-3 cusRow">
              <div className="imageOuter d-flex flex-column align-items-center">
                <img
                  src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg"
                  className="img-fluid"
                  alt="Gambar 1"
                />
                <div className="mt-2">
                  <p className="mb-0">iPhone 15 Promax</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 cusRow">
              <div className="imageOuter d-flex flex-column align-items-center">
                <img
                  src="https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2022.jpg"
                  className="img-fluid"
                  alt="Gambar 1"
                />
                <div className="mt-2">
                  <p className="mb-0">iPhone 15 Promax</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 cusRow">
              <div className="imageOuter d-flex flex-column align-items-center">
                <img
                  src="https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg"
                  className="img-fluid"
                  alt="Gambar 1"
                />
                <div className="mt-2">
                  <p className="mb-0">iPhone 15 Promax</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 cusRow">
              <div className="imageOuter d-flex flex-column align-items-center">
                <img
                  src="https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg"
                  className="img-fluid"
                  alt="Gambar 1"
                />
                <div className="mt-2">
                  <p className="mb-0">iPhone 15 Promax</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 cusRow">
              <div className="imageOuter d-flex flex-column align-items-center">
                <img
                  src="https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg"
                  className="img-fluid"
                  alt="Gambar 1"
                />
                <div className="mt-2">
                  <p className="mb-0">iPhone 15 Promax</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 cusRow">
              <div className="imageOuter d-flex flex-column align-items-center">
                <img
                  src="https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg"
                  className="img-fluid"
                  alt="Gambar 1"
                />
                <div className="mt-2">
                  <p className="mb-0">iPhone 15 Promax</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 cusRow">
              <div className="imageOuter d-flex flex-column align-items-center">
                <img
                  src="https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg"
                  className="img-fluid"
                  alt="Gambar 1"
                />
                <div className="mt-2">
                  <p className="mb-0">iPhone 15 Promax</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Image Model */}
    </>
  );
};
