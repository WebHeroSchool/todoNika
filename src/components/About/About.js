import React from 'react';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
        isError: false,
        errorMessage: '',
        userInfo: [],
        user: 'nikakrash'
	};

	componentDidMount() {
        const { user } = this.state;

		octokit.repos.listForUser({
			username: user
		}).then(({ data }) => {
			this.setState({
                repoList: data,
                isLoading: false
            });
		})

        .catch(err => {
            this.setState({
                isError: true,
                errorMessage: 'Кажется, такого репоитория не существует',
                isLoading: false
            })
        });

        octokit.users.getByUsername({
            username: user
        }).then(({ data }) => {console.log(data);
            this.setState({
                userInfo: data,
                isLoading: false
            });
        })

        .catch(err => {
            this.setState({
                isLoading: false,
                isError: true,
                errorMessage: 'Кажется, такого репоитория не существует'
            });
        });
	}

    render () {
    	const { isLoading, repoList, isError, errorMessage, userInfo} = this.state;
        return (
            <div className={styles.wrap}>
            	{ isLoading ?  <CircularProgress /> : <div>Привет!</div> }

                <div className={styles.info}>
                    {!isError ? <div> Я {userInfo.bio}, мой логин на гитхабе {userInfo.login}</div> : '' }
                </div>
                
                {isError ? <div className={styles.error}>Ошибка: { errorMessage } </div> : 'А вот мои репозитории:'} 

            	{ !isLoading && <ul>
            			{repoList.map(repo => (<li>
            					<a href={repo.html_url} className={styles.link} target="_blank">
                                    {repo.name}
                                </a>
            				</li>
            				) )}
            		</ul>}
            </div>
        )
    }
};

export default About;