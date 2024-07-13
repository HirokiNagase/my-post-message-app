import Link from "next/link";

const Home = () => {
  const openReceiverInNewWindow = () => {
    window.open("/display", "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link href="/input">
          <button>Go to input</button>
        </Link>
      </div>
      <div>
        <button onClick={openReceiverInNewWindow}>
          Go to Display (New Window)
        </button>
      </div>
    </div>
  );
};

export default Home;
