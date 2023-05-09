export default function Loading() {
  return (
    <div style={{ height: "30vh", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        loading...
      </div>
    </div>
  );
}
