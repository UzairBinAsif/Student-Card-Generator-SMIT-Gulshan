function showCard() {
    event.preventDefault()
    let studentName = document.getElementById("studentName")
    let studentEmail = document.getElementById("studentEmail")
    let studentNumber = document.getElementById("studentNumber")
    let studentRoll = document.getElementById("studentRoll")
    let studentCourse = document.getElementById("studentCourse")
    let studentImage = document.getElementById("studentImage")

    let studentNameSpan = document.getElementById("studentNameSpan")
    let studentEmailSpan = document.getElementById("studentEmailSpan")
    let studentNumberSpan = document.getElementById("studentNumberSpan")
    let studentRollSpan = document.getElementById("studentRollSpan")
    let studentCourseSpan = document.getElementById("studentCourseSpan")
    let studentImageDiv = document.getElementById("studentImageDiv")

    if (studentName.value.length && studentEmail.value.length && studentNumber.value.length && studentRoll.value.length && studentCourse.value.length) {
        if (studentImage.files.length) {
            let imageURL = URL.createObjectURL(studentImage.files[0])
            
            let studentDataObj = {
                name : studentName.value,
                email : studentEmail.value,
                phone : studentNumber.value,
                roll : studentRoll.value,
                course : studentCourse.value,
                image : imageURL
            }

            studentNameSpan.innerText = studentDataObj.name
            studentEmailSpan.innerText = studentDataObj.email
            studentNumberSpan.innerText = studentDataObj.phone
            studentRollSpan.innerText = studentDataObj.roll
            studentCourseSpan.innerText = studentDataObj.course
            studentImageDiv.style.backgroundImage = `url("${studentDataObj.image}")`
            
            document.getElementsByClassName("right")[0].style.display = "block"
        } else {
            let timerInterval;
            Swal.fire({
                title: "Error!",
                html: "Please Provide an Image.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            })
        } 
    } else {
        let timerInterval;
        Swal.fire({
            title: "Error!",
            html: "Please fill all the required fields.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        })
    }

}