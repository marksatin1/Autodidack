"use client";

import { useState, ReactNode } from "react";

// LEVERS
const tiltEffectSettings = {
  max: 25, // max tilt rotation (degrees (deg))
  perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale: 1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  easing: "cubic-bezier(.03,.98,.52,.99)", // easing (transition-timing-function) of the enter/exit transition
};

export default function CardTilt({ children }: { children: ReactNode }) {
  const [glareXY, setGlareXY] = useState<number[]>([0, 0]);

  // -------------------- //
  // https://codepen.io/Coding_Journey/pen/RwGzqgJ
  // -------------------- //

  function handleMouseEnter(e: any) {
    setTransition(e);
  }

  function handleMouseMove(e: any) {
    const card = e.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    setGlareXY([mouseX / cardWidth, mouseY / cardHeight]);

    const rotateXUncapped = (+1 * tiltEffectSettings.max * mouseY) / (cardHeight / 2);
    const rotateYUncapped = (-1 * tiltEffectSettings.max * mouseX) / (cardWidth / 2);
    const rotateX =
      rotateXUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateXUncapped > tiltEffectSettings.max
          ? tiltEffectSettings.max
          : rotateXUncapped;
    const rotateY =
      rotateYUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateYUncapped > tiltEffectSettings.max
          ? tiltEffectSettings.max
          : rotateYUncapped;

    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  }

  function setTransition(e: any) {
    const card = e.currentTarget;
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
    }, tiltEffectSettings.speed);
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}
