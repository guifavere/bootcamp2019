import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssuesList, StateFilter } from './styles';

export default class Repository extends Component {
  constructor() {
    super();

    this.state = {
      repository: {},
      issues: [],
      issuesState: 'open',
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { issuesState } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: { state: issuesState, per_page: 5 },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleIssuesStateChange = async e => {
    const newIssuesState = e.target.value;
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: { state: newIssuesState, per_page: 5 },
    });

    this.setState({
      issues: issues.data,
      loading: false,
      issuesState: newIssuesState,
    });
  };

  render() {
    const { repository, issues, loading, issuesState } = this.state;

    if (loading) return <Loading>Carregando</Loading>;

    return (
      <Container>
        <Owner>
          <Link to="/">voltar aos repositórios</Link>
          <img
            alt={repository.owner.login}
            src={repository.owner.avatar_url}
            title={repository.owner.login}
          />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
          <StateFilter
            id="status"
            onChange={this.handleIssuesStateChange}
            value={issuesState}
          >
            <option value="all">Todos</option>
            <option value="open">Abertos</option>
            <option value="closed">Fechados</option>
          </StateFilter>
        </Owner>
        <IssuesList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img
                alt={issue.user.login}
                src={issue.user.avatar_url}
                title={issue.user.login}
              />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
