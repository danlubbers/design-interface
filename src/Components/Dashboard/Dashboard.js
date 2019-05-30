import React, {Component} from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';

export default class Dashboard extends Component {
  constructor(props) {
    super(props) 
    
    this.state = {
        click: false
    }
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick() {
    this.setState({click: !this.state.click});
  }

    render () {

      return (
        <div className='dashboard-app'>
          <div className='colors-section'>
            <h1>Colors</h1>

        {/* Color Sphere */}
            <div className='show-hide-circle' onClick={_=> this.handleClick()}>
            { this.state.click ? 
              <div className='circle-before-container'>
                <div className='circle-before'></div> 
                <h2>radial-gradient(#999, #555, #111)</h2>
              </div> : 
              <div className='circle-after-container'>
                <div className='circle-after'></div>
                <h2>radial-gradient(#111, #555, #999)</h2>
              </div>
            }
            </div>


         </div>

            <div>
            <ColorPicker />
            </div>
        </div>
      )
    }
}   