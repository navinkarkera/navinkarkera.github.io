module.exports = function (api) {
  api.loadSource(actions => {
    const experience = actions.addCollection('ExperienceData')

    experience.addNode({
      title: 'Lead Developer',
      subTitle: 'Digital Freedom Foundation',
      body: 'Started my career as a software developer in a start-up where I worked on everything related to a web application, from designing, development to deployment. The project was a Free and open source accountiog and inventory software called GNUKhata. Built it from scratch using Pyramid pylons framework, bootstrap, JQuery, Postgres, Docker etc.',
      period: 'Feb 2015 - Feb 2017'
    })

    experience.addNode({
      title: 'Senior Software Engineer',
      subTitle: 'Bank of America',
      body: 'Worked for Market Risk team solving architectural design issues and code level issues. Built complete systems for various projects solving complex problems ranging from complete automation of a manual process to re-engineering of complete projects from Java to Python platform. Initiated a project called Chat-Bot, built it from scratch using NLTK and Django rest framework, also integrated it with Skype for Business.',
      period: 'Feb 2017 - Jan 2018'
    })

    experience.addNode({
      title: 'UBS',
      subTitle: 'Python Automation Developer',
      body: `- Working on automating various internal processes using python and developing web applications for the same \n
    - Independently handled multiple projects \n
    - Worked in AGILE methodology which enabled me to connect with clients directly for testing and requirements \n
    - Working on automating multiple ETL processes using tools like Airflow. \n
    - Got to learn and apply basic machine learning algorithms for internal projects like ensuring data quality \n
    - Automated deployment processes \n
    - Conducted python workshops to help colleagues automate there daily tasks using python`,
      period: 'Jan 2018 - Present'
    })

  })
}
