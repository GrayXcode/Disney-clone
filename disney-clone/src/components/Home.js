import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let trending = [];
  let newDisney = [];
  let original = [];

  useEffect(() => {
    async function sortMovie() {
      const querySnapshot = await getDocs(collection(db, "movies"));
      querySnapshot.forEach((doc) => {
        console.log('🉐', recommends);
        console.log('🏂', trending);
        switch (doc.data().type) {
          case "recommend":
            recommends = [recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [trending, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            original = [original, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
      });
    }

    sortMovie();

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisney,
        trending: trending,
        original: original,
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
