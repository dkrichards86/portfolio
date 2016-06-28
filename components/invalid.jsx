import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1>WHAT DID YOU DO?!</h1>
                    <p>
                        This page doesn't exist. Let's go to a real page.
                    </p>
                    <ul>
                        <li>
                            <Link to="/">Go Home</Link>
                        </li>
                        <li>
                            <Link to="professional">About Me: Professionally</Link>
                        </li>
                        <li>
                            <Link to="personal">About Me: Personally</Link>
                        </li>
                        <li>
                            <Link to="resume">My Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}