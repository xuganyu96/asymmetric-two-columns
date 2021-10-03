resume = {
    "resume-width": "58rem",
    "resume-header": {
        "full-name": "Ganyu (Bruce) Xu",
        "title": "Software Engineer, Data Platform",
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
                "skill-type": "ETL pipeline",
                "skill-items": [
                    "<b>Python 3</b>",
                    "<b>Apache Airflow</b>",
                    "<b>pandas</b>",
                    "Data warehousing with<br><b>S3 + Parquet + Athena</b>",
                ]
            },
            {
                "skill-type": "Cloud infrastructure",
                "skill-items": [
                    "Amazon web services:<br>"
                    + "<b>Elastic Container Service</b><br>" 
                    + "<b>Fargate</b><br>"
                    + "<b>Lambda</b><br>"
                    + "<b>Simple Queuing Service</b><br>",
                    "Containerization (Docker)",
                    "DataDog"
                ]
            },
            {
                "skill-type": "Web development",
                "skill-items": [
                    "<b>Flask</b>",
                    "<b>MySQL, PostgreSQL</b><br>",
                    "SQLAlchemy",
                    "HTML, CSS, JavaScript"
                ]
            },
            {
                "skill-type": "Miscellaneous",
                "skill-items": [
                    "C, Go",
                    "Shell scripting",
                    "Vim"
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
                "title": "Software Engineer, Data Platform",
                "timeline": "July, 2019 - Present",
                "employer": "LeanTaaS Inc.",
                "location": "Santa Clara, CA",
                "highlights": [
                    // WakeMed ~600k, Woman's Hospital ~180K, Mount Nittany ~387k
                    "<b>Converted $1.1M+ contract into annual revenue</b> by implementing ETL pipeline from EHR backend database to internal analytics warehouse",
                    // Athena
                    "<b>Scaled raw data ingestation throughput</b> by migrating data storage from PostgreSQL to Apache Parquet on AWS S3 and AWS Athena",
                    // File validation worker
                    "<b>Shortened ETL implementation process from 12 to 4 weeks</b> by building scalable backend microservice that automates data schema validation",
                    // Branch build
                    "<b>Expanded regression testing infrastructure</b> by migrating testing environment from a single EC2 instance to container clusters on AWS ECS",
                    // Unit testing
                    "<b>Automated unit testing</b> by integrating pytest into deployment pipeline",
                    // DataDog for Airflow monitoring
                    "<b>Increased on-demand ETL service availability</b> by implementing service availability monitoring (DataDog) and engineer on-call alarms (PagerDuty)",
                    // Epic block utilization, CHS PICIS R&D, Meditech Expanse R&D
                    "<b>Reverse-engineered proprietary analytics/operational features</b> from EHR vendorts such as Epic, Meditech, and Picis",
                    // Managerial achievements
                    "Led a team of 8+ data engineers, providing mentorship for junior members while carrying out product vision from business and engineering leadership"
                ]
            }
        ],
        "projects": [
            {
                "title": "AWS ECS/Fargate Executor for Apache Airflow",
                "links": {
                    "github": "https://github.com/aelzeiny/airflow-aws-executors",
                    "pypi": "https://pypi.org/project/airflow-aws-executors/"
                },
                "tech-stack": ["AWS ECS/Fargate", "Apache Airflow"],
                "highlights": [
                    "Reduced server maintenance overhead and monetary cost from idle worker instances by leveraging serverless container deployment on AWS Fargate",
                    "Achieved superior parallelism for bursty workload compared to conventional EC2 auto-scaling solution, such as with the Celery Executor"
                ]
            },
            {
                "title": "Chives exchange",
                "links": {
                    "github": "https://github.com/xuganyu96/chives-exchange",
                    "pypi": "https://pypi.org/project/chives-exchange/"
                },
                "tech-stack": ["Flask", "RabbitMQ", "MySQL", "Docker", "NginX", "ChartJS"],
                "highlights": [
                    "Implemented stateless order matching engine that receives orders from RabbitMQ and writes transactions to SQL database",
                    "Implemented web UI using Flask, featuring simple user authentication, simulated stock trading, and market information with interactive stock chart",
                ]
            },
            // {
            //     "title": "PyArchive",
            //     "links": {
            //         "github": "https://github.com/xuganyu96/PyArchive-legacy"
            //     },
            //     "tech-stack": ["Django", "WebSocket", "AWS S3"],
            //     "highlights": [
            //         "Implemented hybrid cloud file backup solution in which user uploads file through a web interface to a local caching device, which further backs up the file to AWS S3 in the background",
            //         "Achieved effective disaster recovery using multipart file upload/download such that large file transfer can be interrupted with minimal progress loss",
            //         "Integrated WebSocket into webserver and enabled admin users to execute custom Python script and receive real-time console output"
            //     ]
            // },
            {
                "title": "Simple resume generator",
                "links": {
                    "github": "https://github.com/xuganyu96/simple-resume-generator"
                },
                "tech-stack": ["JavaScript", "HTML/CSS"],
                "highlights": [
                    "A fun learning experience for HTML/CSS Flexbox, DOM manipulation in plain JavaScript, and a single-page application design hosted on GitHub Pages",
                    "<b>This resume you are reading is created using this project</b>"
                ]
            }
        ]
    }
}