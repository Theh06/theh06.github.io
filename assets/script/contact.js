document.getElementById('saveButton').addEventListener('click', function () {
    const contactData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        address: document.getElementById('address').value.trim(),
        feedback: {
            experience: Number(document.getElementById('question1').value),
            serviceQuality: Number(document.getElementById('question2').value),
            recommendationLikelihood: Number(document.getElementById('question3').value),
            websiteConvenience: Number(document.getElementById('question4').value),
            overallSatisfaction: Number(document.getElementById('question5').value),
        },
    };

    if (!validateEmail(contactData.email)) {
        alert('Enter a valid e-mail address!');
        return;
    }

    if (!validatePhone(contactData.phone)) {
        alert('Enter the correct phone number! Example: +1234567890');
        return;
    }

    if (!contactData.address) {
        alert('The address field must not be empty!');
        return;
    }

    const scores = Object.values(contactData.feedback);
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

    const formattedData = `
        <p><strong>Name:</strong> ${contactData.firstName}</p>
        <p><strong>Surname:</strong> ${contactData.lastName}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Phone:</strong> ${contactData.phone}</p>
        <p><strong>Address:</strong> ${contactData.address}</p>
        <p><strong>Experience:</strong> ${contactData.feedback.experience}</p>
        <p><strong>Service Quality:</strong> ${contactData.feedback.serviceQuality}</p>
        <p><strong>Recommendation Likelihood:</strong> ${contactData.feedback.recommendationLikelihood}</p>
        <p><strong>Website Convenience:</strong> ${contactData.feedback.websiteConvenience}</p>
        <p><strong>Overall Satisfaction:</strong> ${contactData.feedback.overallSatisfaction}</p>
    `;

    document.getElementById('output').innerHTML = formattedData;

    let scoreColor = 'red';
    if (averageScore >= 4 && averageScore < 7) {
        scoreColor = 'orange';
    } else if (averageScore >= 7) {
        scoreColor = 'green';
    }

    const averageFormatted = `${contactData.firstName} ${contactData.lastName} (${contactData.email}): ${averageScore.toFixed(2)}`;
    const averageScoreElement = document.getElementById('averageScore');
    averageScoreElement.textContent = averageFormatted;
    averageScoreElement.style.color = scoreColor;

    console.log(contactData);
    console.log('AVG Score:', averageScore.toFixed(2));

    document.getElementById('contactForm').reset();
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    return phoneRegex.test(phone);
}
