pipeline {
    agent any
    stages {
        stage('Docker compose') { 
            steps {
                bat 'docker-compose build'
                bat 'docker-compose up -d'
            }
        }
        stage('Test') { 
            steps {
                bat 'npm test'
            }
        }
        stage('Release') { 
            steps {
                bat 'git merge release'
                bat 'git commit -m "merging dev to release"'
                bat 'git push origin release'
            }
        }
    }
}