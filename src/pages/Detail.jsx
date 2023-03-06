// import React, { useState } from "react";
// import Header from "./../components/header/Header";
// import Footer from "./../components/footer/Footer";
// import Index from "./../components/home/Index";
// import { useQuery } from "react-query";
// import { getDetail } from "../api/api";
// import styled from "styled-components";

// function Detail() {
//   const { data } = useQuery("detail", getDetail, {
//     onSuccess: (response) => {
//       setList(response);
//     },
//   });

//   return (
//     <>
//       <Header />
//       <Index />
//       <TitleBox>{item.title}</TitleBox>
//       <LocationBox>{item.location}</LocationBox>
//       <SaveButton>♡</SaveButton>
//       <img src={item.imageUrl} alt="img" />
//       <Footer />
//     </>
//   );
// }

// export default Detail;

// const TitleBox = styled.div``;
// const LocationBox = styled.div``;
// const SaveButton = styled.button`
//   width: 10px;
//   height: 10px;
// `;
