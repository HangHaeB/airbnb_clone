import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignUp from "./SignUp";
import { loginUser, getUsers } from "../../api/api";
import styled from "styled-components";
import { useQueryClient, useMutation } from "react-query";
import { setCookie } from "../../api/cookies";

const Login = () => {
  const [signUpModal, setSignUpModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginModal, setLoginModal] = useState(true);

  const queryClient = useQueryClient();
  const mutation = useMutation(loginUser, {
    onSuccess: (response) => {
      queryClient.invalidateQueries("user");
      setCookie("ACCESS_TOKEN", response.headers.authorization);
      setCookie("RT_TOKEN", response.headers.rt_authorization);

      localStorage.setItem("name", response.data.username);
      console.log(response);
    },
    onError: () => {
      alert("로그인정보가 일치하지 않습니다.");
    },
  });

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();
    const loginUser = {
      email: email,
      password: password,
    };
    mutation.mutate(loginUser);
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
      <form onSubmit={handleSubmitButtonClick}>
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
        <button onClick={loginUser}>확인</button>
        <button
          onClick={() => {
            setSignUpModal(!signUpModal);
            // setLoginModal(!loginModal);
          }}
        >
          회원가입 하기
        </button>
      </form>

      <Modal>{signUpModal === true ? <SignUp /> : null}</Modal>
    </div>
  );
};

export default Login;

const Modal = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;
