import React from 'react';
import ControlPanel from './ControlPanel.js';
import '../css/LandingPage.css';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'default',
        }
    }

    changeBackground = bg => {
        this.setState({
            background: `bg${bg}`,
        });
    }

    render() {
        return (
            <div className={"container-fluid " + this.state.background}>
                <div className="text-center py-4 mb-3">
                    <p className="display-4 text-dark">Music Visualizer {/* placeholder name */}</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9 mt-2">
                        <ControlPanel/>
                    </div>
                </div>
            </div>
        );
    }
}