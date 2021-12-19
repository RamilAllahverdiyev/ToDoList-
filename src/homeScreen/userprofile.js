var UserProfile = (function() {
    var firstName = ""
   var lastName = ""
   var username = ""
   var  email = ""
    var  tasks =  []



    var getName = function() {
        return firstName;    // Or pull this from cookie/localStorage
    };

    var setName = function(name) {
        firstName = name;
        // Also set this in cookie/localStorage
    };
    var getUsername = function (){
        return username;
    }
    var setUsername = function (userName){
        username = userName
    }
    var getlastName= function (){
        return lastName;
    }
    var setLastname = function (lastname){
        lastName = lastname
    }
    var getemail = function (){
        return email;
    }
    var setemail = function (Email){
        email = Email
    }
    var getTasks = function (){
        return tasks;
    }
    var setTasks = function (Tasks){
        tasks = Tasks
    }

    return {
        getName: getName,
        setName: setName,
        getUsername: getUsername,
        getlastName:getlastName,
        getemail:getemail,
        getTasks: getTasks,
        setUsername: setUsername,
        setLastname:setLastname,
        setemail:setemail,
        setTasks: setTasks
    }

})();

export default UserProfile;