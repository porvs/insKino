import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800">
      <Link href="/" className="text-xl font-bold text-red-500">
        ins Kino
      </Link>
      <nav>
        <button className="px-4 py-2 text-sm bg-white text-black rounded-md font-semibold">
          로그인
        </button>
      </nav>
    </header>
  );
}