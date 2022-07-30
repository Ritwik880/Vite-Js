import React from "react";
import styled from "styled-components";
import { WHYDATA as data } from "../../utils/constants";
export default function RatingCard() {
    const RatingCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
   `;
    const Div = styled.div`
  padding: 60px 0;
  `;
    const SubHeading = styled.h6`
    font-weight: 600;
  font-size: 48.7805px;
  line-height: 57px;
  text-align: center;
  color: ${({ theme }) => theme.colors.btn};
  `;
    const SubPara = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 29px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
   `;
    return (
        <>
            <RatingCard>
                {data.map((curElem, id) => {
                    const { rank, desc } = curElem;
                    return (
                        <Div className="col-lg-3 col-md-12" key={id}>
                            <SubHeading>{rank}</SubHeading>
                            <SubPara>{desc}</SubPara>
                        </Div>
                    );
                })}
            </RatingCard>
        </>
    );
}
