// NAVIGASI PAGE
function showPage(pageId) {
  document.querySelectorAll("section").forEach(sec => sec.style.display="none");
  document.getElementById(pageId).style.display = "block";
}

// tampilkan page1 saat pertama load
showPage("page1");

// VIEW FOTO MODAL
function viewPhoto(src) {
  const modal = document.getElementById('photoModal');
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('photoModal').style.display = 'none';
}

// YES/NO INTERAKTIF
function handleYesNo(answer) {
  const yesBtn = document.getElementById('yesBtn');
  const message = document.getElementById('finalMessage');

  if(answer === 'no') {
    yesBtn.style.transition = 'all 0.5s ease';
    yesBtn.style.width = '100vw';
    yesBtn.style.height = '100vh';
    yesBtn.style.fontSize = '2em';
  } else if(answer === 'yes') {
    message.innerText = "aku tau kok kalo kamu masih sayang aku 💙 selesai.";
  }
}

// MUSIC
let musicStarted = false;
function playMusic() {
  if(!musicStarted){
    document.getElementById('bgMusic').play();
    musicStarted = true;
  }
}
