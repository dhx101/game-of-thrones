import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/Context";
import { Link } from "react-router-dom";
import Lang from "../../components/lang/Lang";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const Chronology = () => {
	const { characters } = useContext(ApiContext);
	const [ordenatedList, setOrdenatedList] = useState(characters);
	const [ascending, setAscending] = useState(true);
	console.log(ordenatedList);
	const cambiarOrden = () => {
		setAscending(!ascending);
	};

	const ordenar = () => {
		cambiarOrden();
		const newArray = [...characters];
		newArray.sort((a, b) => {
			const orden = ascending ? 1 : -1;
			return orden * (a.age - b.age);
		});
		setOrdenatedList(newArray);
		console.log(ascending);
	};

	useEffect(() => {}, []);

	return (
		<>
			<header className="header">
				<Link className="goBack" to={"/"}>
					&#129044;
				</Link>
				<Lang />
			</header>
			<SimpleBar forceVisible="y" style={{ height: "80vh" }}>
				<div className="timeline">
					<div className="timeline-input">
						<button onClick={ordenar} className="timeline-input__btn">
							O
						</button>
					</div>
					<div className="timeline-box">
						{ordenatedList.map((item, index) =>
							index % 2 === 0 ? (
								<div
									key={index}
									className="timeline-box-character paddingTop-left">
									<div className="border">
										<p className="timeline-box-character__age">
											{item.age}
										</p>
										<p className="timeline-box-character__name">
											{item.name}
										</p>
									</div>
									<img src={item.image} alt={item.name}></img>
								</div>
							) : (
								<div
									key={index}
									className="timeline-box-character paddingTop-right right-border">
									<div className="border">
										<p className="timeline-box-character__age">
											{item.age}
										</p>
										<p className="timeline-box-character__name">
											{item.name}
										</p>
									</div>
									<img src={item.image} alt={item.name}></img>
								</div>
							)
						)}
					</div>
				</div>
			</SimpleBar>
		</>
	);
};

export default Chronology;
