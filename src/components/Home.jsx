import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Our School</h1>
        <p className="lead">A brief introduction to the school.</p>
        <hr className="my-4" />
        <p>Key highlights or events of the school.</p>
      </div>
      <div className="row quick-links">
        <div className="col-md-4">
          <h2>Quick Link 1</h2>
        </div>
        <div className="col-md-4">
          <h2>Quick Link 2</h2>
        </div>
        <div className="col-md-4">
          <h2>Quick Link 3</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
