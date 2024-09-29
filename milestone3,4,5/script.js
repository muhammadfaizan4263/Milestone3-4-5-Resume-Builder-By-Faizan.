var _a;
// listing 
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilepictureinput = document.getElementById('profilepicture');
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationlement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var usernameElement = document.getElementById("username");
    if (profilepictureinput && nameElement && emailElement && phoneElement && educationlement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationlement.value;
        var experience = experienceElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        console.log(uniquePath, 'uniquePath');
        var profilepictureFile = (_a = profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';
        console.log(profilepictureURL, 'profilepictureURL');
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"Profile Picture\" class=\"profilepicture\">") : "", "\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n        \n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n        ");
        // Correct the MIME type and add programmatic download
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput); // Fixed MIME type
        downloadLink.download = uniquePath || 'resume.html'; // Set a default filename if uniquePath is not defined
        downloadLink.textContent = 'Download Your 2024 Resume';
        //crreate resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = 'Block';
        }
        else {
            console.error('the resume output element are missing');
        }
    }
}),
    function makeEditable() {
        var editableElements = document.querySelectorAll('editable');
        editableElements.forEach(function (Element) {
            Element.addEventListener('click', function () {
                var _a;
                var currentElement = Element;
                var currentvalue = currentElement.textContent || "";
                //replace content
                if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                    var input_1 = document.createElement('input');
                    input_1.type = 'text';
                    input_1.value = currentvalue;
                    input_1.classList.add('aditing-input');
                    input_1.addEventListener('blur', function () {
                        currentElement.textContent = input_1.value;
                        currentElement.style.display = 'inline';
                        input_1.remove();
                    });
                    currentElement.style.display = 'name';
                    (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                    input_1.focus();
                }
            });
        });
    };
