resume = {
    "resume-width": "60rem",
    "resume-header": {
        "full-name": "Ganyu (Bruce) Xu",
        "title": "Data Platform Engineer",
        "contact-info": {
            "phone": "+1-626-327-8890",
            "email": "xuganyu96@gmail.com",
            "linkedin": "/in/ganyu-bruce-xu/",
            "github": "xuganyu96"
        }
    },
    "resume-body": {
        "skills": [
            {
                "skill-type": "Data engineering",
                "skill-items": [
                    "<b>Python</b>",
                    "<b>Apache Airflow</b>",
                    "<b>pandas</b>",
                    "SQLAlchemy ORM",
                    "Jupyter"
                ]
            },
            {
                "skill-type": "Cloud infrastructure",
                "skill-items": [
                    "<b>Docker</b>", 
                    "AWS EC2, S3, ECS",
                    "DataDog"
                ]
            },
            {
                "skill-type": "Database & data Warehouse",
                "skill-items": [
                    "<b>AWS Athena</b>",
                    "MySQL & PostgreSQL"
                ]
            },
            {
                "skill-type": "Web development",
                "skill-items": [
                    "Flask & Django",
                    "HTML 5 & CSS 3",
                    "JavaScript ES6",
                    "UNIX shell scripting",
                    "Linux (Debian, CentOS)",
                    "RabbitMQ", 
                    "NginX",
                    "Go"
                ]
            }
        ],
        "education": [
            {
                "school-name": "UC Berkeley",
                "timeline": "Aug 2015 - May 2019",
                "highlights": [
                    "B.A. Mathematics", "B.A. Statistics", "GPA 3.464"
                ]
            }
        ],
        "employments": [
            {
                "title": "Data Engineer",
                "timeline": "July, 2019 - Present",
                "employer": "LeanTaaS Inc.",
                "location": "Santa Clara, CA",
                "highlights": [
                    "<b>Onboarded new customer worth more than $300k in annual revenue</b>",
                    "<b>Shortened customer onboarding from 12 to 4 weeks</b> by building horizontically scalable backend microservice that automates raw data schema validation",
                    "<b>Accelerated development cycle</b> by provisioning on-demand AWS infrastructure that enables developers to validate individual git branches in sandboxed testing environment",
                    "<b>Maximized Airflow task concurrency (up to 2000)</b> by contributing to and applying in-house Airflow Fargate executor plugin",
                    "<b>Increased on-demand ETL service availability</b> by introducing DataDog for monitoring performance metrics and service outage",
                    "<b>Halved production Airflow task scheduling wait time</b> after identifying performance bottleneck and resizing appropriate cloud infrastructure"
                ]
            }
        ],
        "projects": [
            {
                "title": "Chives exchange",
                "links": {
                    "github": "https://github.com/xuganyu96/chives-exchange",
                    "aws": "http://chives-exchange.brucexu.live/auth/login",
                    "pypi": "https://pypi.org/project/chives-exchange/"
                },
                "tech-stack": ["Flask", "RabbitMQ", "MySQL", "Docker", "NginX", "ChartJS"],
                "highlights": [
                    "Implemented stateless order matching engine that receives orders from RabbitMQ and writes transactions to SQL database",
                    "Implemented web UI using Flask, featuring simple user authentication, simulated stock trading, and market information with interactive stock chart",
                ]
            },
            {
                "title": "PyArchive",
                "links": {
                    "github": "https://github.com/xuganyu96/PyArchive-legacy"
                },
                "tech-stack": ["Django", "WebSocket", "AWS S3"],
                "highlights": [
                    "Implemented hybrid cloud file backup solution in which user uploads file through a web interface to a local caching device, which further backs up the file to AWS S3 in the background",
                    "Achieved effective disaster recovery using multipart file upload/download such that large file transfer can be interrupted with minimal progress loss",
                    "Integrated WebSocket into webserver and enabled admin users to execute custom Python script and receive real-time console output"
                ]
            },
            {
                "title": "Simple resume generator",
                "links": {
                    "github": "https://github.com/xuganyu96/simple-resume-generator"
                },
                "tech-stack": ["JavaScript", "HTML/CSS"],
                "highlights": [
                    "Simplified resume writing using JavaScript and HTML for layout and templated JSON for content",
                    "Rendered this resume that you are reading now"
                ]
            }
        ]
    }
}