import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PhoneModel = () => {
  window.scrollTo(0, 0);

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function receiveData() {
      try {
        const { data } = await axios.get(`
        https://fhones-web.murafly.my.id/brands/${id}/devices
          `);
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    receiveData();
  }, []);

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
          <p className="display-1 displayCustom customtext">Brand Units</p>
        </div>
      </section>
      {/* Image */}

      {/* Image Model */}
      <section className="" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row">
            {data.map((model) => {
              return (
                <>
                  <div className="col-md-3 mb-3 cusRow">
                    <div className="imageOuter d-flex flex-column align-items-center">
                      <Link
                        to={`device-detail/${model.id}`}
                        value={model.id}
                        className="link-underline-opacity-0link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-dark"
                      >
                        <img
                          src={model.img}
                          className="img-fluid"
                          alt="Gambar 1"
                        />
                        <div className="mt-2">
                          <p className="mb-0">{model.name}</p>
                        </div>
                      </Link>
                      {/* <button value={model.id} className="btn btn-outline-dark btnCustom">Detail</button> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* Image Model */}
    </>
  );
};
