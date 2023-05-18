import React from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";
import Layout from "../../components/Layout";

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Button = styled.button`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 18px;
  color: white;
  background: #00b4d8;
  padding: 20px;
  border: none;
  border-radius: 10px;

  &:hover{
    transform: scale(1.2);
    transition: all 100ms ease-in-out;
    box-shadow: 3px 5px 5px 3px #90e0ef;
  }
`;

export default function Timer() {
    const navigate = useNavigate();

    function goBack() {
        navigate('/');
    }

    return (
        <Layout>
            <div className="blur" />
            <Div>
                <Div>
                    Temporizador
                </Div>
                <Div>
                    <Button
                        type="button"
                        onClick={() => goBack()}
                    >
                        Voltar
                    </Button>
                </Div>
            </Div>
        </Layout>
    );
}