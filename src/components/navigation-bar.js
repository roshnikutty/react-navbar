import React from 'react';
import './navigation-bar.css';
import LinkList from './link-list';
// The NavigationBar component goes here.  It should be the default export.

export default function NavigationBar(props) {    
        return (<div className = "navigation-bar">
                         <h1>{props.title}</h1>
                <LinkList className = "navigation-bar-nav" links = {props.links}/>
                </div>
         );
}