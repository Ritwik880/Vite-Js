import React from 'react'
import styled from 'styled-components'
import Why from './elements/Why'
const Home = () => {
    const Wrapper = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./images/landingBanner.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    `
    const Heading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: ${({ theme }) => theme.colors.color};`

    const Para = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.color};
    padding: 37px 0;`

    const Button = styled.button`
    width: 233px;
    height: 50px;
    background: ${({ theme }) => theme.colors.color};
    border-radius: 6px;
    border: none;
    font-weight: 500;
    font-size: 17px;
    line-height: 29px;
    color: #4042E2;`

    const LoginWrap = styled.div`
    display: flex;`

    const Img = styled.img`
    margin-left: 64px;
    width: 380px;`

    return (
        <>
            <Wrapper>
                <div className="row container">
                    <div className="col-lg-6 col-md-12">
                        <div className="landingText">
                            <Heading data-aos="fade-right">Great platform to learn earn and grow</Heading>
                            <Para data-aos="fade-left">Training by india’s proficient innovators and retierd scientists to get an amazing kick start of your career</Para>
                            <LoginWrap>
                                <Button data-aos="fade-right">Get started</Button>
                            </LoginWrap>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Img data-aos="fade-left" src="./images/landingRight.png" alt="target" />

                    </div>
                </div>
            </Wrapper>
            <Why />
        </>
    )
}

export default Home