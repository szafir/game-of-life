import React, { Component } from "react";
import Panel from "../components/Panel";
import Toolbar from "../components/Toolbar";

class Page extends Component {

    render() {
        return (
            <div>
                <Panel />
                <Toolbar />
            </div>
        )
    }
}
export default Page;