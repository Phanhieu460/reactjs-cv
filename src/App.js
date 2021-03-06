import React from "react";
import styled from "styled-components";
import logo from "./assets/image/anh.jpg";
import { Phone, Email, Directions, DateRange } from "@styled-icons/material";
import { GenderMale } from "@styled-icons/bootstrap";
import { Information } from "@styled-icons/remix-line";
import { Education, Target } from "@styled-icons/zondicons";

const CV = styled.div`
  max-width: 700px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
`;

const LeftCV = styled.div`
  width: 30%;
  height: 100%;
  background: #b4ffff;
`;
const RightCV = styled.div`
  width: 70%;
  height: 100%;
  background: #4bacb8;
`;
const Content = styled.div`
  padding: 10px;
`;
const LeftImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  background-image: url(${logo});
  margin: 0 auto;
`;
const LeftTitle = styled.p`
  color: #000000;
  font-weight: bold;
  border-bottom: 1px solid red;
`;
const LeftSpan = styled.span`
  font-size: 14px;
  color: 263238;
  display: flex;
  padding-top: 5px;
`;
const RightTitle = styled.p`
  font-size: 16px;
  color: #000000;
  font-weight: bold;
  border-bottom: 1px solid red;
`;
const RightSpan = styled.span`
  font-size: 14px;
  color: 263238;
  display: flex;
  padding-top: 5px;
  padding: 0px 10px;
`;
const IconPhone = styled(Phone)`
  color: #ff1744;
  margin-right: 3px;
`;
const IconEmail = styled(Email)`
  color: #ff1744;
`;
const IconMale = styled(GenderMale)`
  color: #ff1744;
  margin-right: 3px;
`;
const IconAddress = styled(Directions)`
  color: #ff1744;
  margin-right: 3px;
`;
const IconDate = styled(DateRange)`
  color: #ff1744;
  margin-right: 3px;
`;
const IconInformation = styled(Information)`
  color: #ff1744;
  margin-right: 3px;
`;
const IconEducation = styled(Education)`
  color: #ff1744;
  margin-right: 3px;
`;
const IconTarget = styled(Target)`
  color: #ff1744;
  margin-right: 3px;
`;
const Name = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

const App = () => {
  return (
    <>
      <CV>
        <LeftCV>
          <LeftImg />
          <Name>Phan B?? Hi???u</Name>
          <Content>
            <LeftTitle>
              <IconInformation size="20" />
              TH??NG TIN LI??N H???
            </LeftTitle>
            <LeftSpan>
              <IconDate size="20" /> 13/12/2000
            </LeftSpan>
            <LeftSpan>
              <IconMale size="20" /> Nam
            </LeftSpan>
            <LeftSpan>
              <IconPhone size="20" /> 0981042460
            </LeftSpan>
            <LeftSpan>
              <IconEmail size="24" /> phanbahieu460@gmail.com
            </LeftSpan>
            <LeftSpan>
              <IconAddress size="24" /> Tam D????ng - V??nh Ph??c{" "}
            </LeftSpan>
          </Content>
        </LeftCV>
        <RightCV>
          <Content>
            <RightTitle>
              <IconTarget size="24" />
              M???C TI??U NGH??? NGHI???P
            </RightTitle>
            <RightSpan>
              N??ng cao c??c k??? n??ng chuy??n m??n, ???????c h???c h???i nh???u h??n v??? ReactJS.
              Trau d???i ki???n th???c ????? ph??t tri???n v?? ph??t huy n??ng l???c c???a b???n th??n
              ????? c???ng hi???n cho c??ng ty
            </RightSpan>
            <RightTitle>
              <IconEducation size="24" />
              H???C V???N
            </RightTitle>
            <RightSpan>10/2018-01/2023</RightSpan>
            <RightSpan>?????i H???c ??i???n L???c.</RightSpan>
            <RightSpan>Chuy??n Ng??nh: C??ng Ngh??? Ph???n M???m</RightSpan>
          </Content>
        </RightCV>
      </CV>
    </>
  );
};

export default App;
