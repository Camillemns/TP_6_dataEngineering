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
                bat 'git merge origin/release'
                bat 'git commit -m "merging dev to release"'
                bat 'git push origin release'
            }
        }
    }
}
