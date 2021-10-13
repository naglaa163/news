function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    if(Client.isValidURL(formText)) {
    console.log("::: Form Submitted :::")

    sendData('http://localhost:8080/api',{url: formText})
    
     
    .then((res) => {
            document.getElementById("polarity").innerHTML = `polarity:  ${res.polarity}`;
            document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence:  ${res.confidence}`;
            document.getElementById("irony").innerHTML = `Irony:  ${res.irony}`;
            document.getElementById("score_tag").innerHTML = `Score-tag:  ${res.score_tag}`;
        })
    } else {
        alert(' please try with a valid URL.');
    }
}

const sendData = async (url = "", fData = {}) => {
    console.log('Analyzing:', fData);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(fData)
    });
    try {
        const nData = await response.json();
        console.log('Data received:', nData)
        return nData;
    } catch (error) {
        console.log('error', error);
    }
};




export { handleSubmit }
