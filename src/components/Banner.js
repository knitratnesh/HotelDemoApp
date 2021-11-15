import { Component } from "react";

export default class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="banner">
                <h1>{this.props.title}</h1>
                <p>
                    {this.props.subtitle}
                </p>
                {this.props.children}
            </div>
        )
    }

}