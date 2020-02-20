import React from 'react';
import styled from 'styled-components/macro';
import Soul from '../../components/soul/soul.components';
import InstagramLink from '../../assets/instagram.svg';
import GithubLink from '../../assets/github.svg';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NinjasWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  padding: 14vh 4vh;
`;

export const NinjasHeader = styled(Wrapper)``;

export const NinjasBody = styled(Wrapper)`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
  margin-top: 43px;
`;

export const NinjasSoul = styled(Soul)`
  color: #FFFFFF;
  font-weight: 900;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

export const NinjaTitle = styled.h1`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;
`;

export const NinjaAvatar = styled.img`
  border-radius: 50%;
  width: 20vh;
  height: 20vh;
`;

export const NinjaLink = ({ type, props }) => {
  let link_img = '';
  switch (type) {
    case 'instagram':
      link_img = InstagramLink;
      break;
    case 'github':
      link_img = GithubLink;
      break;
    default:
      break;
  }
  return <NinjaLinkWrapper {...props}>
    <NinjaLinkImg src={link_img} />
  </NinjaLinkWrapper>
};

export const NinjaLinkWrapper = styled.a`
  margin: 0 15px;
`;
export const NinjaLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NinjaLinkImg = styled.img`
  height: 4vh;
`;

export const H3 = styled.h3`
  font-weight: 400;
  font-size: 27px;
  margin-bottom: 80px;
`;

export const H1 = styled.h1`
  font-weight: 900;
  font-size: 120px;
`;

export const B = styled.b`
  font-size: 34px;
  font-weight: bold;
`;
export const P = styled.p`
  font-size: 34px;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 95%;
`;