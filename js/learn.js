const lessons = {
    base: [
        {
            title: "Hello World",
            text: "Scrivi il tuo primo programma",
            code: 'say "Hello World"'
        },
        {
            title: "Variabili",
            text: "Crea variabili",
            code: 'x = 5\nsay x'
        }
    ]
}

function getParam(name) {
    return new URLSearchParams(window.location.search).get(name)
}

const course = getParam("course")
const lessonIndex = getParam("lesson") - 1

const lesson = lessons[course][lessonIndex]

document.getElementById("lesson").innerHTML = `
<h2>${lesson.title}</h2>
<p>${lesson.text}</p>
`

document.getElementById("code").value = lesson.code