import styled from 'styled-components';

export const H3 = styled.h3`
  font-weight: 400;
  font-size: 27px;
  margin-bottom: 80px;
  @media (max-width: 480px) {
    font-size: 5vw;
  }
`;
export const H1 = styled.h1`
  font-weight: 900;
  font-size: 120px;
  @media (max-width: 480px) {
    font-size: 12vw;
    margin-bottom: 15px;
  }
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
  @media (max-width: 480px) {
    font-size: 5vw;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 14vh 4vh;
  @media (max-width: 480px) {
    padding: 4vh 2vh;
  }
`;