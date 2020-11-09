import React, { Component } from 'react';
import HistoryList from '../history/HistoryList';
import Controls from '../controls/Controls';
import Display from '../display/Display';
import { apiFetch } from '../../services/FetchAPI';

export default class RESTy extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    poorlyNamedHistoryAggregate: [],
    display: {}
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await this.handleFetch();

    return this.setState({
      poorlyNamedHistoryAggregate: [...this.state.poorlyNamedHistoryAggregate, {
        url: this.state.url,
        method: this.state.method,
        body: this.state.body,
        key: `${this.state.url}+{this.state.method}`
      }]
    });
  }

  handleFetch = () => {
    const { url, method, body } = this.state;
    return apiFetch(url, method, body)
      .then(res => this.setState({ display: res }));
  }

  render() {
    const { url, method, body, display, poorlyNamedHistoryAggregate } = this.state;

    return (
      <>
        <section>
          <div>
            <header>RESTy is the Besty</header>
            <HistoryList poorlyNamedHistoryAggregate={poorlyNamedHistoryAggregate} />
          </div>

          <div>
            <Controls
              url={url}
              method={method}
              body={body}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
          </div>
        </section>
      </>
    );
  }
}