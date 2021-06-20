import React from 'react';

const ImageList = (props) => {

    const images = props.images.map(({ id, description, urls}) => {
        return (
            <div className="imageCard" key={id}>
                <img src={urls.regular} alt={description} />
            </div>
        );
            
    });

    let opacity = '1';
    images.length === 0? opacity='0': opacity= '1';

    return (
            <div className="catalogue" style={{opacity: `${opacity}`}}>
                {images}
            </div>
    )
}

export default ImageList;
