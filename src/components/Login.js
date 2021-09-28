import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/counter/user";

export const Login = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Pedro",
              age: 22,
              email: "pedro@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout({}));
        }}
      >
        {" "}
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
