import { useUserOnlineStatus } from "../hooks/useUserOnlineStatus";

export default function IsOnline() {
    const { isOnline } = useUserOnlineStatus()
    return (
        <>
            <h1> He is : {isOnline} </h1>
        </>
    );
}