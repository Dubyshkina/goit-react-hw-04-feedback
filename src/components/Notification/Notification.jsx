
import { Component } from "react";

class Notification extends Component {
    static defaultProps = {
        message: '',
    }

    render(){
        return <h2>{this.props.message}</h2>
        
    }
};

export default Notification;