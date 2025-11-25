import images from "./imageIndex";


const data = [
  {
    name: "Pong Arena",
    src: images[0],
    title: "1337 Cursus",
    carimages: [images[6], images[7], images[8], images[9], images[10]],
    header: "Pong Arena : Ping Pong Game App",
    description:
      "Pong Arena is a full-stack web application inspired by the classic Pong game, designed as a modern online multiplayer platform. It allows users to play in real time, chat, and manage their profiles within a secure and interactive web environment. The project features authentication with JWT or OAuth2, two-factor authentication (2FA), and real-time communication using WebSockets. Every component—from the backend and frontend to the database and reverse proxy—is containerized with Docker, ensuring a scalable, secure, and production-ready architecture",
    Languages: ['HTML', 'CSS' ,'JS', 'PostgreSQL', 'Docker', 'WebSockets', 'Django', 'Python'],
    link: 'https://github.com/Amine-Nova/ft_transcendence'
  },
  {
    name: "Inception",
    src: images[1],
    title: "1337 Cursus",
    carimages: [images[11], images[12], images[13]],
    header: "Inception : A Web Infrastructure",
    description: 'Inception is a comprehensive web infrastructure project that involves setting up a fully functional web server environment using Docker containers. The project includes the deployment of essential services such as Nginx as a reverse proxy, a MySQL database for data storage, and a WordPress application for content management. Each service is isolated within its own Docker container, ensuring modularity and ease of management. The infrastructure is designed to be robust, scalable, and secure, providing a solid foundation for hosting web applications and services.',
    Languages: ['Docker', 'Nginx', 'MySQL', 'WordPress', 'Bash'],
    link: 'https://github.com/Amine-Nova/Inception'
  },
  {
    name: "Cub3d",
    src: images[2],
    title: "1337 Cursus",
    header: "Cub3d : A 3D Game Engine",
    carimages: [images[14], images[15], images[16]],
    description: 'Cub3d is a 3D game engine project that focuses on creating a fully functional 3D rendering engine from scratch. The project involves implementing essential graphics programming concepts such as ray casting, 3D projection, and texture mapping. The engine is designed to be modular and extensible, allowing for the addition of new features and improvements over time. The goal of Cub3d is to provide a solid foundation for building 3D games and applications using modern programming techniques and best practices.',
    Languages: ['C', 'Raycasting', 'Graphics Programming', 'Textures'],
    link: 'https://github.com/Amine-Nova/Cub3d'
  },
  {
    name: "FT_IRC",
    src: images[3],
    title: "1337 Cursus",
    header: "FT_IRC : A Simple Chat Application",
    carimages: [images[17], images[18], images[19]],
    description: 'FT_IRC is a simple chat application that implements the Internet Relay Chat (IRC) protocol. The project involves creating both a server and a client that can communicate with each other using the IRC protocol. The server is responsible for managing user connections, channels, and message routing, while the client provides a user interface for sending and receiving messages. The application is designed to be lightweight and efficient, providing a seamless chat experience for users.',
    Languages: ['C++', 'Sockets', 'Networking', 'IRC Protocol'],
    link: 'https://github.com/Amine-Nova/FT_IRC'
  },
  {
    name: "MiniShell",
    src: images[4],
    title: "1337 Cursus",
    header: "MiniShell : A Shell Implementation",
    carimages: [images[22], images[21], images[20]],
    description: 'MiniShell is a project that involves creating a simple Unix shell implementation. The shell is responsible for interpreting user commands, managing processes, and providing a command-line interface for users to interact with the operating system. The project focuses on implementing essential shell features such as command parsing, job control, and built-in commands. The goal of MiniShell is to provide a lightweight and efficient shell environment that can be easily extended and customized.',
    Languages: ['C', 'Unix', 'Shell Scripting'],
    link: 'https://github.com/eyubech/minishell'
  },
  {
    name: "Push_Swap",
    src: images[5],
    title: "1337 Cursus",
    header: "Push_Swap : A Sorting Algorithm Visualizer",
    carimages: [images[25], images[24], images[23]],
    description: 'Push_Swap is a project that involves creating a sorting algorithm visualizer using two stacks. The project focuses on implementing a sorting algorithm that uses a limited set of operations to sort a list of integers. The visualizer provides a graphical representation of the sorting process, allowing users to see how the algorithm works in real time. The goal of Push_Swap is to provide an educational tool for understanding sorting algorithms and data structures.',
    Languages: ['C', 'Algorithms', 'Data Structures'],
    link: 'https://github.com/Amine-Nova/Push_Swap'
  },
  // {
  //   name: "",
  //   src: "",
  //   title: "",
  //   header: "",
  //   carimages: [],
  //   project: "",
  // },
  // {
  //   name: "",
  //   src: "",
  //   title: "",
  //   header: "",
  //   carimages: [],
  //   project: "",
  // },
  // {
  //   name: "",
  //   src: "",
  //   title: "",
  //   header: "",
  //   carimages: [],
  //   project: "",
  // },
  // {
  //   name: "",
  //   src: "",
  //   title: "",
  //   header: "",
  //   carimages: [],
  //   project: "",
  // },
  // {
  //   name: "",
  //   src: "",
  //   title: "",
  //   header: "",
  //   carimages: [],
  //   project: "",
  // },
  // {
  //   name: "",
  //   src: "",
  //   title: "",
  //   header: "",
  //   carimages: [],
  //   project: "",
  // },
  // {
  //   name: "",
  //   src: "",
  //   title: "",
  //   header: "",
  //   carimages: [],
  //   project: "",
  // },
  // {
  //   name: "",
  //   src: "",
  //   title: "",
  //   header: "",
  //   carimages: [],
  //   project: "",
  // },
  // {
  //   name: "",
  //   src: "",
  //   title: "",
  //   header: "",
  //   carimages: [],
  //   project: "",
  // },
];

export default data;