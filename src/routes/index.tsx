import React from "react";
import {Constants} from "../constants";
import {RouteInterface} from "../interfaces/RouteInterface";
import {Route, Switch} from "react-router-dom";
import AuthTemplate from "../templates/AuthTemplate";
import NoneFooterDashboardTemplate from "../templates/NoneFooterDashboardTemplate";
import DashboardTemplate from "../templates/DashboardTemplate";

import Login from "../features/Login";
import Register from "../features/Register";
import Home from "../features/Home";
import Photo from "../features/Photo";
import Search from "../features/Search";
import Profile from "../features/Profile";
import Chat from "../features/Chat";
import Message from "../features/Message";

const publicRoutes : Array<RouteInterface> = [
    {path: Constants.Route.login, Component: Login},
    {path: Constants.Route.register, Component: Register}
]

const privateRoute: Array<RouteInterface> = [
    {path: Constants.Route.home, Component: Home},
    {path: Constants.Route.search, Component: Search},
    {path: Constants.Route.profile, Component: Profile},
    {path: Constants.Route.chat, Component: Chat},
    {path: Constants.Route.message, Component: Message},
]

const privateRouteNoneFooter: Array<RouteInterface> = [
    {path: Constants.Route.photo, Component: Photo}
]

const availablePublicRoutesPaths : Array<string>|any = publicRoutes.map((r: RouteInterface) => r.path);
const availablePrivateRoutesPaths : Array<string>|any = privateRoute.map((r: RouteInterface) => r.path);
const availablePrivateNoneFooterRoutesPaths : Array<string>|any = privateRouteNoneFooter.map((r: RouteInterface) => r.path);

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path={availablePublicRoutesPaths}>
                    <AuthTemplate>
                        <Switch>
                            {publicRoutes.map((route : RouteInterface|any, idx : number) => {
                                return (
                                    <Route
                                        path={route.path}
                                        component={route.Component}
                                        key={idx}
                                        exact
                                    />
                                )
                            })}
                        </Switch>
                    </AuthTemplate>
                </Route>

                <Route path={availablePrivateNoneFooterRoutesPaths}>
                    <NoneFooterDashboardTemplate>
                        <Switch>
                            {privateRouteNoneFooter.map((route : RouteInterface|any, idx : number) => {
                                return (
                                    <Route
                                        path={route.path}
                                        component={route.Component}
                                        key={idx}
                                        exact
                                    />
                                )
                            })}
                        </Switch>
                    </NoneFooterDashboardTemplate>
                </Route>

                <Route path={availablePrivateRoutesPaths}>
                    <DashboardTemplate>
                        <Switch>
                            {privateRoute.map((route : RouteInterface|any, idx : number) => {
                                return (
                                    <Route
                                        path={route.path}
                                        component={route.Component}
                                        key={idx}
                                        exact
                                    />
                                )
                            })}
                        </Switch>
                    </DashboardTemplate>
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default Routes;
