function calculateAverage() {
    let name = "joe";
    
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);

    const average = (grade1 + grade2 + grade3) / 3;
    document.getElementById('result').innerText = `Average Grade: ${average.toFixed(2)}`;


    if (average >= 70) {
        console.log(`Congratulations , ${name} you passed!`);
    }
    else{
        console.log(`Keep practicing ${name}`);
    }
}