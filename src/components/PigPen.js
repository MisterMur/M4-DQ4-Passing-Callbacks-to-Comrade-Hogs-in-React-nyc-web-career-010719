import React from "react"
import Pig from "./Pig.js"
import GalaxySNote7 from "./GalaxySNote7.js"
import exclaim from '../assets/exclaim.mp3';
import wreee from '../assets/wreee.mp3'


const pigs = [
  "Sobriety",
  "Trouble",
  "Cherub",
  "MasterBlaster"
]

export default class PigPen extends React.Component {
  constructor() {
    super()
    this.state = {
      environment: "docile"
    }
    this.audio = new Audio(wreee)
  }

  relax = () => {
    console.log('in relax')
    const newState = {environment: 'docile'}
    this.setState(newState)
  }

  alterEnvironment = (vibe) => {
    console.log('in alterEnvironment')
    if (vibe === "inhospitable"){
      this.audio.play()
      console.log('in alterEnvironment if inhospitable')

    }
    const newState = {environment: vibe}
    this.setState(newState)
    setTimeout(this.relax,2000)
  }

  generateSheeple = () => {
    return pigs.map((name, idx) => (
      <Pig
        key={idx}
        id={name}
        name={name}
        environment={this.state.environment}

      />
    ))
  }
  // exclaim = () => {
  //   this.setState({environment:'inhospitable'})
  //   console.log(this.state.environment)
  //   if (this.state.environment=='inhospitable')
  //     return
  //       this.audio.play()
  //       // this.squeelAudio.play()
  //       // console.log(this.state.panicked)
  //       setTimeout(this.relax,2000)
  // }


  render() {
    const sheeple = this.generateSheeple()
    return(
      <div id="pig-pen">
        {sheeple}
        <GalaxySNote7
          // excite={this.exclaim}

          environment={this.state.environment}
          alterEnvironment={this.alterEnvironment}
        />
      </div>
    )
  }
}
