export const PageDetail = () => {
  window.scrollTo(0, 0);
  return (
    <>
      {/* Content */}
      <div className="artContainer">
        <div className="overflowCard">
          <img
            className="phoneImg"
            src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
            alt="..."
          />
          <div className="teksPosition">
            <p className="display-1">iPhone 15 Promax</p>
            <hr />
          </div>
        </div>
      </div>
      {/* Like */}
      <section>
        <div
          className="card-body cardBodyLike"
          style={{ padding: "30px 30px 30px 90px" }}
        >
          <h1 className="card-text">4441 Likes</h1>
          <button className="btn btn-outline">
            {" "}
            <box-icon
              name="heart"
              type="solid"
              style={{ verticalAlign: "middle", marginRight: 10 }}
            />
            Like
          </button>
        </div>
      </section>
      {/* Like */}
      <div className="outerCardTop">
        <div className="cardTop">
          <div
            className="card-body cardBody"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col" style={{ paddingRight: 20 }}>
                    <box-icon name="mobile" />
                  </th>
                  <td scope="col">June, 21 2001</td>
                </tr>
                <tr>
                  <th scope="col">
                    <box-icon type="solid" name="mobile-vibration" />
                  </th>
                  <td scope="col">221g, 8.3mm thickness</td>
                </tr>
                <tr>
                  <th scope="col">
                    <box-icon name="hive" />
                  </th>
                  <td scope="col">iOS 17, up to iOS 17.1.1</td>
                </tr>
                <tr>
                  <th scope="col">
                    <box-icon type="solid" name="category-alt" />
                  </th>
                  <td scope="col">256GB/512GB/1TB storage, no card slot</td>
                </tr>
              </thead>
            </table>
          </div>
          <div
            className="card-body cardBody"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <h1 className="card-text">6,7" inch</h1>
            <h1>
              <box-icon name="mobile-alt" />
            </h1>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Dimension
            </h6>
          </div>
          <div
            className="card-body cardBody"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <h1 className="card-text">48 MP</h1>
            <h1>
              <box-icon name="camera" type="solid" />
            </h1>
            <h6 className="card-subtitle mb-2 text-body-secondary">Camera</h6>
          </div>
          <div
            className="card-body cardBody"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <h1 className="card-text">8GB RAM</h1>
            <h1>
              <box-icon type="solid" name="memory-card" />
            </h1>
            <h6 className="card-subtitle mb-2 text-body-secondary">RAM</h6>
          </div>
          <div
            className="card-body cardBody"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <h1 className="card-text">4441 mAh</h1>
            <h1>
              <box-icon name="battery" type="solid" />
            </h1>
            <h6 className="card-subtitle mb-2 text-body-secondary">Battery</h6>
          </div>
        </div>
      </div>
      {/* Content */}
      {/* Table Content */}
      <div className="tableContainer">
        <h1 className="display-6" style={{ paddingLeft: 20 }}>
          Full Spesifications
        </h1>
        <hr />
        <div className="tableInner table table-borderless">
          <table>
            <tbody>
              <tr>
                <th scope="col" style={{ paddingRight: 20 }}>
                  Network
                </th>
                <td scope="col " style={{ paddingRight: 250 }}>
                  Tecnology
                </td>
                <td scope="col ">GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
              </tr>
              <tr>
                <th scope="col">Launch</th>
                <td scope="col">221g, 8.3mm thickness</td>
                <td scope="col ">GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
              </tr>
              <tr>
                <th scope="col">Body</th>
                <td scope="col">iOS 17, up to iOS 17.1.1</td>
                <td scope="col ">GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
              </tr>
              <tr>
                <th scope="col">Display</th>
                <td scope="col">256GB/512GB/1TB storage, no card slot</td>
                <td scope="col ">GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Table Content */}
      {/* Comments */}
      <section>
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="card text-dark rounded-4">
                <div className="card-body p-4">
                  <h4 className="mb-0">Recent comments</h4>
                  <p className="fw-light mb-4 pb-2">
                    Latest Comments section by users
                  </p>
                  <div className="d-flex flex-start">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                      alt="avatar"
                      width={60}
                      height={60}
                    />
                    <div>
                      <h6 className="fw-bold mb-1">Maggie Marsh</h6>
                      <div className="d-flex align-items-center mb-3">
                        <p className="mb-0">
                          March 07, 2021
                          <span className="badge bg-primary">Pending</span>
                        </p>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-pencil-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-redo-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-heart ms-2" />
                        </a>
                      </div>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="card-body p-4">
                  <div className="d-flex flex-start">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                      alt="avatar"
                      width={60}
                      height={60}
                    />
                    <div>
                      <h6 className="fw-bold mb-1">Lara Stewart</h6>
                      <div className="d-flex align-items-center mb-3">
                        <p className="mb-0">
                          March 15, 2021
                          <span className="badge bg-success">Approved</span>
                        </p>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-pencil-alt ms-2" />
                        </a>
                        <a href="#!" className="text-success">
                          <i className="fas fa-redo-alt ms-2" />
                        </a>
                        <a href="#!" className="link-danger">
                          <i className="fas fa-heart ms-2" />
                        </a>
                      </div>
                      <p className="mb-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-0" style={{ height: 1 }} />
                <div className="card-body p-4">
                  <div className="d-flex flex-start">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp"
                      alt="avatar"
                      width={60}
                      height={60}
                    />
                    <div>
                      <h6 className="fw-bold mb-1">Alexa Bennett</h6>
                      <div className="d-flex align-items-center mb-3">
                        <p className="mb-0">
                          March 24, 2021
                          <span className="badge bg-danger">Rejected</span>
                        </p>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-pencil-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-redo-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-heart ms-2" />
                        </a>
                      </div>
                      <p className="mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure.
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="card-body p-4">
                  <div className="d-flex flex-start">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp"
                      alt="avatar"
                      width={60}
                      height={60}
                    />
                    <div>
                      <h6 className="fw-bold mb-1">Betty Walker</h6>
                      <div className="d-flex align-items-center mb-3">
                        <p className="mb-0">
                          March 30, 2021
                          <span className="badge bg-primary">Pending</span>
                        </p>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-pencil-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-redo-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <i className="fas fa-heart ms-2" />
                        </a>
                      </div>
                      <p className="mb-0">
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem
                        Ipsum is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Comment */}
        <div className="commentSections">
          <div
            className="card-body cardBodyComment"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <h4 className="card-text">Put your comment here...</h4>
            <form action="">
              <div className="mb-3">
                <textarea
                  className="form-control border-black"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-outline-dark btnCustom">
                {" "}
                <box-icon
                  name="send"
                  type="solid"
                  style={{ verticalAlign: "middle", marginRight: 10 }}
                />
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Add Comment */}
      {/* Comments */}
      {/* Add Comment */}
      <div className="commentSections" style={{ backgroundColor: "white" }}>
        <div
          className="card-body cardBodyComment"
          style={{ padding: "30px 30px 30px 30px" }}
        >
          <h4 className="card-text">Watch unboxing video here...</h4>
          <form action="">
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-outline-dark btnCustom">
              {" "}
              <box-icon
                name="send"
                type="solid"
                style={{ verticalAlign: "middle", marginRight: 10 }}
              />
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Add Comment */}
    </>
  );
};
