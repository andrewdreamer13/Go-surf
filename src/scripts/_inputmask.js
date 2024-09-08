
import Inputmask from "inputmask";

const telInputs = document.querySelectorAll('input[type="tel"]');

telInputs.forEach((input) => {
  const mask = new Inputmask("+38(999)999-99-99");
  mask.mask(input);
});



