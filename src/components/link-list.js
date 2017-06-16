import React from 'react';

export default function LinkList(props) {

    //For every item in links array, make the text link to its url
    const linkItems = props.links.map((link, index) => {
        return (<li>
                    <li key={index}> <a href={link.href}>{link.text}</a>
                    </li>
             </li>)
    });
    return <ul>{linkItems}</ul>
}
