import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function useSensorWs() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        if (message.type === "NEW_READING") {
          queryClient.invalidateQueries({ queryKey: ["sensors"] });
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    return () => {
      ws.close();
    };
  }, [queryClient]);
}
