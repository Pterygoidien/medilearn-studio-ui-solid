import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <nav>
      <ul>
        <li>
          <a
            href="/"
            class={`inline-block border-b-2 px-4 py-2 ${active("/")}`}
          >
            Home
          </a>
          <a href="/courses" class={`inline-block border-b-2 px-4 py-2 ${active("/courses")}`}>
            Courses
          </a>
        </li>
      </ul>
    </nav>
  );
}
