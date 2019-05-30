import React, {Component} from 'react';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';

export default class ColorPicker extends Component {
    state = {
      displayColorPicker: false,
      color1: {
        r: '245',
        g: '149',
        b: '35',
        a: '87',
      },
      color2: {
        r: '245',
        g: '149',
        b: '35',
        a: '87',
      },
    };


handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker})
};

handleClose = () => {
    this.setState({ displayColorPicker: false})
};

handleChange = (color1) => {
    this.setState({ color1: color1.rgb })
};

    render() {  

        const styles = reactCSS({
            'default': {
              color: {
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '2px solid black',
                background: `rgba(${ this.state.color1.r }, ${ this.state.color1.g }, ${ this.state.color1.b }, ${ this.state.color1.a })`,
              },
              swatch: {
                padding: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                // background: '#fff',
                borderRadius: '1px',
                cursor: 'pointer',
              },
              popover: {
                position: 'absolute',
                zIndex: '2',
              },
              cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
          });

        return(
          <div className='color-picker-app'>
            <div style={ styles.swatch } >
          <div style={ styles.color } onClick={ this.handleClick }/> 
          <h1>
          {`rgba(${ this.state.color1.r }, ${ this.state.color1.g }, ${ this.state.color1.b }, ${ this.state.color1.a })`} 
          </h1>
          </div>
            { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
            <SketchPicker color={ this.state.color1 } onChange={ this.handleChange } />
          </div> : null }

          <div>

          </div>
            { 
              `HEX Code:
              #${this.state.color1.r.toString(16).toUpperCase()}${this.state.color1.g.toString(16).toUpperCase()}${this.state.color1.b.toString(16).toUpperCase()}${Math.round(this.state.color1.a).toString(16).toUpperCase().slice(0, -1)}` 
            }
          </div>
        
        )
    }
}
