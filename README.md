# Simple resume generator
This is a simple resume generator app that takes a JSON object with a specific schema and renders a resume.

The JSON schema is as follows (or you can take a look at the sample `resume.JSON`):

```json
{
    "resume-width": "HTML length; such as 50rem",
    "resume-header": {
        "full-name": "Your name",
        "title": "Any secondary title/name",
        "contact-info": {
            "phone": "Your phone number: this will be placed in an anchor tag with a 'tel:' href",
            "email": "Your email: this will be placed in an anchor tag with a 'mailto:' href",
            "linkedin": "The path to your LinkedIn profile",
            "github": "Your GitHub username"
        }
    },
    "resume-body": {
        "skills": [
            {
                "skill-type": "Skill type A",
                "skill-items": [
                    "skill A1", "skill A2", "..."
                ]
            },
            {
                "skill-type": "Skill type B",
                "skill-items": [
                    "skill B1", "skill B2", "..."
                ]
            },
        ],
        "education": [
            {
                "school-name": "School name",
                "timeline": "When did you start? When did you graduate?",
                "highlights": [
                    "A degree", "A second degree", "GPA XXX"
                ]
            }
        ],
        "employments": [
            {
                "title": "Some title",
                "timeline": "When did you start? When did you finish?",
                "employer": "Name of employer",
                "location": "Location",
                "highlights": [
                    "I did this", "I did that"
                ]
            }
        ],
        "projects": [
            {
                "title": "Project title",
                "links": {
                    "github": "link to GitHub repo",
                    "aws": "link to deployed webpage",
                    "pypi": "link to PyPI",
                    "pdf": "link to some PDF"
                },
                "tech-stack": ["Python", "Java", "C++"],
                "highlights": [
                    "I did this", "I did that"
                ]
            }
        ]
    }
}
```