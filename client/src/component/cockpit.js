import React, {Component} from 'react';

class Cockpitcompo extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("compoment will mount ");
    }
    //
    componentDidMount() {
        console.log("compoment did mount ");
    }
    //
    // componentWillReceiveProps(nextProps) {
    //
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }

    render() {
        console.log(this.props);
        let dynaclasses = '';
        let toggletext = '';
        if (this.props.stateattr.persons.length === 2) {
            dynaclasses = 'red';
        }
        if (this.props.stateattr.persons.length === 1) {
            dynaclasses = 'purple';
        }
        const inlinestyle = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'

        }

        if (this.props.stateattr.showperson === true) {
            inlinestyle.backgroundColor = 'red';
            toggletext = "close ";
        }else{
            inlinestyle.backgroundColor = 'green';
            toggletext = "open ";
        }

        return (
            <div>
                <h1 className={dynaclasses}>{this.props.apptitleattr} </h1>

                <button
                    style={inlinestyle}
                    onClick={this.props.togglelisthandlerattr}>{toggletext}
                </button>
            </div>
        );
    }
}

export default Cockpitcompo;
