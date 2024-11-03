import { Row } from "react-bootstrap";
import styling from "../utility/styling.js";

export default function HoverPopout(props) {
	let { textContent, size, offset, marginBottom, fullWidth } = props;
	offset = offset ?? 4;
	fullWidth = fullWidth ?? "100";

	if (!(offset.x && offset.y)) {
		offset = {x: offset, y: offset};
	}

	let { enter: divMEnter, leave: divMLeave } = styling.styleOnHover(
		"transform",
		"translate(-8px, -8px)",
		`translate(-${offset.x}px, -${offset.y}px)`,
	);

	let content = (<h3>{textContent}</h3>);
	switch (size) {
		case 1:
			content = (<h1>{textContent}</h1>);
			break;
		case 2:
			content = (<h2>{textContent}</h2>);
			break;
		case 3:
			content = (<h3>{textContent}</h3>);
			break;
		case 4:
			content = (<h4>{textContent}</h4>);
			break;
		case 5:
			content = (<h5>{textContent}</h5>);
			break;
		case 6:
			content = (<div>{textContent}</div>);
			break;
		default:
			break;
	}

	return (
		<div className={`bg-dark mx-2 my-3 mb-${marginBottom} w-${fullWidth} rounded`}>
			<div className="bg-white p-2 w-100 rounded border border-dark"
				style={{
					transform: `translate(-${offset.x}px, -${offset.y}px)`,
					transition: "all 200ms ease-in-out"
				}}
				onMouseEnter={divMEnter}
				onMouseLeave={divMLeave}
				>
				{content}
			</div>
		</div>
	);
}
