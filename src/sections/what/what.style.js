import styled from 'styled-components/macro';
import { SectionWrapper } from '../../common/style.common';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const WhatWrapper = styled(SectionWrapper)``;

export const WhatBody = styled(Wrapper)`
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