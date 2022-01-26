import React from "react";
import VolunInfo from "../../components/SessionPopContent/VolunInfo";
import MeetInfo from "../../components/SessionPopContent/MeetInfo";
import StudentInfo from "../../components/SessionPopContent/StudentInfo";

const sessionStyle = {
	flexDirection: "column",
};

const Session = (props) => {
	const displayType = "volunteer";
	return (
		<div style={sessionStyle}>
			<StudentInfo name="Ashutosh" displayType={displayType} sendMessage={props.sendMessage} />
			<VolunInfo volunteer={props.volunteer} sendMessage={props.sendMessage} />
			<MeetInfo displayType={displayType} />
		</div>
	);
};

export default Session;
