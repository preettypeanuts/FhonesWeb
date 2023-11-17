import { Link } from "react-router-dom";
import { GoogleButton } from "./GoogleButton";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const setValue = (event) => {
    const { name, value } = event.target;
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        `https://fhones-web.murafly.my.id/register`,
        form,
        {
          headers: {
            Authorization: "Bearer " + localStorage.Authorization,
          },
        }
      );
      console.log(data, "RegisterData");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section
        className="h-100 gradient-form loginContainer"
        style={{ backgroundColor: "#eeeeee00" }}
        data-bs-theme="light"
      >
        <div className="container topSpace py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1 loginText">
                          Register to Fhones
                        </h4>
                      </div>
                      <form onSubmit={handleRegister}>
                        <p className="loginText">
                          Please Register to your account
                        </p>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="username"
                            onChange={setValue}
                            id="form2Example11"
                            className="form-control customForm"
                            placeholder="username"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            name="email"
                            onChange={setValue}
                            type="text"
                            id="form2Example22"
                            className="form-control customForm"
                            placeholder="email address"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            name="password"
                            onChange={setValue}
                            type="password"
                            id="form2Example22"
                            className="form-control customForm"
                            placeholder="password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-outline-dark btnCustom"
                            type="sumbit"
                          >
                            Register
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4 ">
                          <p className="mb-0 me-2 loginText">
                            Already have an account?
                          </p>
                          <Link
                            to={"/login"}
                            type="button"
                            className="link-offset-3 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          >
                            Login here
                          </Link>
                        </div>
                        <div className="text-center pt-1 mb-2 pb-1">
                          <GoogleButton />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
