import React, { FC } from "react";
import ColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.min.css";
import config from "../config";
import { Box } from "@mui/material";
import { HslaRequest, LightingRequest } from "../types";

const colorWheelStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "340px",
  height: "340px",
  borderRadius: "10px",
};

const ColorWheel: FC = () => {
  const onChange = (hue: number) => {
    const hslaRequest: HslaRequest = {
      operation: "hsla",
      h: hue
    };

    fetch(config.LIGHTING_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hslaRequest),
    }).catch((error) => {
      console.log("ERROR", error);
    });
  };

  const onSelect = () => {
    const offRequest: LightingRequest = {
      operation: "off"
    }

    fetch(config.LIGHTING_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(offRequest)
    }).catch((error) => {
      console.log("ERROR", error);
    });
  };

  return (
    <Box style={colorWheelStyle}>
      <ColorPicker onChange={onChange} onSelect={onSelect} />
    </Box>
  );
};

export default ColorWheel;
