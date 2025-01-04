import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Explore Nepal</h1>
      <div className="space-x-4">
        <NavLink to="/" className="hover:text-yellow-500">Home</NavLink>
        <NavLink to="/about" className="hover:text-yellow-500">About</NavLink>
        <NavLink to="/destinations" className="hover:text-yellow-500">Destinations</NavLink>
        <NavLink to="/contact" className="hover:text-yellow-500">Contact Us</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
