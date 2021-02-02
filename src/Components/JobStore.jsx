import React, { Component } from "react";
import { getJobResults } from "./Lib/fetches/jobs.js";
import { JobList } from "./JobList";
import JobDetail from "./JobDetail";

class JobStore extends Component {
  state = {
    jobSelected: null,
    loading: true,
    error: false,
  };

  componentDidMount = async () => {
    await getJobResults("React", "Berlin");
  };

  changeBook = id => this.setState({ jobSelected: id });

  render() {
    return (
      <div className="row">
        <BookList
          bookSelected={this.state.bookSelected}
          changeBook={this.changeBook}
          books={books}
        />
        <BookDetail
          bookSelected={this.state.bookSelected}
          books={books}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}

export default BookStore;
