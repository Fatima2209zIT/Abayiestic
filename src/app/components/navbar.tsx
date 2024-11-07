import Link from "next/link";
import Image from "next/image"; 
import logo from "/public/logo.jpg";

export default function Navbar() {
  return (
    <nav className="m-0 bg-yellow-700 text-lg text-white p-10 font-sans">
      <ul className="list-none flex justify-around font-sans text-white">
        <div className="justify-left">
          <Image src={logo} alt="Logo" width={70} height={70} />
        </div>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Products">Products</Link>
        </li>
        <li>
          <Link href="/Cart">Cart</Link>
        </li>
        <li>
          <Link href="/About">About Us</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

