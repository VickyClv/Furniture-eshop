//----------------
// Age Validation
//----------------

function ageValidation() {
    // Milliseconds per year
    const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

    // Get user's birthday
    const birthday = document.getElementById("birth_date").value;
    const y1 = new Date(birthday).getFullYear();
    const m1 = new Date(birthday).getMonth();
    const d1 = new Date(birthday).getDate();

    // Get current date
    var now = new Date();
    const y2 = new Date(now).getFullYear();
    const m2 = new Date(now).getMonth();
    const d2 = new Date(now).getDate();

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(y1, m1, d1);
    const utc2 = Date.UTC(y2, m2, d2);

    // Calculate the user's age in years
    var dif = Math.floor((utc2 - utc1) / _MS_PER_YEAR);
    
    // If the user is younger than 18 display error message
    if(dif < 18) {
        document.getElementById("age_error").innerHTML = "You must be at least 18 years old to sign up";
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//---------------------
// Password Validation
//---------------------

function checkPasswords() {
    // If the two passwords have different values display error message
    if(document.getElementById("psw").value != document.getElementById("psw-repeat").value) {
        document.getElementById("pwrd_error").innerHTML = "The password is not the same";
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//----------------------
// File Size Validation
//----------------------

function checkFileSize() {
    var photo = document.getElementById("photo_file");
    if(photo.files.length > 0) {
        // The user uploaded a file

        // Get file size
        const file_size = photo.files.item(0).size;
        const r_file_size = Math.round((file_size / 1024));

        // Check if file size is bigger than 5MB display error message
        if (r_file_size >= (5 * 1024)) {
            // Display error message
            document.getElementById("photo_error").innerHTML = "The file is too large";
        }
        else {
            // Display message that the file is validated
            document.getElementById("photo_correct").innerHTML = "Uploaded";
        }
    }
    else {
        // The user did not upload a file error message
        document.getElementById("no_photo").innerHTML = "No file selected";
    }
}