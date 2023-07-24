// function for tabs
function openTab(tabName) {
    var i;
    var tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

  // calculator

  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculateResult() {
    var result;
    try {
      result = eval(document.getElementById('display').value);
    } catch (error) {
      result = 'Error';
    }
    document.getElementById('display').value = result;
  }