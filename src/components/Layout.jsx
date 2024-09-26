export default function Layout({ children }) {
  return (
    <div className="m-auto w-11/12 py-6 rounded bg-gray-200">
      <div className="flex items-center">{children}</div>
    </div>
  );
}
