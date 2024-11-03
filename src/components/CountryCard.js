import { Col, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import styling from "../utility/styling.js";

const CountryCard = (props) => {
	const { name, flag, region } = props;

	const countryLink = `/country/${name}`;
	const navigate = useNavigate();

	let { enter: imageMEnter, leave: imageMLeave } = styling.styleOnHover(
		"transform",
		"translate(-8px, -8px)",
		"translate(0px, 0px)",
	);

	return (
		<Col>
			<Card className="my-2">
				<div className="rounded bg-dark">
					<Card.Img
						onClick={function () {
							navigate(countryLink);
						}}
						onMouseEnter={imageMEnter}
						onMouseLeave={imageMLeave}
						className="h-100 w-100 border border-dark rounded"
						style={{
							objectFit: "cover",
							cursor: "pointer",
							aspectRatio: "16/10",
							transition: "all 200ms ease-in-out",
						}}
						src={flag}
						variant="top"
					/>
				</div>

				<Card.Body>
					<Card.Title>
						<Link
							className="text-dark link-underline link-underline-opacity-0"
							to={countryLink}
						>
							{props.name}
						</Link>
					</Card.Title>
					<p>{region}</p>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default CountryCard;
