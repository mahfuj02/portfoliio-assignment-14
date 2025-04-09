# Portfolio Website

This is my portfolio website showcasing my projects, skills, and developer setup.

## Getting Started

These instructions will help you run the application locally using Docker.

### Prerequisites

- Docker installed on your local machine

### Running the Application

1. Clone the repository
git clone [(https://github.com/mahfuj02/portfoliio-assignment-14)]
cd [repository-folder]

2. Build the Docker image
docker build -t ahmed_mahfuj_coding_assignment14 .

3. Run the Docker container
docker run -d -p 5575:5575 --name ahmed_mahfuj_coding_assignment14 ahmed_mahfuj_coding_assignment14

4. Access the website
Open your browser and navigate to [http://localhost:5575](http://localhost:5575) or [http://127.0.0.1:5575](http://127.0.0.1:5575)

### Stopping the Container

To stop the container, run:
docker stop ahmed_mahfuj_coding_assignment14

### Removing the Container

To remove the container, run:

docker rm ahmed_mahfuj_coding_assignment14
