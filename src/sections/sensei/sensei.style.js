import React from 'react';
import styled from 'styled-components/macro';
import Soul from '../../components/soul/soul.component';
import InstagramLink from '../../assets/instagram.svg';
import GithubLink from '../../assets/github.svg';
import LinkedinLink from '../../assets/linkedin.svg';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SenseiWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  position: relative;
  justify-content: flex-start;
  flex-direction: column;
  padding: 14vh 4vh;
`;

export const SenseiTitle = styled(Wrapper)``;

export const SenseiBody = styled(Wrapper)`
    display: flex;
    flex-direction: row-reverse;
`;

export const SenseiSoul = styled(Soul)`
    color: #FFFFFF;
    font-weight: 700;
    font-size: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const SenseiSoulBody = styled.div`
`;

export const SenseiName = styled.h1`
    align-self: flex-end;
    font-weight: 700;
    font-size: 80px;
`;

export const SenseiSubTitle = styled.h2`
    font-weight: 700;
    font-size: 30px;
`;

export const SenseiDescription = styled.p`
    font-weight: 300;
    font-size: 30px;
`;

export const SenseiPic = styled.img`
`;

export const SenseiLink = styled.div`
`;