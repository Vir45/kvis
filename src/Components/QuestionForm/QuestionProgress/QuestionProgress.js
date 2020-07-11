import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './QuestionProgress.css'

export default class StepProgressBar extends React.Component {

	render() {
		return (
			<div className="propressContainer">
				<div className="boardpropressContainer">
					<ProgressBar
						percent={this.props.percent}
					>
						<Step transition="scale">
							{({ accomplished }) => {
								return <span className="activeStep" />
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished }) => {
								if (accomplished) {
									return <span className="activeStep" />
								}
								return <span className="step" />
							}}
						</Step>
						<Step transition="scale">
							{({ accomplished }) => {
								if (accomplished) {
									return <span className="activeStep" />
								}
								return <span className="step" />
							}}
						</Step>
					</ProgressBar>
				</div>
			</div>
		);
	}
};

