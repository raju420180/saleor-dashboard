pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    stages {
        stage('vcs') {
            steps {
                git branch: 'main', url: 'https://github.com/raju420180/saleor-dashboard.git'
            }
        }
        stage('docker image build') {
            steps {
                sh 'docker image build -t rajugundala/workshop1234:DEV .'
            }
        }
        stage('push image to registry') {
            steps {
                sh 'docker image push rajugundala/workshop1234:DEV'
            }
        }
    }
}
