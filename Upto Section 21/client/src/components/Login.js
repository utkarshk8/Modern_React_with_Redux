/*ClientID:
1051783327434 - skpctfuninnc71k3a3a34eke319m98an.apps.googleusercontent.com;*/
import React, { useEffect, useState } from "react";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1051783327434-skpctfuninnc71k3a3a34eke319m98an.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          const status = auth.isSignedIn.get();
          setIsSignedIn(status);
          auth.isSignedIn.listen(() => {
            setIsSignedIn(auth.isSignedIn.get());
          });
        });
    });
  }, []);

  return isSignedIn ? <div>Signed In</div> : <div>Not Signed in</div>;
};

export default Login;
