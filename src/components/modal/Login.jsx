import React, { useState } from "react";
import { loginUser, getUsers } from "../../api/api";
import styled from "styled-components";
import { useQueryClient, useMutation } from "react-query";
import { setCookie } from "../../api/cookies";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f1096a",
        darker: "#940060",
      },
    },
  });

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

  return (
    <div>
      <form onSubmit={handleSubmitButtonClick}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CloseButton
              onClick={() => {
                props.setLoginModal(false);
              }}
            >
              X
            </CloseButton>
            <LoginTitle>로그인</LoginTitle>
            <Typography component="h1" variant="h5" sx={{ mt: 4, mb: 3 }}>
              항해비앤비에 오신 것을 환영합니다.
            </Typography>
            <TextField
              label="이메일을 입력해주세요"
              name="email"
              value={email}
              autoComplete="email"
              margin="normal"
              autoFocus
              fullWidth
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <TextField
              label="비밀번호를 입력해주세요"
              type="password"
              name="password"
              value={password}
              autoComplete="current-password"
              fullWidth
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              로그인하기
            </Button>
          </Container>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default Login;

const CloseButton = styled.button`
  background-color: white;
  font-size: 20px;
`;

const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  border-bottom: solid 1px black;
`;
