import React from 'react'
import styled from 'styled-components'
export default function Country() {
    const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 900px;
    background-image: url('./images/landingAchieve.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    `
    const Heading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;
    color: ${({ theme }) => theme.colors.black};
    padding: 80px 0;
    text-align: center;
    `
    return (
        <>
            <Section>
                <div className="row container">
                    <Heading data-aos="fade-right">Learner’s Across 170+ Countries</Heading>
                    <img src="./images/learnerAcross.png" alt="learnerAcross" />
                </div>
            </Section>
        </>
    )
}
