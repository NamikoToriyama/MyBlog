import React from 'react';
import LatestList from './components/LatestList';

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <LatestList />
            </div>
        );
    }
}

export default Home;