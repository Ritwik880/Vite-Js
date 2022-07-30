import React from 'react'
import styled from "styled-components";
export default function OurAchieve() {
    const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 750px;
    background-image: url('./images/landingAchieve.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    `
    const Heading = styled.h1`
    padding: 60px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    `
    const Div = styled.div`
        display: flex;
        gap: 4rem;
        align-items: center;
    `
    const ChildDiv = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
    `
    const SubHeading = styled.h5`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 64px;
    color: ${({ theme }) => theme.colors.black};
        
    `
    const Para = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.black};  
     `
    const SubPara = styled.p`
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    padding: 4rem 0;
    color: ${({ theme }) => theme.colors.black}; 
    `
    const LoginWrap = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
    `

    const Button = styled.button`
    background: ${({ theme }) => theme.colors.btn};
    border-radius: 6px;
    border: none;
    width: 233px;
    height: 50px;
    font-weight: 500;
    font-size: 17px;
    line-height: 29px;
    color: ${({ theme }) => theme.colors.color};
    margin-top: 40px;
        
    `
    return (
        <>
            <Section>
                <div className="row container">
                    <Heading data-aos="fade-left">Our Achievers</Heading>
                    <Div>
                        <img src="./images/achieve.png" alt="achieve" />
                        <ChildDiv>
                            <SubHeading data-aos="fade-right">Harshitha Sharma</SubHeading>
                            <SubPara data-aos="fade-left">Currently placed in IBM</SubPara>
                            <Para data-aos="fade-right">I completely enjoyed the Python Internship from Vajre India. The one thing which I liked the most about this internship is that we got to learn how to actually implement the skills practically rather than just learning the theoretical parts. Live projedct session made it very interesting and worthy. </Para>
                            <LoginWrap>
                                <Button>Enroll now</Button>
                            </LoginWrap>
                        </ChildDiv>
                    </Div>
                </div>
            </Section>
        </>
    )
}
