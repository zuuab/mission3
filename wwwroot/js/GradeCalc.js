$("#btnSubmit").click(function () {
    // input from the user
    let assignments = $("#assignments").val();
    let grpProj = $("#grpProj").val();
    let quizzes = $("#quizzes").val();
    let exams = $("#exams").val();
    let intex = $("#intex").val();
    let letterGrade = "";

    // calculate final grade percent with weights
    let finalGrade =
        (parseFloat(assignments) * .55) +
        (parseFloat(grpProj) * .05) +
        (parseFloat(quizzes) * .1) +
        (parseFloat(exams) * .2) +
        (parseFloat(intex) * .1);

    // super long if statement for letter grade
    if (finalGrade >= 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    alert("Final Grade: " + finalGrade + "% " + letterGrade)

})

    