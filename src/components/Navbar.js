import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="my-4">
			<Link className="my-4 mx-2 p-2 rounded bg-dark text-white link-underline-dark link-underline-opacity-25" to="/">Home</Link>
			<Link className="my-4 mx-2 p-2 rounded bg-dark text-white link-underline-dark link-underline-opacity-25" to="/about">About</Link>
		</div>
	);
};

export default Navbar;
