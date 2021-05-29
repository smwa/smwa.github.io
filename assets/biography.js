var biographyText = "";

function put(text) {
    biographyText += text;
}

put("<h2>Michael Smith</h2>");
put("Oklahoma City, Oklahoma, United States\n\n");

put("<h3>Skills</h3>");
var skills = [
    ["PHP(10 years)", ["Zend Framework", ["Working with", ["Message queues", "Databases", "Memory stores"]]]],
    ["Relational Databases(10 years)", ["MySQL", "PostgreSQL"]],
    ["Linux Administration(8 years)", [
        "NGINX/Apache",
        "Firewalls",
        "VPN Setup",
        "Container Creation and Management",
        "Git Server"
    ]],
    ["Python", ["Django", "Tensorflow"]],
    ["HTML/JavaScript"],
];
skills.forEach(function(skill){
    put("<ul><li>" + arrayToHtml(skill) + "</li></ul>\1");
});


put("\n");


put("<h3>Employment</h3>\1");
var employments = [
    ["Paycom(7 years)", [
        ["Senior Developer", [
            "PHP/Zend",
            "MySQL",
            "Windows Server",
            "Scrum-based Agile",
            "Elasticsearch",
            "Scaling distributed systems"
        ]],
        ["Team Leader for 6 developers"],
    ]],
];
employments.forEach(function(employment){
    put("<ul><li>" + arrayToHtml(employment) + "</li></ul>\1");
});


put("\n");


put("<h3>Education</h3>\1");
var educations = [
    ["Bachelor of Computer Science<br>  from <a href='https://go.okstate.edu/' target='_blank'>Oklahoma State University</a>", [
        "Information Security and Assurance Club",
        "Collegiate Cyber Defense",
        "Theta Chi Fraternity",
        "Mobile App Development"
    ]],
    ["Master of Computer Science<br>  from <a href='https://go.okstate.edu/' target='_blank'>Oklahoma State University</a>", [
        "Project lead on \"Course Prerequisite\" project",
        "Project Management",
    ]],
];
educations.forEach(function(education){
    put("<ul><li>" + arrayToHtml(education) + "</li></ul>\1");
});

put("\n");

put("<h3>Notable Projects</h3>\1");
var projects = [
    ['<a href="https://github.com/smwa/courses" target="_blank">Course Prerequisite Confirmation</a>', [
        'Built for the Spears School of Business, this project helps the college by creating a report of each student that has failed a course that is a prerequisite for a course that they are registered in for the following semester',
        'Uses Spark Java Web Server',
        'Uses SQLite database',
        'I Built custom framework to improve collaboration',
        'I led the team of 3 developers'
    ]],
];
projects.forEach(function(item){
    put("<ul><li>" + arrayToHtml(item) + "</li></ul>\1");
});

put("\n\n");

put("help\0");


function arrayToHtml(array) {
    if (typeof array === "string") {
        return array;
    }
    var html = array[0];
    if (array[1]) {
        html += "<ul><li>" + array[1].map(arrayToHtml).join("</li><li>") + "</li></ul>";
    }
    return html;
}
