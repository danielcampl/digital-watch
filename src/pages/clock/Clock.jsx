import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";
import Layout from "../../components/Layout";
import './Clock.css';

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Span = styled.span``;

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


export default function Clock() {
    const [time, setTime] = useState([]);
    const navigate = useNavigate();

    function goBack() {
        navigate('/');
    }

    function formatTime(time) {
        const timeString = String(time);
        const isValid = timeString.length === 2;

        if (isValid) {
            return time;
        }

        const newTime = timeString.padStart(2, 0);
        return newTime;
    }

    function currentTime() {
        const dateTime = new Date();
        const horas = dateTime.getHours();
        const minutos = dateTime.getMinutes();
        const segundos = dateTime.getSeconds();

        return({
          horas: formatTime(horas),
          minutos: formatTime(minutos),
          segundos: formatTime(segundos),
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const current = currentTime();
            setTime(current);
            // console.log({current});
        }, 1000);

        return () => clearInterval(interval);
    },[]);

    return (
        <Layout>
            <Div>
                <div className="relogio">
                    <div>
                        <Span id="horas">{time?.horas}</Span>
                        <Span className="tempo">Hrs</Span>
                    </div>
                    <div>
                        <Span id="minutos">{time?.minutos}</Span>
                        <Span className="tempo">Min</Span>
                    </div>
                    <div>
                        <Span id="segundos">{time?.segundos}</Span>
                        <Span className="tempo">Sec</Span>
                    </div>
                </div>
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