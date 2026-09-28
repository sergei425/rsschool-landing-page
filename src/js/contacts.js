document.getElementById("map").addEventListener("click", () => {
    window.open(
      `https://www.google.com/maps/place/8558+Green+Rd,+Lakeland,+FL+33810,+%D0%A1%D0%A8%D0%90/@28.1427585,-81.9886718,17z/data=!3m1!4b1!4m5!3m4!1s0x88dd4691e193122d:0xd95ac3b1988f6eb!8m2!3d28.1427538!4d-81.9860969?entry=ttu`,
      "_blank"
    );
})



document.getElementById("phone").addEventListener("click", (evt) => {
  const numberPhone = evt.target.textContent
    .split("")
    .filter((el) => Boolean(Number(el)))
    .join("");
  window.open(`tel:+${numberPhone}`, "_self");
});
