export const Login = () => {
  return (
    <>
      <section
        className="h-100 gradient-form loginContainer"
        style={{ backgroundColor: "#eeeeee00" }}
        data-bs-theme="light"
      >
        <div className="container topSpace py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1 loginText">
                          Login to Fhones
                        </h4>
                      </div>
                      <form>
                        <p className="loginText">
                          Please login to your account
                        </p>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control customForm"
                            placeholder="email address"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control customForm"
                            placeholder="password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-outline-dark btnCustom"
                            type="button"
                          >
                            Log in
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4 ">
                          <p className="mb-0 me-2 loginText">
                            Don't have an account?
                          </p>
                          <a type="button" className="link-offset-3 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Create new
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
