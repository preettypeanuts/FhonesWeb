import axios from "axios";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import YoutubeAPIExample from "./YoutubeApi";
import NewsComponent from "./NewsApi";

export const PageDetail = () => {
  const [form, setForm] = useState({
    comment: "",
  });
  const [comment, setComment] = useState([]);
  const [video, setVideo] = useState({});
  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id, 'iiiii');
  const fillValue = (event) => {
    const { name, value } = event.target;
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
    console.log(name, value);
  };
  // console.log(form);
  const handleValue = async () => {
    // event.preventDefault();
    try {
      const { data } = await axios.post(
        `
        https://fhones-web.murafly.my.id/devices/${id}/comments
      `,
        form,
        {
          headers: {
            Authorization: "Bearer " + localStorage.Authorization,
          },
        }
      );
      setForm(data);
      console.log(data, "datacommnet");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function receiveData() {
      try {
        const { data } = await axios.get(`
        https://fhones-web.murafly.my.id/brands/${id}/detail
          `);
        // console.log(data.detailSpec[6].specifications[0].value);
        // console.log(data.detailSpec);

        //  data.detailSpec[2].specifications[0].value = dimensions
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    receiveData();
  }, []);

  useEffect(() => {
    async function getComment() {
      try {
        const { data } = await axios.get(
          `
          https://fhones-web.murafly.my.id/devices/${id}/comments 
        `,
          {
            headers: {
              Authorization: "Bearer " + localStorage.Authorization,
            },
          }
        );
        console.log(data);
        setComment(data);
      } catch (error) {
        console.log(error);
      }
    }
    getComment();
  }, []);

  useEffect(() => {
    console.log(id, "idnya");
    async function getVideo() {
      try {
        const response = await axios.request({
          url: `https://youtube-v2.p.rapidapi.com/video/search?query=${id}`,
          method: "GET",
          params: {
            query: id,
          },
        });
        console.log(response.data, "respons");
        setVideo(response.data); // Menggunakan response.data untuk mengatur data video

        // Mengatur nilai videoSrc dengan URL video yang diperoleh dari respons
        setVideoSrc(`https://www.youtube.com/embed/${response}`);
      } catch (error) {
        console.error(error);
      }
    }
    getVideo();
  }, [id]);

  const [videoSrc, setVideoSrc] = useState("");
  
  const [destroy, setDestroy] = useState("");

  useEffect(() => {
    async function deleteComment() {
      try {
        const { data } = await axios.delete(
          `
          https://fhones-web.murafly.my.id/devices/${id}/comments 
        `,
          {
            headers: {
              Authorization: "Bearer " + localStorage.Authorization,
            },
          }
        );
        setDestroy(data)
      } catch (error) {
        console.log(error);
      }
    }
    deleteComment()
  }, []);



  return (
    <>
      <div className="artContainer">
        <div className="overflowCard">
          <img className="phoneImg" src={data.img} alt="phone" />
          <div className="teksPosition">
            <p className="display-1">{data.name}</p>
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
                  <td scope="col">
                    {data.detailSpec &&
                      data.detailSpec[1].specifications[0].value}
                  </td>
                </tr>
                <tr>
                  <th scope="col">
                    <box-icon type="solid" name="mobile-vibration" />
                  </th>
                  <td scope="col">
                    {data.detailSpec &&
                      data.detailSpec[2].specifications[0].value}
                  </td>
                </tr>
                <tr>
                  <th scope="col">
                    <box-icon name="hive" />
                  </th>
                  <td scope="col">
                    {data.detailSpec &&
                      data.detailSpec[4].specifications[0].value}
                  </td>
                </tr>
                <tr>
                  <th scope="col">
                    <box-icon type="solid" name="category-alt" />
                  </th>
                  <td scope="col">
                    {data.detailSpec &&
                      data.detailSpec[5].specifications[0].value}
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div
            className="card-body cardBody"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <h1 className="card-text">
              {data.detailSpec &&
                data.detailSpec[3].specifications[1].value.split(",")[0].trim()}
            </h1>
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
            <h1 className="card-text">
              {data.detailSpec &&
                data.detailSpec[6].specifications[0].value.split(",")[0].trim()}
            </h1>
            <h1>
              <box-icon name="camera" type="solid" />
            </h1>
            <h6 className="card-subtitle mb-2 text-body-secondary">Camera</h6>
          </div>
          <div
            className="card-body cardBody"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <h1 className="card-text">
              {data.detailSpec &&
                data.detailSpec[5].specifications[1].value.split(",")[0].trim()}
            </h1>
            <h1>
              <box-icon type="solid" name="memory-card" />
            </h1>
            <h6 className="card-subtitle mb-2 text-body-secondary">Storage</h6>
          </div>
          <div
            className="card-body cardBody"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <h1 className="card-text">
              {data.detailSpec &&
                data.detailSpec[11].specifications[0].value
                  .split(",")[0]
                  .trim()}
            </h1>
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
          <p>{data.descriptions}</p>
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

      {/*  */}
      <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="card text-dark rounded-4">
              <div className="card-body p-4">
                <h4 className="mb-0">Recent comments</h4>
                <p className="fw-light mb-4 pb-2">
                  Latest Comments section by users
                </p>
                <div className="card-body p-4">
                  <div className="d-flex flex-start">
                    <div>
                      {comment?.map((el) => {
                        return (
                          <>
                            <h6 className="fw-bold mb-1">
                              {el?.User.username}
                            </h6>
                            <div className="d-flex align-items-center mb-3">
                              <p className="mb-0">
                                {new Date(el.createdAt).toLocaleDateString(
                                  "ID-Id"
                                )}
                                <span className="badge bg-danger">
                                  {el.deviceId}
                                </span>
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
                            <p className="mb-0">{el.comment}</p>
                            <hr style={{ minWidth: "111vh" }} />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <section>
        <div className="commentSections">
          <div
            className="card-body cardBodyComment"
            style={{ padding: "30px 30px 30px 30px" }}
          >
            <h4 className="card-text">Put your comment here...</h4>
            <form onSubmit={handleValue}>
              <div className="mb-3">
                <textarea
                  onChange={fillValue}
                  name="comment"
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
      </section>
      {/* Comments */}

      {/* YT */}
      <div className="commentSections">
        <div
          className="card-body cardBodyComment"
          style={{ padding: "30px 30px 30px 30px" }}
        >
          <iframe
            width="1007"
            height="615"
            src="https://www.youtube.com/embed/bx1rXf-fsNM?si=q8KxYCJur3GqkzXr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-outline-dark btnCustom">
              Search
            </button>
          </form>
        </div>
      </div>
      <NewsComponent />
      {/* YT */}
    </>
  );
};
