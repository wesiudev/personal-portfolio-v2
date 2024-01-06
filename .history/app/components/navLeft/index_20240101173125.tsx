import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function NavLeft() {
  return (
    <div className="fixed left-12 bottom-24 flex flex-col items-center justify-center space-y-3">
      <Link href="https://github.com/wesiudev">
        <FaGithub className="h-8 w-8" />
      </Link>
      <Link href="https://linkedin.com/in/wesiudev">
        <FaLinkedin className="h-8 w-8" />
      </Link>
      <div className="w-px h-24 mt-12 bg-black"></div>
    </div>
  );
}
