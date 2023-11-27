import Chat from "@/components/Chat";
import UserProvider from "@/providers/UserProvider";

export default function Home() {
  return (
    <UserProvider>
      <Chat />
    </UserProvider>
  );
}
