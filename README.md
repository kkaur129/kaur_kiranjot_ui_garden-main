# Portfolio Website - Assignment 14

## Student Information

- **Name:** Kiranjot Kaur
- **Assignment:** Coding Assignment 14 - Portfolio Website Deployment

## Project Overview

This is a dockerized Create React App portfolio website that showcases course work and projects. The application is deployed using Docker with Nginx as the web server, running on port 5575.

## Technologies Used

- React.js (Create React App)
- Docker
- Nginx
- Node.js 18
- Multi-stage Docker build

## Prerequisites

Before running this application, ensure you have the following installed:

- Docker Desktop
- Docker Compose

## Installation & Setup Instructions

### Step 1: Navigate to Project Directory

cd path/to/kaur_kiranjot_ui_garden-main

### Step 2: Build the Docker Image

docker build -t kaur_kiranjot_coding_assignment14 .

This command will:

- Create a multi-stage build
- Install all dependencies
- Build the production version of the React app
- Configure Nginx to serve the application on port 5575

### Step 3: Run the Docker Container

docker run -d -p 5575:5575 --name kaur_kiranjot_coding_assignment14 kaur_kiranjot_coding_assignment14

**Flags explanation:**

- `-d`: Run container in detached mode (background)
- `-p 5575:5575`: Map port 5575 from container to host
- `--name`: Assign the required container name

### Step 4: Access the Application

Open your web browser and navigate to:

- http://localhost:5575
- http://127.0.0.1:5575

## Docker Container Management

### View Running Containers

docker ps

### View All Containers (including stopped)

docker ps -a

### Stop the Container

docker stop kaur_kiranjot_coding_assignment14

### Start the Container

docker start kaur_kiranjot_coding_assignment14

### Remove the Container

docker rm kaur_kiranjot_coding_assignment14

### Remove the Image

docker rmi kaur_kiranjot_coding_assignment14

### View Container Logs

docker logs kaur_kiranjot_coding_assignment14

### Access Container Shell (for debugging)

docker exec -it kaur_kiranjot_coding_assignment14 sh

## Portfolio Website Sections

The portfolio website includes the following sections as per assignment requirements:

### 1. Basic Information

- Work title
- Description
- Project images
- Links to live demos/repositories
- Technology stack list

### 2. Skills

- Description of technical skills
- Programming languages and frameworks
- Development tools
- Additional resources

### 3. Developer Setup

- VS Code configuration
- Terminal setup
- Preferred editor fonts and themes
