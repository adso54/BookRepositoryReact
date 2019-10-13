import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import Header from '../../components/header/header.component';

const HomePage = ()=> (
    <div>
        <div>
            <Header/>
        </div>
        <div className='homepage'>
            <Directory/>
        </div>
    </div>
)

export default HomePage;