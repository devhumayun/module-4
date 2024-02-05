import { useUserOnlineStatus } from "./hooks/useUserOnlineStatus";

export default function App() {
  const isOnline = useUserOnlineStatus()
  return (
    <>
      <h1> He is : {isOnline ? "Online" : "Offline"} </h1>
    </>
  );
}