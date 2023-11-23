import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const GoogleButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="btn customBtn">
        <GoogleOAuthProvider clientId="640309498273-e1vrr8cdk9u6rg118clii64hki033vc4.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                console.log(credentialResponse.credential);
                const { data } = await axios.post(
                  "https://fhones-web.murafly.my.id/auth/google/callback",
                  {
                    code: credentialResponse.credential,
                  }
                );
                console.log(data, "kredensial");
                localStorage.setItem("Authorization", data);
                navigate("/");
              } catch (error) {
                console.error("Login failed:", error.message);
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};
