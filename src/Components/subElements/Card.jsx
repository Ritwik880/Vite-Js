import React from 'react'
import styled from 'styled-components'
import { CARDDATA as cardData } from '../../utils/constants'


export default function Card() {
    const Card = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    `
    const CardBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 336px;
    width: 250px;
    background: ${({ theme }) => theme.colors.cardBox};
    border-radius: 13.5135px;
    color: ${({ theme }) => theme.colors.color};
    `
    const CardTitle = styled.h5`
      font-size: 1.8rem;
      text-align: center;
  `
    const CardPara = styled.p`
        font-size: 1.7rem;
    `
    return (
        <>
            <Card>
                {
                    cardData.map((curElem, id) => {
                        const { title, desc } = curElem;
                        return (
                            <CardBox data-aos="fade-left" key={id}>
                                <CardTitle>
                                    {title}
                                </CardTitle>
                                <CardPara>
                                    {desc}
                                </CardPara>
                            </CardBox>
                        )
                    })
                }
            </Card>
        </>
    )
}
