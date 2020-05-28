import React from 'react';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: []
	}

	conponentDidMount() {
		octokit.repos.listForUser({
			username: '6thSence'
		}).then(({ data }) => {
			this.setState({
				repoList: data,
				isLoading: false
			});
		});
	}

    render () {
    	const { isLoading, repoList } = this.state;
        return (
            <div className={styles.wrap}>
            	{ isLoading ?  <CircularProgress /> : " Привет! Я Ника :) Вот мои репозитории:" }
            	{ !isLoading && <ul>
            			{repoList.map(repo => (<li>
            					{repo.name}
            				</li>
            				) )}
            		</ul>}
            </div>
        )
    }
};

export default About;