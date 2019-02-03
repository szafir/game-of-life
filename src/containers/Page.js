import React, { Component } from "react";
import PanelFlexbox from "../components/Flexbox/Panel";
import PanelPosition from "../components/Position/Panel";
import PanelCanvas from "../components/Canvas/Panel";
import Toolbar from "../components/Toolbar";

import { Route } from "react-router-dom";



class Page extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={PanelPosition} />
                <Route path="/flexbox" component={PanelFlexbox} />
                <Route path="/canvas" component={PanelCanvas} />
                <Toolbar />
            </div>
        )
    }
}
export default Page;