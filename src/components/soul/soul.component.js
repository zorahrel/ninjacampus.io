import React, { useEffect, useRef } from 'react';

import {
  SoulWrapper,
  SoulCanvas
} from './soul.style';
import SimplexNoise from 'simplex-noise';
import paper from 'paper';
import Util from '../../common/util.common';

export let stop = false;
export const setStop = (flag) => stop = flag;
window.set = setStop;

function Soul({ children, color='#8762D9', scale, size, ...props }) {
  const SoulRef = useRef(null);
  scale = scale || 1
  size = scale * window.innerHeight*.5;

  useEffect(() => {
    initCanvas();
  }, []);

  const initCanvas = () => {
    const canvas = SoulRef.current;
    paper.setup(canvas);
    const segments = Math.round(6 * scale) + 1;
    const radius = size/2 * .8;
    const noiseScale = (Math.random() * 1000 + 300) ^ scale; // speed
    const noiseRange = 20 * 1^(size/100); // range of distortion

    const polygon = new paper.Path.RegularPolygon(
      new paper.Point(size/2, size/2),
      segments,
      radius
    );
    polygon.fillColor = color;
    polygon.smooth();
    const group = new paper.Group([polygon]);
    group.applyMatrix = false;
    
    const noiseObjects = polygon.segments.map(() => new SimplexNoise());
    let bigCoordinates = [];
    
    paper.view.onFrame = event => {
      if (props.stop || stop) return;
  
      // first get coordinates of large circle
      if (bigCoordinates.length === 0) {
        polygon.segments.forEach((segment, i) => {
          bigCoordinates[i] = [segment.point.x, segment.point.y];
        });
      }

      // calculate noise value for each point at that frame
      polygon.segments.forEach((segment, i) => {
        const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
        const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);

        const distortionX = Util.map(noiseX, -1, 1, -noiseRange, noiseRange);
        const distortionY = Util.map(noiseY, -1, 1, -noiseRange, noiseRange);

        const newX = bigCoordinates[i][0] + distortionX;
        const newY = bigCoordinates[i][1] + distortionY;

        segment.point.set(newX, newY);
      });

      polygon.smooth();
    };
  }

  return <SoulWrapper size={size} {...props}>
    <SoulCanvas ref={SoulRef} width={size} height={size}></SoulCanvas>
    {children}
  </SoulWrapper>;
}

export default Soul;