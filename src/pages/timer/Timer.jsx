import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";
import Layout from "../../components/Layout";
import mario from '../../assets/audio/audio.wav';
import './Timer.css';

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Container = styled.div`
  background-color:  #e9c56ab0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 100px 250px;
  border-radius: 30px;
`;

const Section = styled.section`
  display: flex;
  gap: 40px;
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
    const [done, setDone] = useState();
    const navigate = useNavigate();

    function goBack() {
        navigate('/');
    }

    function startTimer() {
        const hours = document.getElementById('hour');
        const minutes = document.getElementById('min');
        const seconds = document.getElementById('sec');

        let duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value);

        let display = document.getElementById('timer');
        timer(duration, display);
    }

    function timer(duration, display) {
        let timer = duration;
        let hours, minutes, seconds;

        let interval = setInterval(() => {
            hours = Math.floor((timer / 60) / 60);
            minutes = Math.floor(timer / 60 - (hours * 60));
            seconds = Math.floor(timer % 60);

            console.log(timer);

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.innerHTML = `${hours}:${minutes}:${seconds}`;

            timer -= 1;

            if (timer < 0) {
                display.innerHTML = 'ACABOU O TEMPO';
                clearInterval(interval);
                setDone('ACABOU O TEMPO');
            }
        }, 1000);
    }

    return (
        <Layout>
            <div className="blur" />
            <Div>
                {
                    done ?
                        <Div>
                            <Container>
                                <audio src={mario} autoPlay />
                                <span>ACABOU O TEMPO!!!</span>
                            </Container>
                        </Div>
                        :
                        <Div>
                            <Container>
                                <div id="timer">00:00:00</div>
                                <Section>
                                    <div className="block">
                                        <label>Horas</label>
                                        <input type="number" max="2" min="0" name="hour" id="hour" defaultValue="00" />
                                    </div>
                                    <div className="block">
                                        <label>Minutos</label>
                                        <input type="number" max="59" min="0" name="min" id="min" defaultValue="00" />
                                    </div>
                                    <div className="block">
                                        <label>Segundos</label>
                                        <input type="number" max="59" min="0" name="sec" id="sec" defaultValue="00" />
                                    </div>
                                </Section>
                                <div>
                                    <Button
                                        type="button"
                                        id="btn-start"
                                        onClick={() => startTimer()}
                                    >
                                        Começar
                                    </Button>
                                </div>
                            </Container>
                        </Div>
                }
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