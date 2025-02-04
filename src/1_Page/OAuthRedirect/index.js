import React from "react";
import useLogin from "../../3_Entity/Account/useLogin";
const OAuthRedirect = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const [serverState] = useLogin(
    queryParams.get("code"),
    queryParams.get("state")
  );

  return <div>Authenticating...</div>;
};

export default OAuthRedirect;
