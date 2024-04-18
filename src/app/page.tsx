import MainComponent from "./ui/main-page/main-page";
import { UserContext } from "./profile/userContext";
import { user } from "./data-samples/user-data";

export default function Home() {
  return (
    <>
    <UserContext.Provider value={user}>
    <MainComponent />
    </UserContext.Provider>
    </>
  );
}
