function toggleDropdown(dropdownNumber) {
  const dropdown = document.getElementsByClassName('dropdown')[dropdownNumber];
  console.log(dropdown);
  dropdown.classList.toggle('toggled');
}