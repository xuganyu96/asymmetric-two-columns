function createResumeContainer(resume) {
    var resumeContainer = document.createElement('div')
    resumeContainer.className = 'resume-container'
    resumeContainer.style.width = resume['resume-width']

    return resumeContainer
}

function createHeaderFiller() {
    var headerFiller = document.createElement('div')
    headerFiller.className = 'header-filler'

    return headerFiller
}

function createFullNameContainer(resume) {
    var fullNameContainer = document.createElement('div')
    fullNameContainer.className = 'full-name-container'

    var fullNamePrimary = document.createElement('div')
    fullNamePrimary.className = 'full-name-title'
    fullNamePrimary.innerText = resume['resume-header']['full-name']

    var fullNameSecondary = document.createElement('div')
    fullNameSecondary.className = 'full-name-secondary'
    fullNameSecondary.innerText = resume['resume-header']['title']

    fullNameContainer.appendChild(fullNamePrimary)
    fullNameContainer.appendChild(fullNameSecondary)
    return fullNameContainer
}

function createContactInfoItem(href, iconClass, text) {
    /* Build from inside outward: icon, text, anchor, div */
    var icon = document.createElement('i')
    icon.className = iconClass 
    var span = document.createElement('span')
    span.innerText = text
    var anchor = document.createElement('a')
    anchor.className = 'contact-anchor'
    anchor.setAttribute('href', href)
    anchor.appendChild(icon)
    anchor.appendChild(span)
    var contactInfoItem = document.createElement('div')
    contactInfoItem.className = 'contact-info-item'
    contactInfoItem.appendChild(anchor)
    
    return contactInfoItem
}

function createContactInfo(resume) {
    const emailAddr = resume['resume-header']['contact-info']['email']
    const emailHRef = `mailto:${emailAddr}`
    const email = createContactInfoItem(emailHRef, 'far fa-envelope', emailAddr)

    const phoneNum = resume['resume-header']['contact-info']['phone']
    const phoneHRef = `tel:${phoneNum}`
    const phone = createContactInfoItem(phoneHRef, 'far fa-phone', phoneNum)

    const linkedInPath = resume['resume-header']['contact-info']['linkedin']
    const linkedInURL = `https://www.linkedin.com${linkedInPath}`
    const linkedIn = createContactInfoItem(linkedInURL, 'fab fa-linkedin', linkedInPath)

    const gitHubID = resume['resume-header']['contact-info']['github']
    const gitHubURL = `https://${gitHubID}.github.io`
    const gitHub = createContactInfoItem(gitHubURL, 'fab fa-github', gitHubID)

    const contactInfo = document.createElement('div')
    contactInfo.className = 'contact-info'
    contactInfo.appendChild(email)
    contactInfo.appendChild(phone)
    contactInfo.appendChild(linkedIn)
    contactInfo.appendChild(gitHub)
    return contactInfo
}

function renderResumeHeader(resume) {
    var resumeHeader = document.createElement('div')
    resumeHeader.className = 'resume-header-container'
    resumeHeader.appendChild(createHeaderFiller())
    resumeHeader.appendChild(createFullNameContainer(resume))
    resumeHeader.appendChild(createContactInfo(resume))

    return resumeHeader
}

function createSkillsSection(resume) {
    const skillsSectionTitle = document.createElement('div')
    skillsSectionTitle.className = 'section-title'
    skillsSectionTitle.innerText = 'Skills'

    var skillsSection = document.createElement('div')
    skillsSection.className = 'skill-section-container'
    skillsSection.appendChild(skillsSectionTitle)

    resume['resume-body']['skills'].forEach(function(skill){
        skillSubsectionTitle = document.createElement('div')
        skillSubsectionTitle.className = "section-subtitle"
        skillSubsectionTitle.innerHTML = skill['skill-type']
        
        skillSubsectionContainer = document.createElement('div')
        skillSubsectionContainer.className = 'skill-subsection-container'
        skillSubsectionContainer.appendChild(skillSubsectionTitle)

        var hlCollection = document.createElement('ul')
        hlCollection.className = 'browser-default'
        skill['skill-items'].forEach(function(skillItemHTML){
            var skillItem = document.createElement('li')
            skillItem.innerHTML = skillItemHTML
            hlCollection.appendChild(skillItem)
        })

        skillsSection.appendChild(skillSubsectionContainer)
        skillsSection.appendChild(hlCollection)
    })
    return skillsSection
}

