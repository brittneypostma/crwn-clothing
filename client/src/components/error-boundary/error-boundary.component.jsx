import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
	constructor() {
		super();

		this.state = {
			hasErrored: false,
		};
	}
	static getDerivedStateFromError(error) {
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<div className="broken-container">
					<div className="broken-text">
						Oops, something went wrong. <br />
						We are working on it!
					</div>

					<img
						className="broken-img"
						src="http://www.pngmart.com/files/7/Appliance-Plug-PNG-Picture.png"
						alt="404"
					/>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
