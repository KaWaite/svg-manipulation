import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust
  //   TopAppBarActionItem
} from "@rmwc/top-app-bar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import Svg from "../Svg";

export default function TopBar() {
  return (
    <>
      <TopAppBar dense>
        <TopAppBarRow>
          <TopAppBarSection>
            <Svg />
            <TopAppBarTitle>uPlay</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  );
}
