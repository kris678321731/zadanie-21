window.onload = function() {
    let num;

    do {
        let input = prompt("Podaj liczbę całkowitą:");
        if (input === null) continue;
        num = Number(input);
    } while (!Number.isInteger(num));

    let rand = Math.floor(Math.random() * 51);

    document.getElementById("r1").innerText = `Liczba: ${num}`;
    document.getElementById("r2").innerText = `${num} → ${-num}`;
    document.getElementById("r3").innerText = `${num} + 15 = ${num + 15}`;
    document.getElementById("r4").innerText = `${num} + 0.5 = ${num + 0.5}`;
    document.getElementById("r5").innerText = `${num}² = ${num * num}`;
    document.getElementById("r6").innerText = `${num} / 2 = ${num / 2}`;
    document.getElementById("r7").innerText = `${num} % 2 = ${num % 2}`;
    document.getElementById("r8").innerText = `${num} + 1 = ${num + 1}`;
    document.getElementById("r9").innerText = `${num} - 1 = ${num - 1}`;
    document.getElementById("r10").innerText = `floor(${num}/3) = ${Math.floor(num / 3)}`;
    document.getElementById("r11").innerText = `ceil(${num}/3) = ${Math.ceil(num / 3)}`;
    document.getElementById("r12").innerText = `round(${num}/3) = ${Math.round(num / 3)}`;
    document.getElementById("r13").innerText = `√${num} = ${Math.sqrt(num).toFixed(2)}`;
    document.getElementById("r14").innerText = `${num} × ${rand} = ${num * rand}`;
    document.getElementById("r15").innerText = `|${num}| = ${Math.abs(num)}`;
};