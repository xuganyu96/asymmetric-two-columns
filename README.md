# A2C (Asymmetric two-column)
A2C is a Jekyll theme that allows you to write a resume with YAML!

You can write in the front matter of your HTML or in your global `_config.yml`, under the key `resume`. You can use HTML markup to apply additional styling within the YAML object but they should be used sparingly since it might produce undefined behavior. Make sure to include `layout: a2c` in the front matter.

```yaml
resume:
  name: Your name
  title: Your title
  contacts:
    - href: "tel:1234567890"
      bi-icon: bi-telephone
      text: "123-456-7890"
    - href: "mailto:your@email.com"
      bi-icon: bi-envelope
      text: "your@email.com"
    - href: "https://github.com/github_username"
      bi-icon: bi-github
      text: "github_username"
    - href: "https://linkedin.com/in/linkedin-username"
      bi-icon: bi-linkedin
      text: "/in/linkedin-username"
  skills:
    - skill 1
    - skill 2
    - <strong>highlighted skill</strong>
  education:
    - school: Your school
      duration: From when to when
      degrees:
      - degree 1
      - degree 2
      gpa: "0.123"
  experiences:
    - title: "Job title 1"
      duration: "Job duration"
      employer: "Employer name"
      location: "Earth, Solar system"
      highlights:
      - highlight 1
      - highlight 2
    - title: "Job title 2"
      duration: "Job duration"
      employer: "Employer name"
      location: "Earth, Solar system"
      highlights:
      - highlight 1
      - highlight 2
  projects:
    - title: project title 1
      url: project url
      highlights:
      - highlight 1
      - highlight 2
    - title: project title 2
      url: project url
      highlights:
      - highlight 1
      - highlight 2
```
