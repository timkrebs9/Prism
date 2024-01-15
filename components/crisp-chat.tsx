"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1bde28ca-d8b2-40f4-83ba-6311b565b3d3");
  }, []);

  return null;
};