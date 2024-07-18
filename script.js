document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');

    const commands = {
        help: 'Available commands: help, about, skills, education, experience, contact, clear',
        about: 'Eeshan Pradeep Manja: Programming Enthusiast, highly motivated and eager to start a career.',
        skills: 'Skills: C/C++, Python, AWS Cloud, SQL, Snowflake, HTML, CSS, Django, JavaScript, Problem Solving',
        education: `Education:\n- The National Institute of Engineering, Mysore: BE, Electronics and Communication, CGPA: 7.3\n- Sharada PU College, Mangaluru: Pre-University, 89.16%\n- Sri Satya Sai Loka Seva Vidya Kendra, Alike, D.K: High School, 79%`,
        experience: `Internship:\n- National Institute of Technology, Suratkal: NITK - IEEE Photonics Student Internship Program, June 2022\n  Focused on designing a ring resonator for cancer cell detection using optiFDTD software.\n\nAdditional Experience:\n- XYZ Corporation: Software Development Intern, January 2023 - June 2023\n  Worked on developing and optimizing machine learning models for predictive analytics. Implemented various data processing pipelines and contributed to backend development using Python and Django.`,
        contact: 'Contact Info:\nPhone: <a href="tel:+919483975250">+91 9483975250</a>\nEmail: <a href="mailto:eeshanmanja2@gmail.com">eeshanmanja2@gmail.com</a>\nLocation: Sagar, Karnataka, India',
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
            output.innerHTML += `\n$ ${command}\nCommand not found. Type 'help' for a list of available commands.\n`;
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
    output.innerHTML = "Welcome to Eeshan Pradeep Manja's Portfolio\nType 'help' to see the list of available commands.\n";
});
