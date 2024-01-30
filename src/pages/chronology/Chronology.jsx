import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/Context";

const Chronology = () => {
	const { characters } = useContext(ApiContext);
	const [ordenatedList, setOrdenatedList] = useState(characters);
    const [ascending, setAscending] = useState(true)
	console.log(ordenatedList);
	const cambiarOrden = () => {
		setAscending(!ascending)
	};

	const ordenar = () => {
        cambiarOrden()
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
			<button onClick={ordenar}>O</button>
			{ordenatedList.map((item, index) => (
				<div key={index}>
					<p>{item.age}</p>
					<p>{item.name}</p>
					<img src={item.image} alt={item.name}></img>
				</div>
			))}
		</>
	);
};

export default Chronology;
