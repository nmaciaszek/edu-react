import React from "react";
import auth from "./../auth";

export const LandingPage = (props) => {
  return (
    <div>
      LandingPage
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
