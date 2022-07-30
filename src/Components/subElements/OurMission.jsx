import React from 'react'
import styled from "styled-components";
import { OURMISSION as data } from '../../utils/constants'
export default function OurMission() {
    const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background-image: url('./images/whyShouldJoin.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 2rem 0;
`;
    const Div = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
   
    
`
    const ChildDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    
`
    const WhyHeading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    color: ${({ theme }) => theme.colors.color};
    width: 50%;
    overflow-y: hidden;
`
    const List = styled.li`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.color};
    padding: 15px 0;
    `
    const UnOrder = styled.ul`
    padding-left: 0 !important;
    `
    const Img = styled.img`
    width: 70%;
    `
    const Para = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.color};
    padding: 20px 0;
    `
    return (
        <>
            <Section>
                <div className="row container">
                    <Div>
                        <ChildDiv>
                            <WhyHeading>Our Mission</WhyHeading>
                            {data.map((curElem, id) => {
                                const { title } = curElem;
                                return (
                                    <Div key={id}>
                                        <UnOrder>
                                            <List>
                                                {title}
                                            </List>
                                        </UnOrder>
                                    </Div>
                                );
                            })}
                        </ChildDiv>
                        <Img src="./images/target.png" alt="target" />
                    </Div>
                    <Div>
                        <Img src="./images/vision.png" alt="target" />
                        <ChildDiv>
                            <WhyHeading>Our Vision</WhyHeading>
                            <Para>
                                To be among the world’s best IT organization which also believes in imbibing rapid growing technical skills among youths apart from serving with best defense based products and software which can help to brighten up the future of the country.
                            </Para>
                        </ChildDiv>
                    </Div>
                </div>
            </Section>
        </>
    )
}
