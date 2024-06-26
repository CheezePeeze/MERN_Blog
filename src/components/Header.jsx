import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const navItemsInfo = [
	{ name: "Home" },
	{ name: "Articles" },
	{ name: "Pages" },
	{ name: "Pricing" },
	{ name: "FAQ" },
];
const NavItem = ({ name }) => {
	console.log(name);
	return (
		<li className="relative group">
			<a href="/" className="px-4 py-2 group-hover:text-green-500">
				{name}
			</a>
			<span className=" text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0  group-hover:right-[90%] opacity-0 group-hover:opacity-100">
				/
			</span>
		</li>
	);
};
const Header = () => {
	const [navIsVisible, setNavIsVisible] = useState(false);

	const navVisibilityHandler = () => {
		setNavIsVisible((currState) => {
			return !currState;
		});
	};

	return (
		<div>
			<section>
				<header className="container mx-auto px-5 flex justify-between py-4 items-center">
					<div>
						<img className="w-16" src={images.Logo} alt="logo " />
					</div>
					<div className="lg:hidden z-50">
						{navIsVisible ? (
							<AiOutlineClose
								className="w-6 h-6"
								onClick={navVisibilityHandler}
							/>
						) : (
							<AiOutlineMenu
								className="w-6 h-6"
								onClick={navVisibilityHandler}
							/>
						)}
					</div>
					<div
						className={`${
							navIsVisible ? "right-0" : "-right-full"
						} transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
					>
						<ul className="flex flex-col lg:flex-row gap-x-2 font-semibold">
							{navItemsInfo.map((item) => (
								<NavItem key={item.name} name={item.name} />
							))}
						</ul>
						<button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
							Sign in
						</button>
					</div>
				</header>
			</section>
		</div>
	);
};

export default Header;
