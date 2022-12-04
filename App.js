import { NativeBaseProvider } from "native-base";
import React from "react";
import { Screens } from "./src/components/Screens";
import { PostProvider } from "./src/context/PostContext";

export default function App() {
  return (
    <PostProvider>
      <NativeBaseProvider>
        <Screens />
      </NativeBaseProvider>
    </PostProvider>
  );
}
