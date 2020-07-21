import React from "react";

//import "./HeaderBlock.scss";

const HeaderBlock = ({title, desc}) => {
	return (
		<div>
			<h1>{title}</h1>
			<h3>{desc}</h3>
		</div>
	);
}

export default HeaderBlock;