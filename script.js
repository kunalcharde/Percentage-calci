const id1 = document.getElementById("first-section")
const id2 = document.getElementById("normal-percentage")
const id3 = document.getElementById("semester-percentage")
const back_btn1 = document.querySelectorAll('.back-btn')[0]
const back_btn2 = document.querySelectorAll('.back-btn')[1]
const obt_mark = document.getElementById("obt-marks");
const total_mark = document.getElementById("total-marks");
// function to set the hide and visibility
function hide(id1, id2) {
    id1.classList.add("hide");
    id2.classList.add("hide")
}

// Normal Percentage Selection Button
const percent_btn = document.getElementById("percent-btn")
percent_btn.addEventListener("click", () => {
    id2.classList.remove("hide");
    hide(id1, id3)
})

// Multiple Subject/Semesters Percentage Button
const semester_btn = document.getElementById("semester-btn")
semester_btn.addEventListener("click", () => {
    id3.classList.remove("hide");
    hide(id1, id2)
    // setting some by default values
    document.getElementById("sem-calculate-btn").setAttribute('disabled', '')
    document.getElementById("input-semesters").value = "";
    document.getElementById("sem-obt-marks").value = "";
    document.getElementById("sem-total-marks").value = "";
    document.getElementById("sem-num").innerText = "Enter 1st Semesters Marks";
})

// Back Button of Normal Secetion UI
back_btn1.addEventListener("click", (e) => {
    e.preventDefault();
    id1.classList.remove("hide");
    hide(id2, id3)
    obt_mark.value = ""
    total_mark.value = ""
})
// Back Button of Multiple Subject/Semesters Secetion UI
back_btn2.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("sem-calculate-btn").setAttribute('disabled', '')
    id1.classList.remove("hide");
    hide(id2, id3)
    // setting some by default values
    document.getElementById("input-semesters").value = "";
    document.getElementById("sem-obt-marks").value = "";
    document.getElementById("sem-total-marks").value = "";
    document.getElementById("sem-num").innerText = "Enter 1st Semesters Marks";
    document.getElementById("sem-calculate-btn").setAttribute('disabled', '')
    document.getElementById("sem-display-percentage").innerText = ""
    document.getElementById('preview').innerText =""
    console.log(document.getElementById("input-semesters").value)
})

// CGPA Calculation BTN
const cgpa_btn = document.getElementById('cgpa-btn')
cgpa_btn.addEventListener("click", () => {
    alert("This Service Comeing Soon")
    console.log("This Service Comeing Soon")
})

// Calculate Button of Normal Secetion UI
const Calculate_btn = document.getElementById("calculate-btn")
Calculate_btn.addEventListener("click", () => {

    if (parseInt(total_mark.value) >= parseInt(obt_mark.value)) {
        console.log("Total", total_mark.value)
        let percentage = ((obt_mark.value / total_mark.value) * 100).toFixed(2);
        document.getElementById("normal-display-percentage").innerText = `Your Percentage calculation is ${percentage} %`
    }
    else {
        alert("Obtained Marks Should Less then or equal to Total Marks")
    }
})

// Enter Button of Multiple Subject/Semesters Secetion UI
const enter_btn = document.getElementById("enter-btn")
// Intializing arrays for Storing Multiple Subjects obtained marks and Total Marks In an arry
let obt_mark_arr = [];
let total_mark_arr = [];
let count = 1;
enter_btn.addEventListener("click", (e) => {
    e.preventDefault();
    const input_semesters = document.getElementById("input-semesters");
    const sem_obt_mark = document.getElementById("sem-obt-marks");
    const sem_total_mark = document.getElementById("sem-total-marks");
    //validation
    if(input_semesters.value===""){
        alert("Please Enter Number of Semesters / Subject")
        return
    }
    if (parseInt(sem_total_mark.value) >= parseInt(sem_obt_mark.value)) {
        if (sem_obt_mark.value != "" && sem_total_mark.value != "" && input_semesters.value != "") {
            if (obt_mark_arr.length < input_semesters.value && total_mark_arr < input_semesters.value) {
                ++count;
                obt_mark_arr.push(parseInt(sem_obt_mark.value));
                total_mark_arr.push(parseInt(sem_total_mark.value));
                document.getElementById("sem-num").innerText = `Enter ${count} Semesters Marks`
                document.getElementById('preview').innerText = `You Entered Obtained Marks: ${sem_obt_mark.value} and Total Marks : ${sem_total_mark.value} of ${count - 1} Semester/subject`
                sem_obt_mark.value = "";
                sem_total_mark.value = "";
            }
            else {
                document.getElementById("sem-num").innerText = `Successfull Entered ${count} Semester Marks`
                document.getElementById("sem-calculate-btn").removeAttribute("disabled")
                return
            }
        }
        else {
            console.log("Error")
            return
        }
    }
    else {
        alert("Obtained Marks Should Less then or equal to Total Marks")
    }

}
)

// function  which is returning the sum of all the array elements
function totalsum(arr) {
    return arr.reduce((acc, curr) => acc + curr)
}

// Semesters/Subject percentage calcuation Button of Normal Secetion UI
const sem_calculate_btn = document.getElementById("sem-calculate-btn")
sem_calculate_btn.addEventListener("click", () => {
    console.log("Obtain Mraks", obt_mark_arr)
    console.log("Total Marks", total_mark_arr)
    const total_obt_marks = totalsum(obt_mark_arr)
    const total_total_marks = totalsum(total_mark_arr)
    let percentage = ((total_obt_marks / total_total_marks) * 100).toFixed(2);
    // console.log(percentage)
    document.getElementById("sem-display-percentage").innerText = `Your Percentage calculation is ${percentage} %`
})