'use strict';

function Homepage(props) {
  return (<React.Fragment>
  <h2>{props.message}</h2>
  <p><a href= "/cards">CARDS</a></p>
  <img src="/static/img/balloonicorn.jpg" />
  </React.Fragment>
  );
};

ReactDOM.render(<Homepage message="Hi there!"/>, document.querySelector('#app'));
