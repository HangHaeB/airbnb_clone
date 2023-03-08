import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignUp from "./SignUp";
import { loginUser, getUsers } from "../../api/api";
import styled from "styled-components";
import { useQueryClient, useMutation } from "react-query";
import { setCookie } from "../../api/cookies";
import moment from "moment";

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
      localStorage.setItem("expiresAt", moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss"));
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
          value={email}
          name="id"
          {...register("userId", {
            required: "아이디를 입력해주세요",
            pattern: {
              value: /^[a-z]+[a-z0-9]{2,19}$/g,
              message: "아이디는 2-19자 사이의 영문자 소문자와 숫자만 입력하세요",
            },
          })}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="이메일을 입력하세요"
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
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

// import React, { useState } from "react";
// import { Content, Title, Button, Allboxli } from "./style";
// import Modal from "./Modal";
// function Card({ state, swichhander, delBtn }) {
//   const [ModalOpen, setModalOpen] = useState(false);
//   const ModalButton = (id) => {
//     setModalOpen(id);
//   };
//   const closeBtn = () => {
//     setModalOpen(false);
//   };
//   return (
//     <Allboxli key={state.id}>
//       <Button onClick={() => swichhander(state.id, state.complete)}>
//         <svg
//           width="12"
//           height="9"
//           viewBox="0 0 12 9"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect
//             x="4.24265"
//             y="8.48528"
//             width="6"
//             height="2"
//             transform="rotate(-135 4.24265 8.48528)"
//             fill="white"
//           />
//           <rect
//             x="2.82843"
//             y="7.07108"
//             width="10"
//             height="2"
//             transform="rotate(-45 2.82843 7.07108)"
//             fill="white"
//           />
//         </svg>
//       </Button>
//       <div onClick={() => ModalButton(state.id)}>
//         <p>작성자 : {state.author}</p>
//         <div>
//           <Title>{state.title}</Title>
//           <Content>{state.contents}</Content>
//         </div>
//       </div>
//       {ModalOpen === state.id && (
//         <Modal
//           setModalopen={setModalOpen}
//           state={state}
//           delBtn={delBtn}
//           closeBtn={closeBtn}
//         />
//       )}
//     </Allboxli>
//   );
// }

// export default Card;

// import styled from "styled-components";
// const Detaillbg = styled.div`
//   background: #f8f8f8;
//   padding: 50px;
//   width: 73.75%;
//   height: calc(100vh - 80px);
//   overflow: hidden;
//   box-sizing: border-box;
// `;
// const TOPbox = styled.div`
//   margin-bottom: 40px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const Tapboxli = styled.li`
//   margin-right: 20px;
//   font-weight: 500;
//   font-size: 20px;
//   cursor: pointer;
//   &:last-child {
//     margin-right: 0;
//   }
// `;
// const Tapboxlink = styled.a`
//   &.Textcolor01 {
//     position: relative;
//     color: #c650f0;
//   }
//   &.Textcolor02 {
//     color: #b7b7b7;
//   }
//   &.Textcolor01::after {
//     position: absolute;
//     content: "";
//     display: block;
//     width: 100%;
//     height: 2px;
//     background: #c650f0;
//     bottom: -5px;
//     left: 0;
//   }
// `;
// const Btnbox = styled.div`
//   overflow-y: scroll;
//   height: 656px;
//   padding: 4px;
//   &::-webkit-scrollbar {
//     width: 1px;
//     background: #f8f8f8;
//   }
// `;
// const Allbox = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   &.block {
//     display: flex;
//   }
//   &.hidden {
//     display: none;
//   }
// `;
// const Allboxli = styled.li`
//   margin-right: 2.12%;
//   margin-top: 28px;
//   background: #ffffff;
//   border: 1px solid #eeeeee;
//   box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   height: 200px;
//   width: 23.4%;
//   padding: 25px;
//   box-sizing: border-box;
//   position: relative;
//   cursor: pointer;
//   &:nth-child(4n) {
//     margin-right: 0;
//   }
//   &:nth-child(-n + 4) {
//     margin-top: 0;
//   }
//   &:hover {
//     border: 1px solid #c650f0;
//   }
//   &.on, .on:hover{
//     background:#f8f8f8;
//     color:#e2e2e2;
//     border: 1px solid #f8f8f8;
//   }
//   &.on > Button{
//     background:#e2e2e2
//   }
// `;

// const Button = styled.button`
//   width: 26px;
//   height: 26px;
//   border-radius: 26px;
//   outline: 0;
//   border: 0;
//   line-height: 24px;
//   position: absolute;
//   right: 20px;
//   top: 20px;
//   cursor: pointer;
//   &:hover {
//     background: #c650f0;
//   }
// `;

// const Title = styled.em`
//   margin-top: 40px;
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 1;
//   display: block;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// `;
// const Nickname = styled.em`
//   line-height: 1;
//   display: block;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   max-width: 150px;
// `;
// const Content = styled.p`
//   line-height: 20px;
//   margin-top: 15px;
//   max-height: 40px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
// `;

// // ----------------------------------여기서부터 오른쪽 등록 관련 css 입니다. ----------------------------------

// const Detailbox = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// const Rightbg = styled.div`
//   width: calc(100% - 73.75%);
//   height: calc(100vh - 80px);
//   background: #fff;
//   display: flex;
//   overflow-y: scroll;
//   box-sizing: border-box;
//   padding: 60px 50px;
//   &::-webkit-scrollbar {
//     width: 1px;
//     background: #fff;
//   }
// `;
// const Rightcenter = styled.form`
//   width: 100%;
// `;
// const Box = styled.div`
//   margin-top: 40px;
//   font-size: 0;
//   width: 100%;
//   &:nth-child(1) {
//     margin-top: 0;
//   }
// `;
// const Label = styled.label`
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 1;
//   margin-bottom: 20px;
//   display: block;
// `;
// const Input = styled.input`
//   width: 100%;
//   height: 50px;
//   background: #f8f8f8;
//   border-radius: 5px;
//   padding: 20px;
//   box-sizing: border-box;
//   border: 0;
//   outline: 0;
//   border: 1px solid #f8f8f8;
//   &::placeholder {
//     color: #e2e2e2;
//     font-family: "Pretendard";
//   }
//   &:focus {
//     border: 1px solid #c650f0;
//   }
// `;
// const Textarea = styled.textarea`
//   width: 100%;
//   height: 300px;
//   background: #f8f8f8;
//   border-radius: 5px;
//   padding: 20px;
//   box-sizing: border-box;
//   border: 0;
//   outline: 0;
//   border: 1px solid #f8f8f8;
//   &::placeholder {
//     color: #e2e2e2;
//     font-family: "Pretendard";
//   }
//   &:focus {
//     border: 1px solid #c650f0;
//   }
// `;
// const RightButton = styled.button`
//   width: 100%;
//   height: 50px;
//   text-align: center;
//   border: 0;
//   outline: 0;
//   background: #c650f0;
//   font-weight: 600;
//   color: #fff;
//   font-family: "Pretendard";
//   border-radius: 5px;
//   margin-top: 30px;
//   cursor: pointer;
// `;

// // -------------------------------------------- 모달 css -------------------------------------
// const Modalbg = styled.div`
//   background: rgba(0, 0, 0, 0.5);
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   margin: auto;
//   z-index: 99999;
// `;
// const Modalcon = styled.div`
//   width: 400px;
//   height: 520px;
//   background: #fff;
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   top: 0;
//   margin: auto;
//   border-radius: 10px;
//   padding: 40px 40px;
//   overflow: hidden;
// `;
// const Modalp = styled.p`
// color:#1d1d1d
// `
// const Modaltitle = styled.em`
//   display: block;
//   font-size: 18px;
//   line-height: 26px;
//   font-weight: 500;
//   margin: 20px 0;
//   border-top: 1px solid #eee;
//   color:#1d1d1d;
//   padding-top: 25px;
// `;
// const Modalbtnwrap = styled.div`
//   position: absolute;
//   right: 40px;
//   bottom: 40px;
//   font-size: 0;
//   display: flex;
//   align-items: center;
// `;
// const Modalbtn1 = styled.button`
//   width: 100px;
//   height: 50px;
//   line-height: 50px;
//   border-radius: 5px;
//   background: #fff;
//   color: #c650f0;
//   border: 1px solid #c650f0;
//   cursor: pointer;
// `;
// const Modalbtn2 = styled.button`
//   width: 100px;
//   height: 50px;
//   line-height: 50px;
//   border-radius: 5px;
//   background: #c650f0;
//   color: #fff;
//   margin-left: 10px;
//   border: 0;
//   cursor: pointer;
// `;
// const Modalbtn3 = styled.button`
//   width: 100px;
//   height: 50px;
//   line-height: 50px;
//   border-radius: 5px;
//   background: #f7f7f7;
//   margin-left: 10px;
//   border: 0;
//   cursor: pointer;
// `;
