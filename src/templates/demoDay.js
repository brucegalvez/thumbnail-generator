const createDemoDay = (canvas, ctx, title, subtitle, img) => {
  const cw = canvas.width / 100;
  const ch = canvas.height / 100;
  // Add blue background
  ctx.fillStyle = "#75B0F5";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Write the title
  ctx.font = `${8.4 * cw}px "Garnet Capitals Black"`;
  // ctx.rotate(0.1);
  ctx.fillStyle = "#ffffff";
  title.map((line, i) => {
    ctx.fillText(line.toUpperCase(), 5.8 * cw, 28 * ch + 22 * ch * i);
  });

  // Write subtitle
  ctx.font = `${5.8 * cw}px Futura`;
  // ctx.rotate(0.1);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(subtitle[0].toUpperCase(), 2.5 * cw, 97 * ch);

  // Draw square
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 0.5 * cw;
  ctx.beginPath();
  ctx.lineTo(3 * cw, 6 * ch);
  ctx.lineTo(3 * cw, 86 * ch);
  ctx.lineTo(80 * cw, 86 * ch);
  ctx.lineTo(80 * cw, 6 * ch);
  ctx.lineTo(3 * cw, 6 * ch);
  ctx.stroke();

  return canvas;
};

module.exports = createDemoDay;
