import Link from "next/link";
import { FaGithub } from "react-icons/fa";
export default function NavLeft() {
  return (
    <div className="fixed left-12 bottom-24 flex flex-col items-center justify-center space-y-3">
      <Link href="https://github.com/wesiudev">
        <FaGithub />
      </Link>
      <Link href="https://linkedin.com/wesiudev">
        <FaGithub />
      </Link>
    </div>
  );
}
