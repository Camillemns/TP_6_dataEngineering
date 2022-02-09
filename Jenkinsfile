pipeline {
    agent any
    stages {
        stage('Docker compose') { 
            steps {
                bat 'docker-compose build'
            }
        }
        stage('Test') { 
            steps {
                bat 'docker-compose up -d'
            }
        }
        stage('Release') { 
            steps {
                git branch: 'dev',
                    url: 'https://github.com/Camillemns/TP_6_dataEngineering.git/'
                bat 'dir'
                bat 'git config --global user.email "jenkins@localhost"'
                bat 'git config --global user.name "jenkins"'
                bat 'git status'
                bat 'git branch'
                bat 'git checkout release'
                bat 'git merge dev'
                withCredentials([string(credentialsId: 'personal_access_token', variable: 'token')]) {
                    bat 'git push https://%token%@github.com/Camillemns/TP_6_dataEngineering.git'
                }
            }
        }
    }
}
