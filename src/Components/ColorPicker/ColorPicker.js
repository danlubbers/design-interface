import React, {Component} from 'react';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';

export default class ColorPicker extends Component {
    state = {
      displayColorPicker: false,
      showHexButton: false,
      color1: {
        r: '245',
        g: '149',
        b: '35',
        a: '1',
      },
      color2: {
        r: '245',
        g: '149',
        b: '35',
        a: '1',
      },
    };


handleClick = () => {
    this.setState({ 
        displayColorPicker: !this.state.displayColorPicker,
        showHexButton: true
    })
};

handleClose = () => {
    this.setState({ displayColorPicker: false})
};

handleChange = (color1) => {
    this.setState({ color1: color1.rgb })
};

handleToggle = () => {
    this.setState({ showHexButton: true})
};

    render() {  

        // RGBA Values
        const R = this.state.color1.r; 
        const G = this.state.color1.g; 
        const B = this.state.color1.b; 
        const A = this.state.color1.a; 

        // HEX Values
        let hexR = `${R.toString(16).toUpperCase()}`;
        let hexG = `${G.toString(16).toUpperCase()}`;
        let hexB = `${B.toString(16).toUpperCase()}`;
        let hexA = `${Math.round(A).toString(16).toUpperCase().slice(0, -1)}`;

        const styles = reactCSS({
            'default': {
              color: {
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '2px solid black',
                background: `rgba(${ R }, ${ G }, ${ B }, ${ A })`,
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

        // Ternary to determine if conversion needs a '0' or not
          hexR.length === 1 ? hexR = `0${hexR}` : hexR = `${hexR}`;
          hexG.length === 1 ? hexG = `0${hexG}` : hexG = `${hexG}`;
          hexB.length === 1 ? hexB = `0${hexB}` : hexB = `${hexB}`;
          hexA.length === 1 ? hexA = `0${hexA}` : hexA = `${hexA}`;
          
          

        return(
          <div className='color-picker-app'>
            <div style={ styles.swatch } >
              <div style={ styles.color } onClick={ this.handleClick } /> 
                <h1>
                    {`rgba(${R}, ${G}, ${B}, ${A})`} 
                </h1>
            </div>
            { this.state.displayColorPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.handleClose }/>
              <SketchPicker color={ this.state.color1 } onChange={ this.handleChange } />
            </div> : null }


            <div className='hex-code'>
              { this.state.showHexButton ? `HEX Code: #${hexR}${hexG}${hexB}${hexA}` : null }
            </div>

          </div>
        
        )
    }
}
