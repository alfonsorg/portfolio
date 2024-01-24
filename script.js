var htmlElement = document.getElementById('html');

// Función para cambiar el idioma
function toggleLanguage() {
    // Verifica el idioma actual
    var currentLang = htmlElement.lang || 'es';

    // Cambia el idioma
    if (currentLang === 'es') {
        htmlElement.lang = 'en';
        updateContent('en');
    } else {
        htmlElement.lang = 'es';
        updateContent('es');
    }
}

// Función para actualizar el contenido según el idioma
function updateContent(language) {
    var translations = {
        'es': {
            'Language': 'English',
            'Header Title': 'Ing. en Sistemas Computacionales',
            'About Me': 'Acerca de mí',
            'About': 'Durante 8 años de experiencia laboral en el campo de la tecnología, he trabajado en proyectos desafiantes y he adquirido habilidades valiosas en programación, desarrollo web y diversas áreas más. Mi determinación y dedicación me han permitido alcanzar logros significativos, incluyendo el implementar proyectos en líneas de producción y crear desarrollos a la medida para clientes. También he tenido la oportunidad de trabajar en áreas no relacionadas al campo de la tecnología, lo cual me ha servido para ampliar mis habilidades en el ámbito laboral y me ha dado la oportunidad de liderar equipos de trabajo. Mi objetivo laboral es desarrollarme a corto y largo plazo dentro de una empresa que me ofrezca posibilidades de aprender nuevas tecnologías las cuales me ayuden a resolver problemas de una manera más eficiente.',
            'Technicall Skills': 'Habilidades Técnicas',
            'TS1': 'Lenguajes de programación: Python, C, Java, SQL, PHP, HTML, CSS, JavaScript',
            'TS2': 'Frameworks/Metodologías: Bootstrap, Rails, Django, Flask, WordPress, MVC, POO',
            'TS3': 'Plataformas: MAC OS (User), Windows XP (User), Windows 7 (User), Windows 8 (User), Windows 10 (User), iOS (User), Android (User)',
            'TS4': 'RDBMS: MySQL, Microsoft SQL Server',
            'Experience': 'Experiencia Laboral',
            'J1-Title': 'Desarrollador Web',
            'J1-Details': 'PreTech Mobile S.A. de C.V. | CDMX, México | Septiembre 2012 - Octubre 2013',
            'J1-Description': 'Desarrollar sitios web para diferentes clientes y diversos propósitos. Administración de bases de datos. Convertir archivos PSD en sitios web usando HTML/CSS. Implementar sitios web que interactúan con bases de datos.',
            'J2-Title': 'Practicante',
            'J2-Details': 'Bayer de México S.A. de C.V. | Lerma, México | Junio 2015 - Mayo 2016',
            'J2-Description': 'Desarrollar soluciones SCADA/MES utilizando el software Ignition. Proyecto de cálculo de OEE KPI para la división de Animal Health en la planta ubicada en Santa Clara (5 líneas de producción) utilizando el software Ignition.',
            'J3-Title': 'Asesor Externo',
            'J3-Details': 'Gobierno Municipal de San José del Rincón | San José del Rincón, México | Mayo 2016 - Enero 2021',
            'J3-Description': 'Encargado de la adquisición y administración de diversos proyectos, como: Videos y discurso para los informes de gobierno anuales, utilizando y operando drones DJI para video grabar la mayoría de las obras realizadas en el municipio y sus avances de obra, Diseño e instalación de centro de mando C2, adquisición e instalación de impresoras para todos los departamentos del municipio, etc.',
            'J4-Title': 'Propietario',
            'J4-Details': 'Don Fix | Toluca, México | Octubre 2021 - Julio 2023',
            'J4-Description': 'Emprendimiento dedicado a la reparación de celulares, laptops, tablets y dispositivos en general.',
            'J5-Title': 'Functionality Quality Assurance Tester',
            'J5-Details': 'Keywords Studios MX | CDMX, México | Agosto 2023 - Octubre 2023',
            'J5-Description': 'Pruebas y reportes de inconsistencias en diversos videojuegos y aplicaciones. Pruebas de regresión, desarrollo de Test Cases, pruebas Ad-Hoc, reporte de inconsistencias mediante Jira, etc.',
            'J6-Title': 'Software Developer',
            'J6-Details': 'Precise Translations | Remoto | Octubre 2023 - A la fecha',
            'J6-Description': 'Como Software Developer ejecuto proyectos de desarrollo de software, desde la concepción hasta la implementación. Mis responsabilidades abarcan diversas áreas, destacando:',
            'J6-Description1': '- Mantenimiento y Creación de Landing Pages: Diseño y desarrollo de landing pages a medida, asegurando una experiencia de usuario atractiva y funcional. Implementando mejoras continuas basadas en análisis de rendimiento y retroalimentación del usuario.',
            'J6-Description2': '- Desarrollo Completo de la vCard de la Empresa: Creación de una vCard personalizada que refleja la identidad de la empresa, utilizando tecnologías como PHP, HTML, CSS y JavaScript. Integrando características interactivas y de fácil acceso para los clientes y socios comerciales.',
            'J6-Description3': '- Gestión Integral del Desarrollo: Coordinación y ejecución de todas las fases del desarrollo, desde la planificación y diseño hasta la implementación y mantenimiento continuo. Colaboración estrecha con equipos internos y partes interesadas para comprender las necesidades y objetivos del proyecto.',
            'J6-Description4': '- Tecnologías Utilizadas: Amplio conocimiento y experiencia en PHP, HTML, CSS, JavaScript, AJAX, y otras tecnologías web. Integración efectiva de herramientas, frameworks y librerías para optimizar el rendimiento y la eficiencia del desarrollo.',
            'Projects': 'Proyectos Destacados',
            'P1-Title': 'Aplicación de Clima',
            'P1-Description': 'La Aplicación de Clima está desarrollada con HTML, CSS y JavaScript, utiliza la API de OpenWeatherMap para obtener información meteorológica en tiempo real.',
            'P1-View':'Ver Proyecto',
            'P2-Title': 'Juego de Adivinanzas',
            'P2-Description': 'Juego interactivo de adivinanzas en una aplicación web. Desarrollado con HTML, CSS y JavaScript. Presenta múltiples adivinanzas con verificación instantánea de respuestas.',
            'P2-View': 'Ver Proyecto',
            'P3-Title': 'Lista de Tareas',
            'P3-Description': 'La lista de tareas es una aplicación web desarrollada con HTML, CSS y JavaScript. Permite a los usuarios agregar, editar y eliminar tareas. La información se almacena localmente en el navegador utilizando el almacenamiento local.',
            'P3-View': 'View Project',

            'Education': 'Educación',
            'D1-Title' : 'Ing. en Sistemas Computacionales',
            'D1-Details' : 'Tecnológico de Monterrey Campus Toluca, Trunco (Octavo Semestre)',
            'D2-Title' : 'Idiomas',
            'D2-Details1' : 'Español: Nativo',
            'D2-Details2' : 'Inglés: Avanzado',
            'Other Skills' : 'Otras Habilidades'
        },
        'en': {
            'Language': 'Español',
            'Header Title': 'Computer Science Engineer',
            'About Me': 'About me',
            'About': 'During 8 years of work experience in the technology field, I have worked on challenging projects and acquired valuable skills in programming, web development, and various other areas. My determination and dedication allowed me to achieve significant professional goals, including implementing projects on production lines and creating tailor made developments for clients. I have also had the opportunity to work in areas not related to technology, which had helped me to expand my skills and had given me the opportunity to lead work teams. My professional objective is to collaborate with a company which offers me the possibility to learn new skills and technologies which allow me to solve problems more efficiently.',
            'Technicall Skills': 'Technical Skills',
            'TS1': 'Programming Languages: Python, C, Java, SQL, PHP, HTML, CSS, JavaScript',
            'TS2': 'Frameworks/Methodologies: Bootstrap, Rails, Django, Flask, WordPress, MVC, OOP',
            'TS3': 'Platforms: MAC OS (User), Windows XP (User), Windows 7 (User), Windows 8 (User), Windows 10 (User), iOS (User), Android (User)',
            'TS4': 'RDBMS: MySQL, Microsoft SQL Server',
            'Experience': 'Work Experience',
            'J1-Title': 'Web Developer',
            'J1-Details': 'PreTech Mobile S.A. de C.V. | CDMX, Mexico | September 2012 - October 2013',
            'J1-Description': 'Develop websites for several clients and diverse purposes. Database management. Convert PSD files into HTML/CSS websites. Implementing websites which interact with databases.',
            'J2-Title': 'Internship',
            'J2-Details': 'Bayer de México S.A. de C.V. | Lerma, Mexico | June 2015 - May 2016',
            'J2-Description': 'SCADA/MES solutions using Ignition software. OEE KPI calculation project for Animal Health division at Santa Clara site (five production lines) using Ignition software.',
            'J3-Title': 'External Consultant',
            'J3-Details': 'Municipal Government at San Jose del Rincon | San Jose del Rincon, Mexico | May 2016 - January 2021',
            'J3-Description': 'Acquisition and management of many projects, like: videos and speech for government annual reports using DJI drones to videotape almost all constructions made in the municipality, C2 center installation and design, printers acquisition and setup for all municipal departments, among many other activities.',
            'J4-Title': 'Owner',
            'J4-Details': 'Don Fix | Toluca, Mexico | October 2021 - July 2023',
            'J4-Description': 'Cellphone and computer repair business. As an owner I was in charge of every aspect of the business, from bringing new clients, to the repairs itself.',
            'J5-Title': 'Functionality Quality Assurance Tester',
            'J5-Details': 'Keywords Studios MX | CDMX, Mexico | August 2023 - October 2023',
            'J5-Description': 'Testing and reporting inconsistencies in several video games and applications. Regression testing, development of test cases, Ad-Hoc testing, reporting inconsistencies using Jira, etc.',
            'J6-Title': 'Software Developer',
            'J6-Details': 'Precise Translations | Remote | October 2023 - Present',
            'J6-Description': 'As a Software Developer, I execute software development projects from conception to implementation. My responsibilities span various areas, with key highlights including:',
            'J6-Description1': '- Maintenance and Creation of Landing Pages: Design and development of customized landing pages, ensuring an attractive and functional user experience. Implementing continuous improvements based on performance analysis and user feedback.',
            'J6-Description2': '- Development of the Company vCard: Creation of a customized vCard reflecting the company\'s identity, utilizing technologies such as PHP, HTML, CSS, and JavaScript. Integrating interactive and easily accessible features for clients and business partners.',
            'J6-Description3': '- Comprehensive Development Management: Coordination and execution of all development phases, from planning and design to implementation and continuous maintenance. Close collaboration with internal teams and stakeholders to understand project needs and objectives.',
            'J6-Description4': '- Technologies Used: Extensive knowledge and experience in PHP, HTML, CSS, JavaScript, AJAX, and other web technologies. Effective integration of tools, frameworks, and libraries to optimize performance and development efficiency.',
            'Projects': 'Featured Projects',
            'P1-Title': 'Weather Application',
            'P1-Description': 'The Weather Application was developed using HTML, CSS, and JavaScript. It makes a request to the OpenWeatherMap API to retrieve real-time weather information.',
            'P1-View': 'View Project',
            'P2-Title': 'Riddles',
            'P2-Description': 'Interactive riddles game on a web application. Developed with HTML, CSS, and JavaScript. Features multiple riddles with instant answer verification.',
            'P2-View': 'View Project',
            'P3-Title': 'To Do List',
            'P3-Description': 'The to-do list is a web application developed with HTML, CSS, and JavaScript. It allows users to add, edit, and delete tasks. Information is stored locally in the browser using local storage.',
            'P3-View': 'View Project',

            'Education': 'Education',
            'D1-Title' : 'Computer Science Engineer',
            'D1-Details' : 'Tecnologico de Monterrey Campus Toluca, Dropout (Eighth Semester)',
            'D2-Title' : 'Languages',
            'D2-Details1' : 'Spanish: Native',
            'D2-Details2' : 'English: Advanced',
            'Other Skills' : 'Other Skills'
        }
    };

    // Actualiza el texto según el idioma seleccionado
    document.querySelector('header button').innerText = translations[language]['Language'];
    document.getElementById('header-title').innerText = translations[language]['Header Title'];
    document.getElementById('about-title').innerText = translations[language]['About Me'];
    document.getElementById('about-text').innerText = translations[language]['About'];
    document.getElementById('technical-skills').innerText = translations[language]['Technicall Skills'];
    document.getElementById('t-skill1').innerText = translations[language]['TS1'];
    document.getElementById('t-skill2').innerText = translations[language]['TS2'];
    document.getElementById('t-skill3').innerText = translations[language]['TS3'];
    document.getElementById('t-skill4').innerText = translations[language]['TS4'];
    document.getElementById('experience-title').innerText = translations[language]['Experience'];
    document.getElementById('job1-title').innerText = translations[language]['J1-Title'];
    document.getElementById('job1-details').innerText = translations[language]['J1-Details'];
    document.getElementById('job1-description').innerText = translations[language]['J1-Description'];
    document.getElementById('job2-title').innerText = translations[language]['J2-Title'];
    document.getElementById('job2-details').innerText = translations[language]['J2-Details'];
    document.getElementById('job2-description').innerText = translations[language]['J2-Description'];
    document.getElementById('job3-title').innerText = translations[language]['J3-Title'];
    document.getElementById('job3-details').innerText = translations[language]['J3-Details'];
    document.getElementById('job3-description').innerText = translations[language]['J3-Description'];
    document.getElementById('job4-title').innerText = translations[language]['J4-Title'];
    document.getElementById('job4-details').innerText = translations[language]['J4-Details'];
    document.getElementById('job4-description').innerText = translations[language]['J4-Description'];
    document.getElementById('job5-title').innerText = translations[language]['J5-Title'];
    document.getElementById('job5-details').innerText = translations[language]['J5-Details'];
    document.getElementById('job5-description').innerText = translations[language]['J5-Description'];
    document.getElementById('job6-title').innerText = translations[language]['J6-Title'];
    document.getElementById('job6-details').innerText = translations[language]['J6-Details'];
    document.getElementById('job6-description').innerText = translations[language]['J6-Description'];
    document.getElementById('job6-description1').innerText = translations[language]['J6-Description1'];
    document.getElementById('job6-description2').innerText = translations[language]['J6-Description2'];
    document.getElementById('job6-description3').innerText = translations[language]['J6-Description3'];
    document.getElementById('job6-description4').innerText = translations[language]['J6-Description4'];
    document.getElementById('projects-title').innerText = translations[language]['Projects'];
    document.getElementById('project1-title').innerText = translations[language]['P1-Title'];
    document.getElementById('project1-description').innerText = translations[language]['P1-Description'];
    document.getElementById('project1-view').innerText = translations[language]['P1-View'];
    document.getElementById('project2-title').innerText = translations[language]['P2-Title'];
    document.getElementById('project2-description').innerText = translations[language]['P2-Description'];
    document.getElementById('project2-view').innerText = translations[language]['P2-View'];
    document.getElementById('project3-title').innerText = translations[language]['P3-Title'];
    document.getElementById('project3-description').innerText = translations[language]['P3-Description'];
    document.getElementById('project3-view').innerText = translations[language]['P3-View'];

    document.getElementById('education-title').innerText = translations[language]['Education'];
    document.getElementById('degree1-title').innerText = translations[language]['D1-Title'];
    document.getElementById('degree1-details').innerText = translations[language]['D1-Details'];
    document.getElementById('degree2-title').innerText = translations[language]['D2-Title'];
    document.getElementById('degree2-details1').innerText = translations[language]['D2-Details1'];
    document.getElementById('degree2-details2').innerText = translations[language]['D2-Details2'];
    document.getElementById('otherSkills-title').innerText = translations[language]['Other Skills'];
}

// Actualiza el contenido al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    var currentLang = htmlElement.lang || 'es';
    updateContent(currentLang);
});
