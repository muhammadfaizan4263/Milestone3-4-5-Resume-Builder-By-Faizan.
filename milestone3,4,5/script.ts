// listing 
document.getElementById('resumeForm')?.addEventListener("submit",(event)=>{
    event.preventDefault();
const profilepictureinput = document.getElementById('profilepicture') as HTMLInputElement;
    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationlement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;

const usernameElement = document.getElementById(
    "username"
) as HTMLInputElement;

    if (profilepictureinput && nameElement && emailElement && phoneElement && educationlement && experienceElement){

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationlement.value;
        const experience = experienceElement.value;
        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g,'_')}_cv.html`
        console.log(uniquePath,'uniquePath')

const profilepictureFile = profilepictureinput.files?.[0]
const profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';
        console.log(profilepictureURL,'profilepictureURL')
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilepictureURL ? `<img src="${profilepictureURL}" alt="Profile Picture" class="profilepicture">` : ""}
        <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
        
        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>
        
        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>
        `;
        
        // Correct the MIME type and add programmatic download
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput); // Fixed MIME type
        downloadLink.download = uniquePath || 'resume.html'; // Set a default filename if uniquePath is not defined
        downloadLink.textContent = 'Download Your 2024 Resume';
    
    //crreate resume output
    

        
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;

resumeOutputElement.appendChild(downloadLink)
        resumeOutputElement.style.display = 'Block';

    } else {
        console.error('the resume output element are missing')
    }
}

}),

function makeEditable(){
    const editableElements = document.querySelectorAll('editable');
    editableElements.forEach(Element    =>{
        Element.addEventListener('click', function() {
            const currentElement = Element as HTMLElement;
            const currentvalue = currentElement.textContent || "" ;

            //replace content
            if (currentElement.tagName ==="P"  || currentElement.tagName === 'SPAN'){
                const input = document.createElement( 'input')
                input.type ='text'
                input.value = currentvalue
                input.classList.add('aditing-input')

                input.addEventListener('blur',function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'     
                    input.remove()

                })
                currentElement.style.display = 'name'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }

        })
    })
}