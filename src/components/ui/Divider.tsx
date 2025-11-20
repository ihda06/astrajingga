export default function Divider() {
  return (
    <div className="relative w-full my-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </div>
  );
}
