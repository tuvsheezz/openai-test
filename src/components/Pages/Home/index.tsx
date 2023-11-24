import { isMobile } from "react-device-detect";

function Home() {
  return (
    <div>
      <h1>{isMobile ? "mobile" : "pc"}</h1>
    </div>
  );
}

export default Home;
