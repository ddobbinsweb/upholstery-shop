import { getAuth, signOut } from "firebase/auth";

const HomePage = () => {
  const auth = getAuth();

  return (
    <div>
      <p>Home Page (Protected by Firebase!)</p>
      <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
    </div>
  );
};

export default HomePage;
