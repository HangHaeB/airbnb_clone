import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignUp from "./SignUp";
import { loginUser } from "../../api/api";

const Login = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const userInfo = {
    email: "",
    password: "",
  };

  const onSubmitHandler = (e) => {
    const { email, password } = e.target.value;
  };

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    isSubmitting,
  } = useForm();

  // <loginUser email={email} password={password} />;

  return (
    <div>
      <div>
        <input
          type="email"
          value={inputValue.email}
          name="id"
          {...register("userId", {
            required: "아이디를 입력해주세요",
            pattern: {
              value: /^[a-z]+[a-z0-9]{2,19}$/g,
              message:
                "아이디는 2-19자 사이의 영문자 소문자와 숫자만 입력하세요",
            },
          })}
          onChange={(e) => {
            setInputValue({ email: e.target.value });
            console.log(inputValue);
          }}
          placeholder="이메일을 입력하세요"
        />
        <br />
      </div>

      <div>
        <input
          type="password"
          value={inputValue.password}
          name="password"
          onChange={(e) => {
            setInputValue({ password: e.target.value });
            console.log(inputValue);
          }}
          placeholder="비밀번호를 입력하세요"
        />
        <br />
      </div>

      <button onClick={loginUser}>확인</button>
      <br />
      <br />

      <button
        onClick={() => {
          setSignUpModal(!signUpModal);
        }}
      >
        회원가입 하기
      </button>

      <div>{signUpModal === true ? <SignUp /> : null}</div>
    </div>
  );
};

export default Login;
