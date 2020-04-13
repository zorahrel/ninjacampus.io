
import styled from 'styled-components/macro';
import Soul from '../../components/soul/soul.component';

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
  @media (max-width: 480px) {
    font-size: 50px;
    align-self: center;
  }
`;

export const SenseiSubTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }
`;
 
export const SenseiDescription = styled.p`
  font-weight: 300;
  font-size: 30px;
  @media (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const SenseiAvatar = styled.img`
  border-radius: 100%;
  height: ${p => p.size}px;
  width: ${p => p.size}px;
`;

export const SenseiLink = styled.div`
`;