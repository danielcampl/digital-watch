import React from "react";
import styled from "styled-components";
import '../styles/Nav.css';

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
`;

const Nav = styled.nav``;

const ListPages = styled.ul`
  display: flex;
  gap: 50px;
`;

const Pages = styled.li`
  display: flex;
  gap: 3px;
  list-style: none;
  align-items: center;
`;

export default function Navbar() {
    return (
        <Div>
            <Nav>
                <ListPages>
                    <a rel="Clock" href="/">
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
    );
}