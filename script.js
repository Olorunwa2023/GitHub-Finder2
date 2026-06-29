// ==========================================
// USER DATABASE
// ==========================================

const users = [

    {
        id: 1,
        username: "Hamzah123",
        password: "hamzah123",

        name: "Hamzah Khan",
        age: 26,
        gender: "Male",

        email: "hamzah.khan@gmail.com",

        phone: "+1 202-555-0145",

        country: "United States",

        city: "New York",

        occupation: "Software Engineer",

        followers: 542,

        following: 321,

        publicRepos: 28,

        bio: "Passionate Full Stack Developer.",

        image: "https://randomuser.me/api/portraits/men/10.jpg"
    },

    {
        id: 2,
        username: "sarah22",
        password: "sarah22",

        name: "Sarah Williams",
        age: 24,
        gender: "Female",

        email: "sarah.williams@gmail.com",

        phone: "+44 7700 900123",

        country: "United Kingdom",

        city: "London",

        occupation: "UI/UX Designer",

        followers: 876,

        following: 210,

        publicRepos: 16,

        bio: "Designing beautiful user experiences.",

        image: "https://randomuser.me/api/portraits/women/20.jpg"
    },

    {
        id: 3,
        username: "Abubakr99",
        password: "abubakr99",

        name: "Abubakr Hassan",
        age: 29,
        gender: "Male",

        email: "abubakr.hassan@gmail.com",

        phone: "+61 400 123 456",

        country: "Australia",

        city: "Sydney",

        occupation: "Backend Developer",

        followers: 1290,

        following: 640,

        publicRepos: 52,

        bio: "Python and Java enthusiast.",

        image: "https://randomuser.me/api/portraits/men/30.jpg"
    },

    {
        id: 4,
        username: "sumayyah01",
        password: "sumayyah01",

        name: "Sumayyah Ali",
        age: 26,
        gender: "Female",

        email: "sumayyah.ali@gmail.com",

        phone: "+49 1512 3456789",

        country: "Germany",

        city: "Berlin",

        occupation: "Data Analyst",

        followers: 430,

        following: 150,

        publicRepos: 12,

        bio: "Turning data into meaningful insights.",

        image: "https://randomuser.me/api/portraits/women/40.jpg"
    },

    {
        id: 5,
        username: "Abdullah7",
        password: "abdullah7",

        name: "Abdullah muhammad",
        age: 30,
        gender: "Male",

        email: "abdullah.muhammad@gmail.com",

        phone: "+234 803 123 4567",

        country: "Nigeria",

        city: "Lagos",

        occupation: "Mobile App Developer",

        followers: 2050,

        following: 700,

        publicRepos: 80,

        bio: "Building Android and iOS applications.",

        image: "https://randomuser.me/api/portraits/men/50.jpg"
    }

];







// Get the username input element
const usernameInput = document.getElementById("username");

// Get the search button
const searchBtn = document.getElementById("searchBtn");

// Get the profile container
const profile = document.getElementById("profile");



// Wait for button click
    searchBtn.addEventListener("click", searchUser);


    // Function responsible for searching
    function searchUser(){

        const username = usernameInput.value.trim().toLowerCase();
    // Search for the user
    const user = users.find(function(person){

    return person.username.toLowerCase() === username;

});

// If user exists
    if(user){

    // Display the user's information
    displayUser(user);

}
        else{

    alert("User not found.");

}


    }


    
    


















function displayUser(user){

    profile.innerHTML = `

        <img src="${user.image}" width="150">

        <h2>${user.name}</h2>

        <p><strong>Username:</strong> ${user.username}</p>

        <p><strong>Age:</strong> ${user.age}</p>

        <p><strong>Gender:</strong> ${user.gender}</p>

        <p><strong>Email:</strong> ${user.email}</p>

        <p><strong>Phone:</strong> ${user.phone}</p>

        <p><strong>Country:</strong> ${user.country}</p>

        <p><strong>City:</strong> ${user.city}</p>

        <p><strong>Occupation:</strong> ${user.occupation}</p>

        <p><strong>Followers:</strong> ${user.followers}</p>

        <p><strong>Following:</strong> ${user.following}</p>

        <p><strong>Repositories:</strong> ${user.publicRepos}</p>

        <p><strong>Bio:</strong> ${user.bio}</p>

    `;

}