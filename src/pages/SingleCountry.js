import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Image } from "react-bootstrap";
import styling from "../utility/styling.js";
import HoverPopout from "../components/HoverPopout.js";

const SingleCountry = () => {
	const { name } = useParams();

	const [country, setCountry] = useState(null);

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
			.then((res) => {
				console.log("Response:", res.data[0]);
				setCountry(res.data[0]);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	if (!country) {
		return <div>Loading...</div>;
	}

	let { enter: imageMEnter, leave: imageMLeave } = styling.styleOnHover(
		"transform",
		"translate(-8px, -8px)",
		"translate(0px, 0px)",
	);

	return (
		<Row>
			<Col>
				<div className="rounded bg-dark mr-4 mb-4">
				<Image
					src={country.flags.png}
					alt={`${country.name.common}'s flag`}
					onMouseEnter={imageMEnter}
					onMouseLeave={imageMLeave}
					className="h-100 w-100 border border-dark rounded"
					style={{
						transition: "all 200ms ease-in-out",
					}}
				/>
				</div>

				<HoverPopout textContent={country.name.common} size={1} offset={2} marginBottom={4} fullWidth="75" />
			</Col>

			<Col>
				<HoverPopout textContent={`Official name: ${country.name.official}`} size={1} offset={2} marginBottom={4} />
				<HoverPopout textContent={`Region: ${country.region}`} size={3} offset={3} fullWidth="80" />
				{country.subregion && <HoverPopout textContent={`Sub-Region: ${country.subregion}`} fullWidth="75" size={5} marginBottom={5} offset={1} />}

				<HoverPopout textContent={"Languages"} size={5} offset={2} fullWidth="75" />
				<ul className="mb-5">
					{Object.values(country.languages ?? {primary: "None"}).map((language) => {
						return <li> <HoverPopout textContent={language} size={6} offset={0} fullWidth="50" /> </li>;
					})}
				</ul>

				<HoverPopout textContent={
					(<div>
						Currency: {Object.values(country.currencies ?? [{name: "None"}]).name} (
						{Object.values(country.currencies ?? [{symbol: "N/A"}])[0].symbol})
					</div>)
				} size={5} offset={1} fullWidth="50" />

				<HoverPopout textContent={

				(<Link
					className="text-dark link-underline"
					to={"https://wikipedia.org/wiki/" + country.name.common}
				>
					Read on wikipedia!
				</Link>)

				} size={5} offset={0} fullWidth="50" />

			</Col>
		</Row>
	);
};

export default SingleCountry;
