import styled from 'styled-components';

export const Shape = styled.div`
  background: url(${require('../../assets/shape.svg')}) no-repeat center;
  position: absolute;
  min-width: 350px;
  min-height: 350px;
`;

export const SoulWrapper = styled.div`
  position: relative;
  overflow: visible;
  height: ${p => p.size}px;
  width: ${p => p.size}px;
  z-index: 0;
`;

export const SoulCanvas = styled.canvas`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
`;