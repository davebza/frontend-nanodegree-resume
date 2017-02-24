//create the biographical objects:

var education = {
    "degreesAndFormalCertificates": [
        {
            "name" : "HKU",
            "city" : "Hong Kong",
            "qualification" : "Master of Philosophy",
            "major" : ["English"],
            "years" : "2007 - 2010"
        },
        {
            "name" : "Rhodes University",
            "city" : "Grahamstown",
            "qualification" : "Bachelor of Arts (Honours)",
            "major" : ["English", "Journalism and Communication Studies"],
            "minor" : ["Linguistics", "Philosophy", "Modern Fiction", "Sociology"],
            "years" : "1997 - 2000"
        }
    ],
    "onlineCourses" : [
        {
            "body" : "Udacity",
            "courseTitle" : "Front-End Web Developer Nanodegree",
            "url" : "someUrlHere"
        },
        {
            "body" : "Coursera",
            "courseTitle" : "HTML, JavaScript and CSS",
            "url" : "someUrlHere"
        }
        //add: coursera, google educator, applied Linguistics honours
    ],
    display : function(){
        console.log("Education called. Will you answer?");
    }
}

var bio = {
    "name" : "Dave Brown",
    "role" : "FrontEnd Ninja",
    "contactInfo" : [
        "<a href='tel:+85297382005' target='_blank'>(+852) 9738 2005</a>",
        "<a href='dave@davidbrownhk.com' target='_blank'>dave@davidbrownhk.com</a>",
        "<a href='https://twitter.com/davebza' target='_blank'>@DavebZa</a>",
        "<a href='https://github.com/davebza' target='_blank'>davebza</a>",
        "<a href='http://davidbrownhk.com' target='_blank'>My stuff</a>",
        "<a href='https://www.google.com.hk/maps/@22.3579355,113.9809273,11z?hl=en' target='_blank'>Hong Kong</a>"
    ],
    "picture" : "images/profilePic.jpg",
    "welcomeMessage" : "Hi there!",
    "skills" : ["HTML and CSS", "JavaScript", "Python"],
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
            if (bio.contactInfo[0]){
                var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo[0]);
                $("#topContacts").append(formattedMobile);
            }
            if (bio.contactInfo[1]){
                var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo[1]);
                $("#topContacts").append(formattedEmail);
            }
            if (bio.contactInfo[2]){
                var formattedtwitter = HTMLtwitter.replace("%data%", bio.contactInfo[2]);
                $("#topContacts").append(formattedtwitter);
            }
            if (bio.contactInfo[3]){
                var formattedgithub = HTMLgithub.replace("%data%", bio.contactInfo[3]);
                $("#topContacts").append(formattedgithub);
            }
            if (bio.contactInfo[4]){
                var formattedblog = HTMLblog.replace("%data%", bio.contactInfo[4]);
                $("#topContacts").append(formattedblog);
            }
            if (bio.contactInfo[5]){
                var formattedlocation = HTMLlocation.replace("%data%", bio.contactInfo[5]);
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
    "positions" : [
        {
            "title" : "NET teacher",
            "employer" :"Education Bureau, Hong Kong",
            "period" : "2005 - present day",
            "dutiesAndResponsibilities" : ["Teach", "Lead"]
        },
        {
            "title" : "Lecturer  / Tutor",
            "employer" :"The Open University of Hong Kong",
            "period" : "2015 - present day",
            "dutiesAndResponsibilities" : ["Teach", "Lead"]
        }
    ],
    display : function(){
        if(work){
            for (var job in work.positions) {
                if (work.positions.hasOwnProperty(job)) {
                    $("#workExperience").append(HTMLworkStart);
                    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.positions[job].employer);
                    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.positions[job].title);
                    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
                    $(".work-entry:last").append(formattedEmployerTitle);
                }
            }
        }
    }
}

var projects = {
    "projects" : [
        {
            "title" : "Trading cards game",
            "dates" : "2017/01/19",
            "description" : "Project for FEND",
            "images" : []
        },
        {
            "title" : "MapQuest page",
            "dates" : "2017/01/02",
            "description" : "Project for a non-profit",
            "images" : []
        }
    ],
    display : function(){
        if(projects.projects){
            for(project in projects.projects){
                $("#projects").append(HTMLprojectStart);
                var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
                $(".project-entry:last").append(formattedprojectTitle);
                $(".project-entry:last").append(formattedprojectDates);
                $(".project-entry:last").append(formattedprojectDescription);
                $(".project-entry:last").append(formattedprojectImage);
            }
        }
    }
}

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
