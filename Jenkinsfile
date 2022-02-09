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
                bat 'git config --global user.email "jenkins@localhost"'
                bat 'git config --global user.name "jenkins"'
                bat 'git merge origin/release'
                bat 'git commit -m "merging dev to release"'
                bat 'git push origin release'
            }
        }
    }
}
