import React from 'react';
import PropTypes from 'prop-types';

export class Notes extends React.Component{

render() { // este "return" es que el que va a mantener los textos creados
        // crear props; el props de "text" which is going to prep pass the text inside the notee, tambien creamos una funcion como prop llamada "delete note" que va a ser la que borre la note cuando se haga click en ella
        return  (
            <div className= "note" onClick={this.props.deleteMethod}>
                {this.props.text} 
            </div>
        );
        
    }
}

export default Notes;

Notes.propTypes = {
        deleteMethod: PropTypes.func,
        text: PropTypes.string
        
    };