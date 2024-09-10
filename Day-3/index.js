(function () {
  const inputs = [...document.querySelectorAll("input")];
  const textbox = document.querySelector("textarea");
  const button = document.querySelector("button");

  const SS_FORM_KEY = "WB_SS_FORM";

  const getForm = () => {
    return sessionStorage.getItem(SS_FORM_KEY) ?? JSON.stringify({});
  };

  const populateForm = (shouldReset = false) => {
    const form = JSON.parse(getForm());
    Object.keys(form).forEach((key) => {
      switch (key) {
        case "comments":
          textbox.value = !shouldReset ? form[key] : "";
          break;
        case "name":
        case "phone":
        case "email":
          const input = inputs.find((i) => i.name === key);
          input.value = !shouldReset ? form[key] : "";
          break;
        default:
          break;
      }
    });
  };

  const clearForm = (e) => {
    e.preventDefault();
    populateForm(true);
    sessionStorage.removeItem(SS_FORM_KEY);
  };

  const handleFormInputUpdate = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const form = JSON.parse(getForm());
    sessionStorage.setItem(
      SS_FORM_KEY,
      JSON.stringify({
        ...form,
        [key]: value,
      }),
    );
  };

  populateForm();
  inputs.forEach((input) =>
    input.addEventListener("keydown", handleFormInputUpdate),
  );
  textbox.addEventListener("keydown", handleFormInputUpdate);
  inputs.forEach((input) =>
    input.addEventListener("change", handleFormInputUpdate),
  );
  button.addEventListener("click", clearForm);
})();
