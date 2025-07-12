from portfolio_data.models import Summary, Education, WorkExperience, Certification, Project, Skill
from datetime import date

Summary.objects.create(content="Detail-oriented DevOps and Software Engineer skilled in automating CI/CD pipelines, optimizing deployments, and building scalable infrastructure. Passionate about advancing skills in Machine Learning to create innovative solutions.")

Education.objects.create(
    institution="University of Central Punjab, Lahore",
    degree="Bachelor of Software Engineering",
    start_date=date(2021, 10, 1),
    end_date=None,
    description="Major: Software Development, Minor: Data Science, CGPA: 3.88"
)
Education.objects.create(
    institution="Govt. College Township, Lahore",
    degree="Pre-Engineering",
    start_date=date(2019, 9, 1),
    end_date=date(2021, 10, 31),
    description=""
)

WorkExperience.objects.create(
    company="NanoByteTechnologies",
    position="Software Engineer (.NET Intern)",
    start_date=date(2024, 8, 1),
    end_date=date(2024, 10, 31),
    description="Developed web applications using C#, SQL, and .NET, contributing to robust application delivery."
)
WorkExperience.objects.create(
    company="Triminds Solution",
    position="Unity Junior Developer",
    start_date=date(2023, 2, 1),
    end_date=date(2023, 4, 30),
    description="Assisted in creating engaging 2D games using Unity assets."
)

Certification.objects.create(
    name="Machine Learning Specialization",
    issuing_organization="DeepLearning.ai & Stanford University",
    date_earned=date(2024, 1, 1)
)
Certification.objects.create(
    name="Deep Learning Specialization",
    issuing_organization="DeepLearning.ai",
    date_earned=date(2024, 6, 1)
)

Project.objects.create(
    name="CI/CD Pipeline Automation",
    description="Developed an automated CI/CD pipeline using GitHub Actions to streamline build, test, and deployment processes."
)
Project.objects.create(
    name="TODO List",
    description="Designed a dynamic to-do web application using PHP and MySQL with CRUD operations."
)

skills = ["Version Control/Git", "CI/CD Automation", "Agile", "OOP", "Data Structures", "Machine Learning", "Python", "C#", "SQL", "Unity"]
for skill in skills:
    Skill.objects.create(name=skill)