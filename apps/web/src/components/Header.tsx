import Link from "next/link";

export function Header(): JSX.Element {
  return (
    <header className="">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
