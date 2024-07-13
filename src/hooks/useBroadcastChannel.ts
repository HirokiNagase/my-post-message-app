import { useState, useEffect } from "react";

const useBroadcastChannel = (channelName: string) => {
  const [message, setMessage] = useState<string | null>(null);
  const [channel, setChannel] = useState<BroadcastChannel | null>(null);

  useEffect(() => {
    const bc = new BroadcastChannel(channelName);
    setChannel(bc);

    bc.onmessage = (event) => {
      setMessage(event.data);
    };

    return () => {
      bc.close();
    };
  }, [channelName]);

  const postMessage = (msg: string) => {
    if (channel) {
      channel.postMessage(msg);
    }
  };

  return { message, postMessage };
};

export default useBroadcastChannel;
