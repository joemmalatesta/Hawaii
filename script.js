  // Function to toggle the "hidden" class
  function toggleHiddenText(id) {
    const hiddenText = document.getElementById(id);
    hiddenText.classList.toggle("hidden");
  }

  // Bind click event to each arrow button
  document.getElementById("hideOnClick1").addEventListener("click", function () {
    toggleHiddenText("hiddenText1");
  });

  document.getElementById("hideOnClick2").addEventListener("click", function () {
    toggleHiddenText("hiddenText2");
  });

  document.getElementById("hideOnClick3").addEventListener("click", function () {
    toggleHiddenText("hiddenText3");
  });