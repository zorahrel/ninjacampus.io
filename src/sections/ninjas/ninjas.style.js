import React from 'react';
import styled from 'styled-components/macro';
import Soul from '../../components/soul/soul.component';
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
  justify-content: flex-start;
  flex-direction: column;
  padding: 14vh 4vh;
`;

export const NinjasHeader = styled(Wrapper)``;

export const NinjasBody = styled(Wrapper)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 43px;
`;

export const NinjasSoul = styled(Soul)`
  color: #FFFFFF;
  font-weight: 700;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const NinjaTitle = styled.h1`
  margin-left: 50%;
  font-size: 4vh;
  font-weight: 600;
  align-self: flex-start;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    margin-left: 0;
    align-self: center;
  }
`;

export const NinjaAvatar = styled.div`
  background-image: url(${props => props.ninja});
  background-size: cover;
  background-position: center center;
  height: ${p => p.scale * window.innerHeight * .5}px;
  width: ${p => p.scale * window.innerHeight * .5}px;
  border-radius: 50%;
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
  margin-right: 30px;
`;
export const NinjaLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const NinjaLinkImg = styled.img`
  height: 6vh;
`;

export const NinjasFooter = styled(Wrapper)`
  display: flex;
  justify-content: center;
`;

export const TrainingSoul = styled(Soul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cta = styled.h2`
  font-size: 55px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 30px;
    max-width: 100%;
  }
`;

export const ReadySoul = styled(Soul)`
  color: #FFFFFF;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const Text = styled.h3`
  font-size: 25px;
  color: #8762D9;
  text-align: center;
  font-weight: 700;
`;