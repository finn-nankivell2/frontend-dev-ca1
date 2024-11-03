import HoverPopout from "../components/HoverPopout.js";

export default function About() {
	return (
		<>
			<br></br>

			<HoverPopout
				textContent={
					"REST-countries - A simple webapp for viewing information about different countries"
				}
				size={2}
				offset={6}
				marginBottom={4}
			/>
			<HoverPopout
				textContent={
					<div>
						A webapp built using react, bootstrap and axios. Displays
						information about different countries, using the api provided by{" "}
						<a href="https://restcountries.com">https://restcountries.com</a>.
						Using react for components, bootstrap for styling and alignment, and
						axios for sending api requests
					</div>
				}
				size={5}
				offset={2}
				marginBottom={4}
				fullWidth={"75"}
			/>
		</>
	);
}
