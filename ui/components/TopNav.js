import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function TopNav() {
  const { data, status, loading } = useSession();

  return (
    <nav className="nav shadow p-2 justify-content-between mb-3">
      <Link href="/" className="nav-link">
        NEXT EcomNext
      </Link>

      {status === "authenticated" ? (
        <>
          <Link href="/dashboard/user" className="nav-link">
            {data?.user?.name}
          </Link>
          <a
            className="nav-link pointer"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Logout
          </a>
        </>
      ) : status === "loading" ? (
        <span className="nav-link text-danger">Loading...</span>
      ) : (
        <div className="d-flex">
          <Link href="/login" className="nav-link">
            Login
          </Link>
          <Link href="/register" className="nav-link">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
