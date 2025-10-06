import * as readline from 'readline';

/**
 * Animates text with a typewriter effect.
 * @param text The text to animate.
 * @param callback A function to call after the animation is complete.
 */
function typeWriter(text: string, callback: () => void) {
  let i = 0;
  process.stdout.write('\n'); // Start on a new line
  function type() {
    if (i < text.length) {
      process.stdout.write(text.charAt(i));
      i++;
      setTimeout(type, 100); // Adjust speed here (milliseconds)
    } else {
      process.stdout.write('\n');
      callback(); // Signal completion
    }
  }
  type();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Willkommen, tapferer Abenteurer, zur HalloWelt-Quest!");
console.log("Deine Mission, solltest du sie annehmen, ist es, die legendäre 'HalloWelt'-Nachricht zu überbringen.");
console.log("\nDu stehst an einer Weggabelung. Nimmst du den Pfad, der von einem Gummihuhn bewacht wird (`huhn`), oder den, der schwach nach Käse riecht (`kaese`)?");

rl.question("Wähle deinen Pfad: ", (answer) => {
  const choice = answer.toLowerCase().trim();

  if (choice === 'huhn') {
    console.log("\nMutig zeigst du dem Gummihuhn deinen Bildschirm. Es gackert laut, was in seiner Sprache bedeutet:");
    console.log(`
    _ 
___(.)>
\___) 
    `);
    typeWriter("'Hallo, Welt!'", () => {
      rl.close();
    });
  } else if (choice === 'kaese') {
    console.log("\nDu folgst dem Duft und findest eine weise, alte Maus, die quietscht:");
    console.log(`
<:3 )~~~~ 
    `);
    typeWriter("'Hallo, Welt!'", () => {
      rl.close();
    });
  } else {
    console.log("\nVerwirrt von den Möglichkeiten rufst du in die Leere...");
    typeWriter("'Hallo, Welt!'", () => {
        console.log("\nEin Echo antwortet leise... '...Welt... Welt...' ");
        rl.close();
    });
  }
});
