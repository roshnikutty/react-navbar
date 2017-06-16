import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navigation-bar';
import './index.css';

const links = [{
    text: 'API- WebApp',
    href: 'https://roshnikutty.github.io/Multi_cuisine_restaurant_search_sort/'
}, {
    text: 'Fullstack - Med-aid',
    href: 'https://med-aid.herokuapp.com/'
}];



ReactDOM.render(<NavigationBar title="Navigation Bar" links={links} />,
    document.getElementById('root')
);
