import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super()
        this.state = {name: "Tsutomu", title: "default_title"}
    }
    changeTitle(title) {
        this.setState({title});
    }
    render() {
        let components = [<Header />, <Footer />];
        const title = "Welcome Tsutomu!";
        setTimeout( () => { this.setState({name: "Hello"}) }, 1000 )
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                {this.state.name}
                {components}
            </div>
        );
    }
}