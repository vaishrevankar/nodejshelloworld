pipeline {
    agent any
      tools {nodejs "NodeJS"}

    //environment {
        //CI = 'true'
    //}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        //stage('Lint') {
            //steps {
                //sh 'npm run lint'
            //}
        //}
        
        stage('Code Coverage'){
            steps {
            sh 'npm run test-with-coverage'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }
        
    }
}
