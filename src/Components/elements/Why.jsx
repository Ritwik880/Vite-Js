import React from "react";
import styled from "styled-components";
import Card from "../subElements/Card";
import Country from "../subElements/Country";
import Grid from "../subElements/Grid";
import OurAchieve from "../subElements/OurAchieve";
import OurMission from "../subElements/OurMission";
import RatingCard from "../subElements/RatingCard";


const Why = () => {
    const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background: ${({ theme }) => theme.colors.bg};
    padding: 58px 0;
    `;
    const Section = styled.section`
        display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    background-image: url('./images/whyShouldJoin.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    `;
    const Heading = styled.h4`
    font-weight: 700;
    font-size: 50px;
    line-height: 67px;
    text-align: center;
    background: ${({ theme }) => theme.colors.btnGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    `;
    const Para = styled.p`
     font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    `;
    const WhyHeading = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.color};
    width: 50%;
    margin: auto;
    `
    const LoginWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;`;

    const Button = styled.button`
    background: ${({ theme }) => theme.colors.btn};
    border-radius: 6px;
    border: none;
    width: 233px;
    height: 50px;
    font-weight: 500;
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    color: ${({ theme }) => theme.colors.color};

    &::after {
    content: "\2192";
    margin-left: 0.5rem;
    font-size: 1.2rem;
}`;

    const Training = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 900px;
    background-image: url('./images/landingAchieve.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    `
    return (
        <>
            <Wrapper>
                <div className="row container">
                    <Heading data-aos="fade-right">Why Vajre India ?</Heading>
                    <Para data-aos="fade-left">Trusted By Millions Of Learners</Para>
                    <RatingCard />
                    <Card />
                    <LoginWrap>
                        <Button>Enroll now</Button>
                    </LoginWrap>
                </div>
            </Wrapper>
            <Section>
                <div className="row container">
                    <WhyHeading>Why Should You Join Our Learning Community</WhyHeading>
                    <Grid />
                </div>
            </Section>
            <OurMission />
            <OurAchieve />
            <Country />
            <Training>
                <div className="row container">
                    <Head data-aos="fade-left">Join Our Training Programme</Head>
                    <div className="courses">
                        <Course />

                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <Link to='/campus'>
                            <button className='courseBtn'>
                                View all
                            </button>
                        </Link>

                    </div>
                </div>
            </Training>


        </>
    );
};

export default Why;
