import React from "react";
import { Dialog } from 'primereact/dialog';
import ReactPlayer from 'react-player'

class Reactjs extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      apiResponse:false,
      displayDialog:false,
      playingVideo:true,
      error:false
    }
  }

  callAPI(){
    fetch('http://localhost:9000/enrolPopup')
     .then(res => res.text())
     .then(res => this.setState({apiResponse: res,displayDialog:res,playingVideo:false}))
     .catch(res => this.setState({error: true}))
  }

  componentWillMount(){
      this.callAPI();
  }

  render(){
    console.log("error",this.state.error)
    return (
      <div> 
        {!this.state.error?<div>
        <ReactPlayer width="2000px" height="600px" playing={this.state.playingVideo} url='https://www.youtube.com/watch?v=w7ejDZ8SWv8' />
        {this.state.apiResponse?
        <div>
          <Dialog header="Sign up" visible={this.state.displayDialog} style={{ width: '50vw' }} onHide={() => this.setState({displayDialog: false})}>
              <p>Enrol now to watch full course</p>
          </Dialog>
        </div>
        :<p></p>}
      </div>:<p> Something went wrong!</p>}
      </div>

    );
  }
}

export default Reactjs;
