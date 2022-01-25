import React, { useContext } from "react";
import { Container, Header, Content, Footer, Sidebar, Panel } from "rsuite";

import ProfileCard from "../components/Profile/ProfileCard/ProfileCard";
import UserEdit from "../components/Profile/UserEdit";
import ProfileContext from "../context/ProfileContext";

const temp = {
	width: "auto",
	margin: "auto",
	backgroundColor: "grey",
};

const Profile = () => {
	const profileContext = useContext(ProfileContext);
	const { ProfileData } = profileContext;
	return (
		<Container>
			<Footer className="text-white">
				<Panel style={{ textAlign: "center" }}>
					You have completed {ProfileData.sessions} Sessions.
				</Panel>
			</Footer>

			<Panel style={temp}>
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<ProfileCard forWhat="Profile" />
						</div>
						<div className="col-sm">
							<UserEdit />
						</div>
					</div>
				</div>
			</Panel>
		</Container>
	);
};

export default Profile;
