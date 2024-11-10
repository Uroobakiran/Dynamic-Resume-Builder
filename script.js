function initializeResumeForm() {
    var form = document.getElementById("resume-form");
    var resumeDisplayElement = document.getElementById("resume-display");
    form.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        var objective = document.getElementById("profile-summary").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education-institution").value;
        var educationDegree = document.getElementById("degree").value;
        var educationYears = document.getElementById("years").value;
        var jobTitle = document.getElementById("job-title").value;
        var company = document.getElementById("company").value;
        var jobDescription = document.getElementById("job-description").value;
        var skills = document.getElementById("skills").value;
        var certifications = document.getElementById("certifications").value;
        var language = document.getElementById("languages").value;
        // Process the profile image
        var profileImageInput = document.getElementById("profile-image");
        var file = (_a = profileImageInput === null || profileImageInput === void 0 ? void 0 : profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            // Read and display the image
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var profileImageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                renderResume(profileImageUrl);
            };
            reader.readAsDataURL(file);
        }
        else {
            renderResume("");
        }
        function renderResume(profileImageUrl) {
            var resumeHTML = "\n            <h2><b>Resume</b></h2>\n            <h3>Profile Image</h3>\n            <p><img src=\"".concat(profileImageUrl, "\" alt=\"Profile Image\" width=\"100\"/></p>\n            <h3>Objective</h3>\n            <p>").concat(objective, "</p>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> ").concat(name, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Phone:</b> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p><b>Education Institution:</b> ").concat(education, "</p>\n            <p><b>Degree:</b> ").concat(educationDegree, "</p>\n            <p><b>Years:</b> ").concat(educationYears, "</p>\n            <h3>Experience</h3>\n            <p><b>Job Title:</b> ").concat(jobTitle, "</p>\n            <p><b>Company:</b> ").concat(company, "</p>\n            <p><b>Job Description:</b> ").concat(jobDescription, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Certifications</h3>\n            <p>").concat(certifications, "</p>\n            <h3>Language</h3>\n            <p>").concat(language, "</p>\n        ");
            resumeDisplayElement.innerHTML = resumeHTML;
        }
    });
}
initializeResumeForm();
