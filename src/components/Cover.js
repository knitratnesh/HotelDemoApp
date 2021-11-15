import React, { Component } from "react";

export default class Cover extends Component{


    render(){
        return(
            <header className="defaultHero">
                {this.props.children}
            </header>
        )
    }
}