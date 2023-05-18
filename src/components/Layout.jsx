import React from "react";
import styled from "styled-components";
import bg from '../assets/images/bg.mp4';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  filter: blur(5px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Layout({children}) {
    return (
        <>
            <Div>
                <Video src={bg} autoPlay muted loop />
                {children}
            </Div>
        </>
    );
}