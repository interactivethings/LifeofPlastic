import React from "react";
import { GroundStyle, SkyStyle } from "./styles/PlasticStyles";

export const GarbageBackground: React.FC = () => {
  return (
    <div
      style={{
        width: "1050px",
        left: 0,
        height: "4028px",
        position: "absolute",
        zIndex: -3,
      }}
    >
      <SkyStyle />
      <GroundStyle />
    </div>
  );
};
