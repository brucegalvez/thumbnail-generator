// const wrapText = (text, ctx, maxWidth) => {
//   if (ctx.measureText(testLine) <= maxWidth) return [text];

//   const words = text.split(" ");
//   const wordsData = words.map((word) => ({
//     word,
//     width: ctx.measureText(word),
//   }));
//   const groupedWords = words.reduce((acc, { word, width }, i) => {
//     if (i === words.length) return word;
//     if ((word + words[i + 1]).length <= maxLength) {
//     }
//   });
//   // const groupedWords = words.map(({ word, width }, i) => {
//   //   if (i === words.length) return word;
//   //   if ((word + words[i + 1]).length <= maxLength) {
//   //   }
//   // });
//   return groupedWords;
// };

// module.exports = wrapText;

// // const wrapText = (ctx, text, maxWidth) => {
// //   const words = text.split(' ');
// //   var line = '';
// //   const

// //   for(let n = 0; n < words.length; n++) {
// //     const testLine = line + words[n] + ' ';
// //     const metrics = ctx.measureText(testLine);
// //     const testWidth = metrics.width;
// //     if (testWidth > maxWidth && n > 0) {
// //       ctx.fillText(line, x, y);
// //       line = words[n] + ' ';
// //       y += lineHeight;
// //     }
// //     else {
// //       line = testLine;
// //     }
// //   }
// //   context.fillText(line, x, y);
// // }
