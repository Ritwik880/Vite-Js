import React from 'react'
import styled from "styled-components";
import { JOINDATA as data } from "../../utils/constants";
export default function Grid() {
    const Grid = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: 300px;
    grid-template-columns: 400px 400px;
    text-align: center;
    `;
    const SubGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100px;
`;
    const Img = styled.img`
        width: 30px;
       
    `;
    const CardPara = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.color};
    width: 80%;
    margin: 1rem 0;
    `;
    return (
        <>
            <Grid>
                {data.map((curElem, id) => {
                    const { title, img } = curElem;
                    return (
                        <SubGrid key={id}>
                            <Img src={img} alt="whyCircle" />
                            <CardPara>{title}</CardPara>
                        </SubGrid>
                    );
                })}
            </Grid>
        </>
    )
}
