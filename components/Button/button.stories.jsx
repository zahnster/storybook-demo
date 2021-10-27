import React from "react";

export default {
  title: "Components/Button",
};

const ControlButton = (args) => <button>{args.label}</button>;

export const Base = ControlButton.bind({});
Base.args = {
  label: "Fake button",
};
