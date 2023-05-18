import React from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";
import Layout from "../components/Layout";

const Div = styled.div`
  position: relative;
`;

const Button = styled.button``;


export default function Clock() {
    const navigate = useNavigate();

    function goBack() {
        navigate('/');
    }

    return (
        <Layout>
            <Div>
                <Div>
                    Relogio
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