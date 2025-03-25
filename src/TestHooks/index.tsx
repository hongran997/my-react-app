// Test Component
import TestUseFirstRender from "./TestUseFirstRender";
import TestUseTimeout from "./TestUseTimeout";
import TestUseHover from "./TestUseHover";
import TestUseDebounce from "./TestUseDebounce";
import TestUseUpdateEffect from "./TestUseUpdateEffect";
import TestUseCountDown from "./TestUseCountDown";
import TestUseRequest from "./TestUseRequest";
import { Fragment } from "react";

export default function TestHooks() { 
  return (
    <Fragment>
      <TestUseFirstRender />
      <hr />
      <TestUseTimeout />
      <hr />
      <TestUseHover />
      <hr />
      <TestUseDebounce />
      <hr />
      <TestUseUpdateEffect />
      <hr />
      <TestUseRequest />
      <hr />
      <TestUseCountDown />
      <hr />
    </Fragment>
  )
}