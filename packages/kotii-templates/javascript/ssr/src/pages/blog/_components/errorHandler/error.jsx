import React, { Component } from 'react';


class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    };
  }

  render() {
    return (
      <div className="blog__error">
        <section className="blog__error--container">
          <div className="blog__error--card-rect blog__error--card-rect-error bx-raised" />
          <div className="blog__error--card-rect blog__error--card-rect-error blog__error--card-rect-2 bx-raised" />
          <div className="blog__error--card-rect blog__error--card-rect-3 bx-raised">
            <p className="blog__error--card-rect-3-header">OOPS!</p>
            <p className="blog__error--card-rect-3-sub-header">Loading blog posts failed!</p>
            <p className="blog__error--card-rect-3-text">
              Sorry we are unable to load the blog posts as expected.
            </p>

            <button className="blog__error--card-btn">
              <span className="blog__error--card-btn-rect"></span>
              <span className="blog__error--card-btn-rect-2">
                <small>Please Try Again</small>
              </span>
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Error;