function createEducationSection(resume) {
    const educationSectionTitle = document.createElement('div')
    educationSectionTitle.className = 'section-title'
    educationSectionTitle.innerText = 'Education'

    var educationSection = document.createElement('div')
    educationSection.className = 'education-section-container'
    educationSection.appendChild(educationSectionTitle)

    resume['resume-body']['education'].forEach(function(education){
        console.log(education)
        educationSubsectionTitle = document.createElement('div')
        educationSubsectionTitle.className = "section-subtitle"
        educationSubsectionTitle.innerHTML = `<span>${education['school-name']}</span>`

        educationSubsectionTimeline = document.createElement('div')
        educationSubsectionTimeline.className = 'education-item-container'
        educationSubsectionTimeline.innerHTML = `<span>${education['timeline']}</span>`
        
        educationSubsectionContainer = document.createElement('div')
        educationSubsectionContainer.className = 'education-subsection-container'
        educationSubsectionContainer.appendChild(educationSubsectionTitle)
        educationSubsectionContainer.appendChild(educationSubsectionTimeline)

        education['highlights'].forEach(function(highlight){
            highlightContainer = document.createElement('div')
            highlightContainer.innerHTML = `<span>${highlight}</span>`
            highlightContainer.className = 'education-item-container'
            educationSubsectionContainer.appendChild(highlightContainer)
        })

        educationSection.appendChild(educationSubsectionContainer)
    })
    return educationSection
}

function createSideSection(resume) {
    var sideSection = document.createElement('div')
    sideSection.className = 'side-section-container'

    sideSection.appendChild(createSkillsSection(resume))
    sideSection.appendChild(createEducationSection(resume))
    return sideSection
}

function createTitleTimeline(employment) {
    const jobTitle = document.createElement('div')
    jobTitle.className = 'section-subtitle'
    jobTitle.style.flexGrow = '1'
    jobTitle.innerText = employment['title']

    const jobTimeline = document.createElement('div')
    jobTimeline.innerText = employment['timeline']

    var titleTimeline = document.createElement('div')
    titleTimeline.className = 'title-timeline-container'
    titleTimeline.appendChild(jobTitle)
    titleTimeline.appendChild(jobTimeline)

    return titleTimeline
}

function createEmployerInfo(employment) {
    const employerName = document.createElement('div')
    employerName.style.flexGrow = '1'
    employerName.innerText = employment['employer']

    const employerLoc = document.createElement('div')
    employerLoc.innerText = employment['location']
    employerLoc.style.marginBottom = '0.5rem'

    var employerInfo = document.createElement('div')
    employerInfo.className = 'section-secondary'
    employerInfo.style.display = 'flex'
    employerInfo.appendChild(employerName)
    employerInfo.appendChild(employerLoc)

    return employerInfo
}

function createEmploymentHighlights(employment) {
    var highlightCollection = document.createElement('ul')
    highlightCollection.className = 'browser-default'
    employment['highlights'].forEach(function(hl){
        var hlItem = document.createElement('li')
        hlItem.innerHTML = `<p>${hl}</p>`
        hlItem.className = 'highlight-item'
        highlightCollection.appendChild(hlItem)
    })

    var employmentHighlights = document.createElement('div')
    employmentHighlights.className = 'employment-highlight-container'
    employmentHighlights.appendChild(highlightCollection)

    return employmentHighlights
}

function createEmploymentSection(resume) {
    var employmentSectionTitle = document.createElement('div')
    employmentSectionTitle.className = 'section-title'
    employmentSectionTitle.innerText = 'Professional experience'

    var employmentSectionContainer = document.createElement("div")
    employmentSectionContainer.className = 'employment-section-container'
    employmentSectionContainer.appendChild(employmentSectionTitle)

    resume["resume-body"]["employments"].forEach(function(employment){
        console.log(employment)
        // The first line consists of title and timeline
        var titleTimeline = createTitleTimeline(employment)
        var employerInfo = createEmployerInfo(employment)
        var highlights = createEmploymentHighlights(employment)
        
        var employmentContainer = document.createElement('div')
        employmentContainer.className = 'employment-subsection-container'
        employmentContainer.appendChild(titleTimeline)
        employmentContainer.appendChild(employerInfo)
        employmentContainer.appendChild(highlights)
        
        employmentSectionContainer.appendChild(employmentContainer)
    })

    return employmentSectionContainer
}

