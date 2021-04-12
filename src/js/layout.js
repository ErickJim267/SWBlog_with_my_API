import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { NavbarMenu } from "./component/navbarMenu";
import { Footer } from "./component/footer";
import { Planets } from "./views/planets";
import { Characters } from "./views/characters";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<Container>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Row>
						<Col>
							<NavbarMenu />
						</Col>
					</Row>
					<Row>
						<Col>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/characters" component={Characters} />
								<Route exact path="/characters/:charactersid" component={Characters} />
								<Route exact path="/planets" component={Planets} />
								<Route exact path="/planets/:planetsid" component={Planets} />

								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
						</Col>
					</Row>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</Container>
	);
};
export default injectContext(Layout);
