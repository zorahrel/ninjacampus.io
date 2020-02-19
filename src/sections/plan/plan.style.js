import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PlanWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 14vh 4vh;
`;

export const PlanBody = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  position: relative;
`;

export const H3 = styled.h3`
  font-size: 27px;
  margin-bottom: 80px;
`;
export const H1 = styled.h1`
  font-weight: 900;
  font-size: 120px;
`;

export const P = styled.p`
  font-size: 34px;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 95%;
`;