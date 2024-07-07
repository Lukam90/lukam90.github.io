async function getData() {
    const response = await fetch("data/json/mysteres/joyeux.json");
    const data = await response.json();

    console.log(data);
    console.log(data[0]);
    console.log(data[0].mystere);
    console.log(data[0].fruit);
    console.log(data[0].intro);
    console.log(data[0].clausules);

    for (let part of data) {
        console.log(part.mystere);
    }
}

getData();