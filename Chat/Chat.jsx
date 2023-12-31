"use client";

import * as Ably from "ably";
import { AblyProvider } from "ably/react";
import ChatBox from "./ChatBox.jsx";

export default function Chat() {
  const client = Ably.Realtime.Promise({ authUrl: "/Api" });

  return (
    <AblyProvider client={client}>
      <ChatBox />
    </AblyProvider>
  );
}
