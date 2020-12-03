import React from 'react';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeRecipe: [],
         }
    }
    render() { 
        console.log(this.props.match.params.id);
        return ( 
            <div>Recipe Component</div>
         );
    }
}

export default Recipe;
 
