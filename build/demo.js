/* eslint-env browser */
/* globals popMenu */

'use strict';

window.onload = function() {
    var body = document.querySelector('body');

    popMenu.build(body.querySelector('select'), ['A', 'B', 'C', ['a', ['AA', 'BB'], 'b', 'c', ['Aa', 'Bb']], 'D', ['alpha', 'beta']], { prompt: 'Choose One'});

    var menu = [
        { name: 'William', alias: 'Bill'},
        'Ted',
        'X-FIles',
        {
            label: 'Omega',
            submenu: [
                'x',
                'y',
                'z'
            ]
        }
    ];

    var select = popMenu.build('SELECT', menu);

    body.appendChild(select);
};
