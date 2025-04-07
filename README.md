# Portfolio Website

This is my portfolio website showcasing my projects, skills, and developer setup.

## Getting Started

These instructions will help you run the application locally using Docker.

### Prerequisites

- Docker installed on your local machine

### Running the Application

1. Clone the repository
git clone [repository-url]
cd [repository-folder]

2. Build the Docker image
docker build -t lastName_firstName_coding_assignment14 .

3. Run the Docker container
docker run -d -p 5575:5575 --name lastName_firstName_coding_assignment14 lastName_firstName_coding_assignment14

4. Access the website
Open your browser and navigate to [http://localhost:5575](http://localhost:5575) or [http://127.0.0.1:5575](http://127.0.0.1:5575)

### Stopping the Container

To stop the container, run:
docker stop lastName_firstName_coding_assignment14

### Removing the Container

To remove the container, run:

docker rm lastName_firstName_coding_assignment14
