export default function Temperature({ data }) {
  return (
    <>
      <div>
        <span className="text-8xl">{data.temp}&deg;</span>
        <span className="text-6xl">C</span>
      </div>
      <div className="mt-4">Local time: {data.time}</div>
    </>
  );
}
