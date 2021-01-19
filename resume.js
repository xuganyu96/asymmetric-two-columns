resume = {
    "resume-width": "60rem",
    "resume-header": {
        "full-name": "Ganyu (Bruce) Xu",
        "title": "Data Engineer",
        "contact-info": {
            "phone": "+1-626-327-8890",
            "email": "xuganyu96@gmail.com",
            "linkedin": "/in/ganyu-bruce-xu-aa4b97112",
            "github": "xuganyu96"
        }
    },
    "resume-body": {
        "skills": [
            {
                "skill-type": "Python",
                "skill-items": [
                    "pandas",
                    "Apache Airflow",
                    "SQLAlchemy ORM",
                    "unittest & pytest",
                    "Flask & uWSGI",
                    "Django",
                    "Matplotlib",
                ]
            },
            {
                "skill-type": "Cloud & serverless architecture",
                "skill-items": [
                    "Docker", "DataDog", 
                    "AWS Serverless"
                ]
            },
            {
                "skill-type": "Database",
                "skill-items": [
                    "SQLite",
                    "MySQL & PostgreSQL",
                    "Presto (AWS Athena)"
                ]
            },
            {
                "skill-type": "Developer tools",
                "skill-items": [
                    "Python debugger (pdb) for remote Python debugging",
                    "curl for testing remote HTTP REST API",
                    "git", "vim"
                ]
            },
            {
                "skill-type": "Frontend",
                "skill-items": [
                    "HTML 5 & CSS 3:</br> Flexbox, bootstrap, MaterializeCSS",
                    "Vanilla JavaScript (ES5, ES6):</br> DOM manipulation, FetchAPI"
                ]
            },
            {
                "skill-type": "Distributed system architecture",
                "skill-items": [
                    "RabbitMQ", "Celery", "AWS SQS"
                ]
            },
            {
                "skill-type": "Hobbies & Interests",
                "skill-items": [
                    "Golang", "Java", "WebSocket", "NginX"
                ]
            }
        ],
        "education": [
            {
                "school-name": "U of California, Berkeley",
                "timeline": "Aug, 2015 - May, 2019",
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
                    "<b>Onboarded new customer</b> by coordinating with client IT staff to set up automated raw data extraction and scripting ETL pipeline in Airflow DAG",
                    "<b>Shortened customer onboarding timeline from 12 to 4 weeks</b> by designing, implementing, and maintaining web app module that allowed client IT staff to independently verify raw data schema and data extraction script and reduced manual email exchanges between client IT and product managers",
                    "<b>Reduced data error incidents and increased deployment confidence</b> by provisioning sandboxed environment that mirrored production infrastructure and configuration and enabled developers to perform end-to-end testing on ETL logic for individual git branches.",
                    "<b>Increased production Airflow availability and reliability</b> by introducing DataDog for monitoring outage, notifying on-call engineers, and idenifying abnormal performance slowdown.",
                    "<b>Experimented with fault-injection testing on production Airflow</b> and trained teammates on responding to production outage through simulated Airflow failures"
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
                    "<b>Designed and implemented horizontally-scalable matching engine</b> that can run in a cluster to increase performance and reliability",
                    "<b>Used Flask to provide web GUI</b> where users can create company, trade stocks, and even view stock charts",
                    "<b>Deployed containerized services to AWS EC2</b> behind NginX reverse proxy for increased security and web performance",
                    "Route network traffic through personal domain using <b>AWS Route 53</b>"
                ]
            },
            {
                "title": "PyArchive",
                "links": {
                    "github": "https://github.com/xuganyu96/PyArchive-legacy"
                },
                "tech-stack": ["Django", "WebSocket", "AWS S3"],
                "highlights": [
                    "Designed and implemented hybrid file backup solution resilient against network failure",
                    "<b>Experimented with WebSocket</b> for script execution from web with real-time output"
                ]
            },
            {
                "title": "InquireUSCIS",
                "links": {
                    "github": "https://github.com/xuganyu96/InquireUSCIS"
                },
                "tech-stack": ["Selenium"],
                "highlights": [
                    "<b>Scripted multithreaded headless Chrome sessions</b> for querying large number of USCIS applications' status"
                ]
            },
            {
                "title": "Simple resume generator",
                "links": {
                    "github": "https://github.com/xuganyu96/simple-resume-generator",
                    "pdf": "https://xuganyu96.github.io/resume.pdf"
                },
                "tech-stack": ["JavaScript", "HTML/CSS"],
                "highlights": [
                    "<b>Scripted JavaScipt app that renders pre-templated resume</b> from remote JSON object",
                    "<b>Rendered the resume you are reading right now</b>"
                ]
            }
        ]
    }
}