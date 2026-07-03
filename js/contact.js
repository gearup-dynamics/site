function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const nameField = form.querySelector('[name="name"]');
    const subjectField = form.querySelector('[name="subject"]');

    if (subjectField) {
        const customerName = nameField && nameField.value.trim() ? nameField.value.trim() : "website visitor";
        subjectField.value = `New inquiry from ${customerName}`;
    }

    const data = new FormData(form);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
    })
        .then(() => {
            form.style.display = "none";
            document.getElementById("confirmation").style.display = "block";
        })
        .catch(() => {
            alert("There was a problem submitting the form. Please call or text us instead.");
        });
}