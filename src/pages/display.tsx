import useBroadcastChannel from "../hooks/useBroadcastChannel";

const DisplayPage = () => {
  const { message } = useBroadcastChannel("textChannel");

  return (
    <div>
      <h1>Display Page</h1>
      <p>Received message: {message}</p>
    </div>
  );
};

export default DisplayPage;