function createProjectTitleLinks(project) {
    var title = document.createElement('div')
    title.className = 'section-subtitle'
    title.style.flexGrow = '1'
    title.innerText = project['title']

    var titleLinks = document.createElement('div')
    titleLinks.style.display = 'flex'
    titleLinks.appendChild(title)

    if (project['links'].hasOwnProperty('github')) {
        var icon = document.createElement('i')
        icon.className = 'fab fa-github'
        var anchor = document.createElement('a')
        anchor.appendChild(icon)
        anchor.href = project['links']['github']
        var link = document.createElement('div')
        link.appendChild(anchor)
        link.style.margin = '0rem 0.2rem'
        titleLinks.appendChild(link)
    }
    if (project['links'].hasOwnProperty('aws')) {
        var icon = document.createElement('i')
        icon.className = 'fab fa-aws'
        var anchor = document.createElement('a')
        anchor.appendChild(icon)
        anchor.href = project['links']['aws']
        var link = document.createElement('div')
        link.appendChild(anchor)
        link.style.margin = '0rem 0.2rem'
        titleLinks.appendChild(link)
    }
    if (project['links'].hasOwnProperty('pypi')) {
        var icon = document.createElement('i')
        icon.className = 'fab fa-python'
        var anchor = document.createElement('a')
        anchor.appendChild(icon)
        anchor.href = project['links']['pypi']
        var link = document.createElement('div')
        link.appendChild(anchor)
        link.style.margin = '0rem 0.2rem'
        titleLinks.appendChild(link)
    }
    if (project['links'].hasOwnProperty('pdf')) {
        var icon = document.createElement('i')
        icon.className = 'fas fa-file-pdf'
        var anchor = document.createElement('a')
        anchor.appendChild(icon)
        anchor.href = project['links']['pdf']
        var link = document.createElement('div')
        link.appendChild(anchor)
        link.style.margin = '0rem 0.2rem'
        titleLinks.appendChild(link)
    }
    return titleLinks
}

function createProjectTechStack(project) {
    var techStack = document.createElement('div')
    techStack.className = 'tech-stack'

    project['tech-stack'].forEach(function(tech){
        var techItem = document.createElement('div')
        techItem.className = 'tech-item'
        techItem.innerText = tech

        techStack.appendChild(techItem)
    })

    return techStack
}

function createProjectHighlights(project) {
    var highlightCollection = document.createElement('ul')
    highlightCollection.className = 'browser-default'
    project['highlights'].forEach(function(hl){
        var hlItem = document.createElement('li')
        hlItem.innerHTML = `<p>${hl}</p>` 
        hlItem.className = 'highlight-item'
        highlightCollection.appendChild(hlItem)
    })

    var projectHLs = document.createElement('div')
    projectHLs.className = 'project-highlight-container'
    projectHLs.appendChild(highlightCollection)

    return projectHLs
}

function createProjectSection(resume) {
    var projectSectionTitle = document.createElement('div')
    projectSectionTitle.className = 'section-title'
    projectSectionTitle.innerText = "Software Engineering Projects"

    var projectSectionContainer = document.createElement("div")
    projectSectionContainer.className = 'project-section-container'
    projectSectionContainer.appendChild(projectSectionTitle)

    resume['resume-body']['projects'].forEach(function(project){
        console.log(project)
        const titleLinks = createProjectTitleLinks(project)
        const techStack = createProjectTechStack(project)
        const highlights = createProjectHighlights(project)

        var projectContainer = document.createElement('div')
        projectContainer.className = 'project-subsection-container'
        projectContainer.appendChild(titleLinks)
        projectContainer.appendChild(techStack)
        projectContainer.appendChild(highlights)

        projectSectionContainer.appendChild(projectContainer)
    })
    return projectSectionContainer
}

function createMainSection(resume) {
    var mainSection = document.createElement('div')
    mainSection.className = 'main-section-container'

    mainSection.appendChild(createEmploymentSection(resume))
    mainSection.appendChild(createProjectSection(resume))
    return mainSection
}

function renderResumeBody(resume) {
    var resumeBody = document.createElement('div')
    resumeBody.className = 'resume-body-container'
    resumeBody.appendChild(createSideSection(resume))
    resumeBody.appendChild(createMainSection(resume))

    return resumeBody
}

function createResume(resume) {
    /*
    Given a resume JSON, render the entire resume. The rendering will take
    place in the following procedure
    1.  Create the pageview container and append to children to the pageview
        container: "resume-header", "resume-body"
    2.  Render resume-header
        a.  append three children: filler, name, contact-info
        b.  append two chidlren to name: full-name and title
        c.  there are precisely 4 items among contact-info:
            phone, email, LinkedIn (points to homepage), and GitHub (points 
            GitHub.io)
    3.  Render resume-body
        a.  Append two children: a side-section (width 30%) and a main-section 
            (width 70%)
        b.  Under the side section, append the skill section and the education
            section
        c.  Under the main section, append the employments section and the 
            project section
    
    return the resumeContainer with the appropriate elements filled out
    */
    const resumeContainer = createResumeContainer(resume)
    resumeContainer.appendChild(renderResumeHeader(resume))
    resumeContainer.appendChild(renderResumeBody(resume))

    return resumeContainer
}

function renderRemoteResume(resumeURL) {
    fetch(resumeURL)
    .then(resp => {
        if(resp.ok) {
            // If the response is okay, don't resolve just yet; we might still need to wait for data;
            // return the json() method call, which itself is a Promise, and let it resolve on its own
            return resp.json();
        } else {
            const errMsg = `${url} responded with status ${resp.status}`;
            // reject(Error(errMsg));
        }
    })
    .then(data => {
      var resumeContainer = createResume(data);
      document.body.appendChild(resumeContainer);
    })
    .catch(err => {
        // reject(Error(err));
    })
}
