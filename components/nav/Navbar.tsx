import Image from "next/image";
import Logo from "../../public/Logo.svg";
import ProfileImage from "../../public/pizzaStock.jpg";
import { CiLogin } from "react-icons/ci";
import Container from "../utility/Container";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
export default function () {
  const session = useSession();
  const user = session.data?.user;
  // const router = useRouter();
  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 left-0 z-50 flex flex-col">
        <Container>
          <div className="flex-1">
            <Link href="/">
              {" "}
              <Image
                src={Logo}
                alt="Local Thrones Logo"
                width={50}
                height={50}
              />
            </Link>

            {/* <a className="btn btn-primary normal-case text-xl">Local Thrones</a> */}
          </div>
          <div className="flex-none">
            {session.data === null ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <CiLogin onClick={() => signIn()} className="w-full h-full" />
                </div>
              </label>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      src={user?.image as string}
                      alt="profile image"
                      width={50}
                      height={50}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content border mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href="/user/profile">Profile</Link>
                  </li>
                  <li>
                    <a>Saved deals</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={() => signOut()}>Logout</a>
                  </li>
                </ul>
              </div>
            )}
            {/* Login Button */}

            {/* Account Icon */}
          </div>
        </Container>
      </div>
    </>
  );
}
