import React from 'react';

class ImageCard extends React.Component {
    constructor (props) {
        super(props);

        this.state = { spans: 0 };
        //This is reacts ref system which allows you to get an reference to an element in the DOM
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        //this has to be done this way otherwise it will get the information before the image loads
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    };

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;