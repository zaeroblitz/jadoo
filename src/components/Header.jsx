import Link from "next/link";

import Logo from "images/logo.svg";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto px-">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <span className="w-28">
          <Logo className="logo-style-1" />
        </span>

        {/* Links */}
        <div className="w-auto">
          <ul className="flex items-center gap-x-14">
            <li className="font-medium">
              <Link href="/destinations" className="text-gray-800">
                Destinations
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/hotels" className="text-gray-800">
                Hotels
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/flights" className="text-gray-800">
                Flights
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/bookings" className="text-gray-800">
                Bookings
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/login" className="text-gray-800">
                Login
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/sign-up" className="text-gray-800">
                <button
                  type="button"
                  className="px-5 py-2 border border-gray-800 rounded-md"
                >
                  Sign Up
                </button>
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/en" className="text-gray-800">
                <button type="button" className="relative">
                  EN
                  <span className="absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-2"></span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
