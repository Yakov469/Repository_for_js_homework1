function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = getRandomInt(100, 1000);
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalNumbers = count;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log(`Загальна кіл-ть згенерованих чисел: ${totalNumbers}`);
    console.log(`Парні числа: ${evenCount}`);
    console.log(`Не парні числа: ${oddCount}`);
    console.log(`Відсоток парних до не парних числе: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}

// Як використовуємо:
ProbabilityTheory(666);
