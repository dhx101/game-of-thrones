import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../inicio/Inicio";
import Characters from "../characters/Characters";
import Houses from "../houses/Houses";
import Chronology from "../chronology/Chronology";
import Links from "../../components/nav/Links";
import DetailHouses from "../detailHouses/DetailHouses";

const Main = () => {
	return (
		<>
        <BrowserRouter>
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/characters" element={<Characters/>} />
					<Route path="/houses" element={<Houses />} />
					<Route path="/chronology" element={<Chronology />} />
					<Route path="/DetailHouses/:id" element={<DetailHouses />} />
				</Routes>
                <Links/>
			</BrowserRouter>
		</>
	);
};

export default Main;
