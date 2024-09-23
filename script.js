document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');
    const gameContainer = document.getElementById('game-container');
    const pacman = document.getElementById('pacman');

    const commands = {
        ls: 'Available commands: about, skills, education, experience, certificates, contact, clear, pacman',
        about: 'Hello there! I\'m Eeshan.\nI hold a Bachelor degree in Electronics and Communications from the National Institute of Engineering. ',
        skills: 'C, C++, Python, JavaScript, AWS Cloud, SQL, HTML, CSS, Shell Scripting, Cadence ( analog design )',
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
        clear: '',
        pacman: 'Starting the Pacman game. Use arrow keys to move!'
    };

    let pacmanPosition = { x: 0, y: 0 };
    const gridSize = 10;
    const walls = [];
    const foods = [];

    function initGame() {
        gameContainer.classList.remove('hidden');
        gameContainer.innerHTML = '';
        walls.length = 0;
        foods.length = 0;

        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            if (Math.random() < 0.2) {
                cell.classList.add('wall');
                walls.push(i);
            } else {
                cell.classList.add('food');
                foods.push(i);
            }
            gameContainer.appendChild(cell);
        }
        movePacman(pacmanPosition.x, pacmanPosition.y);
    }

    function movePacman(x, y) {
        pacman.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
    }

    function isWall(x, y) {
        const index = y * gridSize + x;
        return walls.includes(index);
    }

    function isFood(x, y) {
        const index = y * gridSize + x;
        if (foods.includes(index)) {
            foods.splice(foods.indexOf(index), 1);
            gameContainer.children[index].classList.remove('food');
        }
    }

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            handleCommand(command);
            commandInput.value = '';
        } else if (event.key === 'Tab') {
            event.preventDefault();
            autoCompleteCommand();
        }
    });

    function handleCommand(command) {
        if (commands.hasOwnProperty(command)) {
            if (command === 'clear') {
                output.innerHTML = '';
            } else if (command === 'pacman') {
                output.innerHTML += `\n$ ${command}\n${commands[command]}\n`;
                initGame();
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

    document.addEventListener('keydown', (event) => {
        let newX = pacmanPosition.x;
        let newY = pacmanPosition.y;

        if (event.key === 'ArrowUp' && newY > 0) {
            newY--;
        } else if (event.key === 'ArrowDown' && newY < gridSize - 1) {
            newY++;
        } else if (event.key === 'ArrowLeft' && newX > 0) {
            newX--;
        } else if (event.key === 'ArrowRight' && newX < gridSize - 1) {
            newX++;
        }

        if (!isWall(newX, newY)) {
            pacmanPosition = { x: newX, y: newY };
            movePacman(newX, newY);
            isFood(newX, newY);
        }
    });


    // Display welcome message
    output.innerHTML = "Welcome to Eeshan Pradeep Manja's Portfolio\nType 'ls' to see the list of available commands.\n";
});
