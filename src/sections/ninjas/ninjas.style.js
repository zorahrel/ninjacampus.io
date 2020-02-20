import styled from 'styled-components';
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

export const NinjasHeader = styled(Wrapper)`
  display: flex;
`;

export const NinjasBody = styled(Wrapper)`
    display: flex;
    justify-content: space-around;

    margin-top: 43px;
    margin-left: 83px;
    margin-right: 83px;
`;

export const NinjasSoul = styled(Soul)`
  color: #FFFFFF;
  font-weight: 900;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: 200px;
`;

export const NinjaTitle = styled.h1`
    align-self: flex-end;
    display: flex;
    flex-direction: row-reverse;
`;

export const NinjaAvatar = styled.img`
    align-self: flex-start;
    border-radius: 50%;
    width: 70%;
    height: 70%;
`;

export const NinjaLinks = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    margin-top: 20px;
`;

export const Instagram = styled.img.attrs({ src: InstagramLink })`
    height: 50%;
`;

export const Github = styled.img.attrs({ src: GithubLink})`
    height: 50%;
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