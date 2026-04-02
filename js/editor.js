function run() {
    const code = document.getElementById("code").value

    let output = ""

    code.split("\n").forEach(line => {
        if (line.startsWith("say")) {
            output += line.replace("say", "").trim() + "\n"
        }
    })

    document.getElementById("output").innerText = output
}