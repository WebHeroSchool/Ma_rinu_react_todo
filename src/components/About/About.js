import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		fetchFailure: false
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'MarinaMix'
		}).then(({ data }) => {
			this.setState({
				repoList: data,
				isLoading: false,
				login: data[0].owner.login,
				avatarUrl: data[0].owner.avatar_url
			});
		}).catch(err => {
			this.setState({
				fetchFailure: true,
				error: err,
				errorText: 'Ошибка!',
				isLoading: false
		  })
	  })
	}

	render() {
		const { isLoading, repoList, fetchFailure } = this.state;

		if (this.state.fetchFailure) {
			return (<div className={styles.wrap}>
				<h1 className={styles.title}>{this.state.errorText}</h1>
				<div>{this.state.error.name}</div>
			</div>);
		}

		return (
			<div className={styles.wrap}>
			  <div>
				  <h1 className={styles.title}>{ isLoading ? <CircularProgress /> : 'Мои репозитории:' }</h1>
				  <h2 className={styles.text}>{this.state.login}</h2>
				</div>
				<img
					className={styles.avatar}
					src={this.state.avatarUrl}
					/>

				{!isLoading && <ol>
				  {repoList.map(repo => (<li key={repo.id} className={styles.repo__id}>
						<a href={repo.html_url} target='_blank'>{repo.name}</a>
					</li>))}
				</ol>}
			</div>
		);
	}
}

export default About;
