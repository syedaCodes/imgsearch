import React from 'react';
import unsplash from '../api/unsplash';
import Search from './Search';
import ImageList from './ImageList';

class Home extends React.Component {

    state = { images: [] };

    onSearchSubmit = async inputText => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: inputText }
        });

        this.setState({ images: response.data.results });
    }
    
    render(){
        return (
            <>
                <h1 className="heading">Image Search</h1>
                <Search onRender={this.onSearchSubmit} />
                <ImageList images={this.state.images}/> 
            </>
        );
    }
}

export default Home;
