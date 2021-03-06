import React from 'react';
import {EMAIL_PROP_TYPE} from './constants';

export default class EmailView extends React.Component {
    static propTypes = {
        email: EMAIL_PROP_TYPE.isRequired,
        onClose: React.PropTypes.func.isRequired
    }

    _handleClose(e) {
        e.stopPropagation();
        this.props.onClose();
    }

    render() {
        let {
            email: {subject, from, date, message}
        } = this.props;
        let rawMessage = {__html: message};

        return (
            <div>
                <h1>{subject}</h1>
                <h2>From: <a href={`mailto:${from}`}>{from}</a></h2>
                <h3>{date}</h3>
                <div dangerouslySetInnerHTML={rawMessage} />
                <button onClick={this._handleClose.bind(this)}>Close</button>
            </div>
        );
    }
}
