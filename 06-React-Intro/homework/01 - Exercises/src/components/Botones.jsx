import React from 'react';

class Botones extends React.Component{
  render(){
    return(
      <div>
        <button
          // onClick={() => console.log(this.props)}
          onClick={() => alert(this.props.alerts.m1)}
        >
          Módulo 1
        </button>
        <button
          // onClick={() => console.log(this.props)}
          onClick={() => alert(this.props.alerts.m2)}
        >
          Módulo 2
        </button>
      </div>
    )
  }
}

export default Botones;