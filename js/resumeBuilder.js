//create the biographical objects:

var education = {
    "schools": [
        {
            "name" : "The University of Hong Kong",
            "location" : "Pok Fu Lam, Hong Kong",
            "degree" : "Master of Philosophy",
            "majors" : "English",
            "dates" : "2007 - 2010",
            "url" : "http://www.hku.hk/"
        },
        {
            "name" : "The University of South Africa",
            "location" : "Pretoria, South Africa",
            "degree" : "Bachelor of Arts (Honours)",
            "majors" : "Applied Linguistics",
            "dates" : "2003 - 2005",
            "url" : "http://www.unisa.ac.za/"
        },
        {
            "name" : "The University of South Africa",
            "location" : "Pretoria, South Africa",
            "degree" : "Postgraduate Certificate in Education",
            "majors" : "Intermediate and Senior Phase Education, specializing in English acquisition (first and second language)",
            "dates" : "2006",
            "url" : "http://www.unisa.ac.za/"
        },
        {
            "name" : "Rhodes University",

            "location" : "Grahamstown, South Africa",
            "degree" : "Bachelor of Arts (Honours)",
            "majors" : "English Literature and Journalism &amp; Communication Studies",
            "dates" : "1997 - 2000",
            "url" : "https://www.ru.ac.za/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-End Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "January 2017 - ongoing",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title" : "HTML, JavaScript and CSS",
            "school" : "Coursera",
            "dates" : "November 2016 - January 2017",
            "url" : "https://www.coursera.org/learn/html-css-javascript/home/welcome"
        },
        {
            "title" : "Google Educator",
            "school" : "Google for Education",
            "dates" : "November 2014",
            "url" : "https://edu.google.com/"
        }
    ],
    display : function(){
        if (education.schools){
            $("#education").append(HTMLschoolStart);
            //loop through the array and output:
            for (var i = 0; i < education.schools.length; i++){
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
                formattedSchoolName = formattedSchoolName.replace("#", education.schools[i].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
                var formattedSchoolmajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
                var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
                $('.education-entry:last').append(formattedSchoolName);
                $('.education-entry:last').append(formattedSchoolDates);
                $('.education-entry:last').append(formattedSchoolLocation);
                $('.education-entry:last').append(formattedSchoolDegree);
                $('.education-entry:last').append(formattedSchoolmajors);
            }
        }
        if (education.onlineCourses){
            $('.education-entry').append(HTMLonlineClasses);
            //loop through the array and output
            for (var i = 0; i < education.onlineCourses.length; i++){
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[i].url);
                $('.education-entry:last').append(formattedOnlineTitle);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%","Curriculum");
                formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourses[i].url);
                $('.education-entry:last').append(formattedOnlineSchool);
                $('.education-entry:last').append(formattedOnlineDates);
                $('.education-entry:last').append(formattedOnlineURL);
            }
        }
    }
};

var bio = {
    "name" : "Dave Brown",
    "role" : "FrontEnd Ninja",
    "contacts" : {
        "mobile" : "<a href='tel:+85297382005' target='_blank'>(+852) 9738 2005</a>",
        "email" : "<a href='mailto:dave@davidbrownhk.com' target='_blank'>dave@davidbrownhk.com</a>",
        "twitter" : "<a href='https://twitter.com/davebza' target='_blank'>@DavebZa</a>",
        "github" : "<a href='https://github.com/davebza' target='_blank'>davebza</a>",
        "location" : "Hong Kong"
    },
    "picture" : "images/profilePic.jpg",
    "welcomeMessage" : "Hi there!",
    "skills" : ["HTML and CSS", "JavaScript", "Python", "Converting quality coffee to quality code"],
    display : function(){
        if (bio){
            formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
            formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
            formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
            $("#header").append(formattedHeaderName);
            $("#header").append(formattedHeaderRole);
            $("#header").append(formattedbioPic);
            $("#header").append(HTMLskillsStart);

            //Append contact details if they exist:
            if (bio.contacts.mobile){
                var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
                $("#topContacts").append(formattedMobile);
            }
            if (bio.contacts.email){
                var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
                $("#topContacts").append(formattedEmail);
            }
            if (bio.contacts.twitter){
                var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
                $("#topContacts").append(formattedtwitter);
            }
            if (bio.contacts.github){
                var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
                $("#topContacts").append(formattedgithub);
            }
            if (bio.contacts.location){
                var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
                $("#topContacts").append(formattedlocation);
            }
        }

        // Add skills to the page header:
        if (bio.skills){
            for (var key in bio.skills) {
                if (bio.skills.hasOwnProperty(key)){
                    formattedSkill = HTMLskills.replace("%data%", bio.skills[key]);
                    $("#skills").append(formattedSkill);
                }
            }
        }
    }
};

var work = {
    "jobs" : [
        {
            "employer" :"Education Bureau, Hong Kong",
            "title" : "NET teacher",
            "location" : "Hong Kong",
            "dates" : "2005 - present day",
            "description" : "Did stuff. It as awesome."
        },
        {
            "employer" :"The Open University of Hong Kong",
            "title" : "Lecturer  / Tutor",
            "location" : "Hong Kong",
            "dates" : "2015 - present day",
            "description" : "Did stuff. It as awesome."
        }
    ],
    display : function(){
        if(work){
            for (var job in work.jobs) {
                if (work.jobs.hasOwnProperty(job)) {
                    $("#workExperience").append(HTMLworkStart);
                    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
                    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                    $(".work-entry:last").append(formattedEmployerTitle);
                    $(".work-entry:last").append(formattedWorkDates);
                    $(".work-entry:last").append(formattedWorkLocation);
                    $(".work-entry:last").append(formattedWorkDescription);
                }
            }
        }
    }
};

var projects = {
    "projects" : [
        {
            "title" : "Trading cards game",
            "dates" : "2017/01/19",
            "description" : "Project for FEND",
            "image" : "images/project1.jpg"
        },
        {
            "title" : "Mapping Violence in New Jersey",
            "dates" : "2017/01/02",
            "description" : "Project for a non-profit",
            "image" : "images/project2.jpg"
        }
    ],
    display : function(){
        if(projects.projects){
            for(var project in projects.projects){
                $("#projects").append(HTMLprojectStart);
                var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
                $(".project-entry:last").append(formattedprojectTitle);
                $(".project-entry:last").append(formattedprojectDates);
                $(".project-entry:last").append(formattedprojectDescription);
                $(".project-entry:last").append(formattedprojectImage);
            }
        }
    }
};

//Internationalize the name:
$("#main").append(internationalizeButton);
function inName(name){
    var nameArray = name.split(" ");
    var outputName = nameArray[0] + " " + nameArray[1].toUpperCase();
    return outputName;
}
education.display();
bio.display();
projects.display();
work.display();
$('#mapDiv').append(googleMap);
