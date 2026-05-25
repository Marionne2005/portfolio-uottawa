// ========================================
// TOGGLE SKILLS
// ========================================
function toggleSkill(id) {
  const panel = document.getElementById('panel-' + id);
  const arrow = document.getElementById('arrow-' + id);
  
  // Ferme tous les autres panels
  document.querySelectorAll('.skill-panel').forEach(p => {
    if (p.id !== 'panel-' + id) {
      p.classList.remove('active');
    }
  });
  document.querySelectorAll('.skill-arrow').forEach(a => {
    if (a.id !== 'arrow-' + id) {
      a.textContent = '▼';
    }
  });

  // Toggle le panel cliqué
  panel.classList.toggle('active');
  arrow.textContent = panel.classList.contains('active') ? '▲' : '▼';
}

// ========================================
// ANIMATION SCROLL — HOW I WORK
// ========================================
const workSteps = document.querySelectorAll('.work-step');

const workObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

workSteps.forEach(step => workObserver.observe(step));

// ========================================
// FORMULAIRE CONTACT
// ========================================
function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in all required fields!');
    return;
  }

  window.location.href = `mailto:marionnegannavi@gmail.com?subject=Portfolio Contact&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
}