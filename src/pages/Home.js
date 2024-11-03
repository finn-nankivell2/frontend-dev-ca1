import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { Container, Row } from "react-bootstrap";
import styling from "../utility/styling.js";

const Home = () => {
	const [countriesList, setCountriesList] = useState([]);
	const [searchTerm, setSearchTerm] = useState(null);

	useEffect(() => {
		if (!searchTerm) {
			axios
				.get("https://restcountries.com/v3.1/all")
				.then((response) => {
					setCountriesList(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		}

		setCountriesList(
			countriesList.filter((country) => {
				return country.name.common
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			}),
		);
	}, [searchTerm]);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	let countryCards = countriesList
		.sort((a, b) => a.name.common.localeCompare(b.name.common))
		.map((country, index) => {
			return (
				<CountryCard
					key={country.ccn3}
					flag={country.flags.png}
					name={country.name.common}
					region={country.region}
				/>
			);
		});

	return (
		<Container>
			<div className="w-100 bg-dark mb-2 rounded">
				<input
					className="w-100 h-100 p-1 rounded border border-dark"
					style={{
						transform: "translate(-2px, -2px)"
					}}
					placeholder="Search"
					onChange={handleChange}
				></input>
			</div>
			<Row xl={4} md={3} sm={2} xs={1} cols={3}>
				{countryCards}
			</Row>
		</Container>
	);
};

export default Home;
