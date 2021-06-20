import React from 'react';
import Svg from '../assets/sprite.svg';

class Search extends React.Component{

    state = { inputText: ''};
    

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onRender(this.state.inputText);
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="search" id="search">
                <input className="search__input" type="text"
                placeholder="Find Image" 
                value={this.state.inputText}
                onChange={(e)=>{ this.setState({ inputText: e.target.value})}}
                 />
                <button className="search__btn" onClick={this.onFormSubmit}>
                    <svg className="search__svg">
                        <use xlinkHref={`${Svg}#icon-search`}></use>
                    </svg>
                </button>
            </form>
        )
    }
}

export default Search;