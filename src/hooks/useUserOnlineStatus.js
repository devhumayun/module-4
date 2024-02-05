import { useSyncExternalStore } from "react";
import { subscribe } from "../utils/subscribe";

export function useUserOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
}
