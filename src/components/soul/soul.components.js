import React, { useEffect, useRef } from 'react';

import {
  SoulWrapper,
  SoulCanvas
} from './soul.style';
import SimplexNoise from 'simplex-noise';
import paper from 'paper';
import Util from '../../common/util.common';

function Soul({children, scale = 1, size = 500 * scale, ...props}) {
  const SoulRef = useRef(null);
  useEffect(() => {
    initCanvas();
  } );
  const initCanvas = () => {
    const canvas = SoulRef.current;
    paper.setup(canvas);
    const segments = Math.round(6 * scale) + 1;
    const radius = size/2 * .8;
    const noiseScale = (Math.random() * 1000 + 300) / scale; // speed
    const noiseRange = 20; // range of distortion

    const polygon = new paper.Path.RegularPolygon(
      new paper.Point(size/2, size/2),
      segments,
      radius
    );
    polygon.fillColor = '#8762D9';
    polygon.smooth();
    const group = new paper.Group([polygon]);
    group.applyMatrix = false;
    
    const noiseObjects = polygon.segments.map(() => new SimplexNoise());
    let bigCoordinates = [];
    
    paper.view.onFrame = event => {
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