import React from "react";
import styled from "styled-components";
import '../styles/Nav.css';
import bg from '../assets/images/bg.mp4';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const Nav = styled.nav`
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`;

const ListPages = styled.ul`
  display: flex;
  gap: 150px;
`;

const Pages = styled.li`
  display: flex;
  gap: 5px;
  list-style: none;
  align-items: center;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 24px;
  color: white;
  background: #00b4d8;
  padding: 30px;
  border: none;
  border-radius: 20px;
`;

export default function Home() {
    return (
        <>
            <Div>
                <Video src={bg} autoPlay muted loop />
                <Nav>
                    <ListPages>
                        <a rel="Clock" href="/clock">
                            <Pages>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="icons">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Relogio
                            </Pages>
                        </a>
                        <a rel="Timer" href="/timer">
                            <Pages>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="icons">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z" />
                                </svg>
                                Temporizador
                            </Pages>
                        </a>
                    </ListPages>
                </Nav>
            </Div>
        </>
    );
}