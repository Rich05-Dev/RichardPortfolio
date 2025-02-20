// script.js

function showSection(sectionId) {
    document.getElementById('about').style.display = 'none';
    document.getElementById('skills').classList.add('hidden');
    document.getElementById('projects').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
  }
  
  function showAbout() {
    document.getElementById('about').style.display = 'block';
    document.getElementById('skills').classList.add('hidden');
    document.getElementById('projects').classList.add('hidden');
  }