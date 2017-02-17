/*
This is empty on purpose! Your code to build the resume will go here.
*/
var formattedName = HTMLheaderName.replace("%data%", "Dave Brown");
var formattedRole = HTMLheaderRole.replace("%data%","FrontEnd Ninja");

$("#header").append(formattedName);
$("#header").append(formattedRole);
