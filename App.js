import { NativeBaseProvider } from "native-base";
import React from "react";
import { Screens } from "./src/components/Screens";

export default function App() {
  return (
    <NativeBaseProvider>
      <Screens />
    </NativeBaseProvider>
  );
}
