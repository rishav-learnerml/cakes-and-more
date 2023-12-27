import React from 'react'

class About extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  render(){
    const {name,location,description}=this.props;
    return (
      <div className="about-main">
        <h2>{name}</h2>
        <p>{location}</p>
        <p>{description}</p>
        <button onClick={()=>{
          this.setState({
            count:this.state.count+1
          })
        }}>click</button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}

export default About