import React from "react";
// import { connect } from "react-redux";
import {inc, dec, rnd} from '../action';
// import { bindActionCreators } from "redux";
// import { Component } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primary">
        DEC
      </button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        INC
      </button>
      <button onClick={() => dispatch(rnd(counter))} className="btn btn-primary">
        RND
      </button>
    </div> 
    );
};

export default Counter;














// class Counter extends Component {
//   render() {
//     const {counter, inc, dec, rnd} = this.props;
//    return (
//     <div className="jumbotron">
//       <h1>{counter}</h1>
//       <button onClick={dec} className="btn btn-primary">
//         DEC
//       </button>
//       <button onClick={inc} className="btn btn-primary">
//         INC
//       </button>
//       <button onClick={rnd} className="btn btn-primary">
//         RND
//       </button>
//     </div> 
//     );
//   }
// }
 


// const mapStateToProps = (state) => {
//   return {
//     counter: state.value
//   }
// }
//  const mapDispatchToProps = (dispatch) => {
//   const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//   return {
//     inc,
//     dec,
//     rnd: () => {
//       const value =  Math.floor(Math.random() * 10);
//       rnd(value);
//     }
//     // inc: () => dispatch(inc()),
//     // dec: () => dispatch(dec()),
//     // rnd: () => {
//     //   const value = Math.floor(Math.random() * 10);
//     //   dispatch(rnd(value));
//     // }
//   }
//  }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);