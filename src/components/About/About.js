import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import { Octokit } from '@octokit/rest';


const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		fetchFailure: false,
		pageLimit: 3,
    countPages: 0,
    currentPage: 0,
    repoPageList: []
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

			this.setState({
			  repoPageList: this.state.repoList.slice(0, this.state.pageLimit),
			  countPages: Math.ceil(this.state.repoList.length / this.state.pageLimit)
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

	onChangePagination(event, value) {
    this.setState({
      currentPage: value,
      repoPageList: this.state.repoList.slice((value - 1) * this.state.pageLimit, ((value - 1) * this.state.pageLimit + this.state.pageLimit))
    });
	}

	render() {
		const { isLoading, repoList, fetchFailure, repoPageList, countPages } = this.state;

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
					<h2 className={styles.text1}>Марина Михайлова</h2>
					<h2 className={styles.text2}>login: {this.state.login}</h2>
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
				<div className={styles.pagination}>
				  <Pagination
					  count={countPages}
						color="primary"
						onChange={this.onChangePagination.bind(this)} />
				</div>
			</div>
		);
	}
}

export default About;
