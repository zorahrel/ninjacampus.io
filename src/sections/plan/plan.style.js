import styled from 'styled-components/macro';
import { SectionWrapper } from '../../common/style.common';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PlanWrapper = styled(SectionWrapper)``;

export const PlanBody = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  position: relative;
`;