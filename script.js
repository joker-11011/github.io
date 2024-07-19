document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');

    const commands = {
        ls: 'Available commands: about, skills, education, experience, certificates, contact, clear',
        about: 'Hello! I\'m a Data Scientist.\nI hold a Bachelor degree in Electronics and Communications from the National Institute of Engineering, where I developed a strong foundation in data science methodologies and techniques. ',
        skills: 'C, C++, Python, JavaScript, AWS Cloud, SQL, HTML, CSS, Shell Scripting',
        education: `
<h>* commit Bachelor Degree</h>
| School: The National Institute of Engineering, Mysore
| Date:   2024
|
|     - Electronics and Communication
|     - CGPA: 7.41
|
<h>* commit Pre-University</h>
| School: Sharada PU College, Mangaluru
| Date:   2020
|
|     - Percentage: 89.16%
|
<h>* commit High School</h>
  School: Sri Satya Sai Loka Seva Vidya Kendra, Alike, D.K
  Date:   2018
 
      - Percentage: 79%
        `,
        experience: `
<h>* commit Data Scientist</h>
| Company: Knowledge Foundry Business Solutions
| Date:   July 2024 
|        
<h>* commit Intern</h>
| Company: Knowledge Foundry Business Solutions
| Date:   March 2024
|
|     - Developed a computer vision solutions using OpenCV, enhancing image processing and analysis capabilities.
|     - Utilized YOLO (You Only Look Once) for real-time object detection projects, improving detection accuracy and performance.
|     - Worked on different AWS cloud services.
|     - Gained hands-on experience in various stages of project development, from conceptualization to deployment.
|
<h>* commit IEEE Photonics Student Intern</h>
  Company: National Institute of Technology, Suratkal
  Date:   June 2022
 
      - Focused on designing a ring resonator for cancer cell detection using optiFDTD software.
        `,
        certificates: `
<a href="https://coursera.org/verify/DCZNHM8GD4G4">Supervised Machine Learning: Regression and Classification</a>
<a href="https://www.credly.com/badges/2f332fda-1a77-4e9f-8701-ada189e1db0c/linked_in_profile">AWS Knowledge: Cloud Essentials</a>
        `,

        contact: 'Phone: <a href="tel:+919483975250">+91 9483975250</a> Email: <a href="mailto:eeshanmanja2@gmail.com">eeshanmanja2@gmail.com</a>',
        clear: ''
    };

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            handleCommand(command);
            commandInput.value = '';
        } else if (event.key === 'Tab') {
            event.preventDefault(); // Prevent default tab behavior
            autoCompleteCommand();
        }
    });

    function handleCommand(command) {
        if (commands.hasOwnProperty(command)) {
            if (command === 'clear') {
                output.innerHTML = '';
            } else {
                output.innerHTML += `\n$ ${command}\n${commands[command]}\n`;
            }
        } else {
            output.innerHTML += `\n$ ${command}\nCommand not found. Type 'ls' for a list of available commands.\n`;
        }
        output.scrollTop = output.scrollHeight;
    }

    function autoCompleteCommand() {
        const input = commandInput.value;
        const matchingCommands = Object.keys(commands).filter(cmd => cmd.startsWith(input));
        if (matchingCommands.length === 1) {
            commandInput.value = matchingCommands[0];
        }
    }

    // Display welcome message
    output.innerHTML = "Welcome to Eeshan Pradeep Manja's Portfolio\nType 'ls' to see the list of available commands.\n";
});
