function getFormvalue() {
  event.preventDefault();
  let firstName = document.getElementsByTagName("input")[0].value;
  let lastName = document.getElementsByTagName("input")[1].value;
  console.log(`The first and last name are ${firstName} and ${lastName}`);
}
