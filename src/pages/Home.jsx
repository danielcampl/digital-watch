import React from "react";
import styled from "styled-components";

import '../styles/Home.css';
import Avatar from '../assets/images/avatar.png';
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: relative;
`;

const Img = styled.img`
  position: relative;
`;

const Div = styled.div`
  margin-top: 257px;
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

  &:hover{
    transform: scale(1.2);
    transition: all 100ms ease-in-out;
    box-shadow: 3px 5px 5px 3px #90e0ef;
  }
`;

export default function Home() {
    return (
        <Layout>
            <Div>
                <Nav>
                    <ListPages>
                        <Link to="/clock">
                            <Pages>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="icons">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Relogio
                            </Pages>
                        </Link>
                        <Link to="/timer">
                            <Pages>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>
                                Temporizador
                            </Pages>
                        </Link>
                    </ListPages>
                </Nav>
                <Img src={Avatar} />
            </Div>
        </Layout>
    );
}