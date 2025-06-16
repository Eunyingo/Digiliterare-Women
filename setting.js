// Boleh ada komentar //
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");

});


function handleGetFormData () {
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const city = document.getElementById("city").value;
const zipCode = document.getElementById("zip-code").value;
const status = document.getElementById("status").checked;

return {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status,
  };
}
  function isNumber(str) {
    return !isNaN(Number(str));
  }
  function checkboxIsChecked() {
    const checkbox =
  document.getElementById("status");
   return checkbox && checkbox.checked;
  }
  function validateFormData(data) {
    return (
      data &&
      data.name !== "" &&
      data.email !== "" &&
      data.city !== "" &&
      isNumber (data.zipCode) &&
      checkboxIsChecked ()
    );
  }

function submit (){
  const data = {
    name: document.getElementById("name").value.trim(),
    city: document.getElementById("city").value.trim(),
    email: document.getElementById("email").value.trim(),
    zipCode: document.getElementById("zip-code").value.trim(),
  };

  const warningDiv = document.getElementById("warning");

  if (!validateFormData(data)) {
    warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
    warningDiv.textContent = "";
  }
}
