async function generateCode() {
  const number = document.getElementById('number').value.trim();
  const output = document.getElementById('output');

  if (!number) {
    return output.innerText = 'Please enter a number.';
  }

  output.innerText = 'Generating code... Please wait.';

  try {
    const res = await fetch(`/pair?number=${encodeURIComponent(number)}`);
    const data = await res.json();

    if (data.code) {
      output.innerText = `Pairing Code: ${data.code}`;
    } else {
      output.innerText = `Error: ${JSON.stringify(data)}`;
    }
  } catch (err) {
    output.innerText = 'An error occurred: ' + err.message;
  }
}
