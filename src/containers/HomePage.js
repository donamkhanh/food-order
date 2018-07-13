import React from 'react';
import { Route, Link } from 'react-router-dom';

const HomePage = () => (
    <main>
        <Route exact path="/" component={Home} />
    </main>
);