import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";

import { Demo } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<Demo />);
  const root = createRoot(div);
  root.unmount();
});
