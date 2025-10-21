export function initTeam() {
  const teamData = [
    { name: 'Semf ucuk', position: 'CEO & FOUNDER' },
    { name: 'DIK ADALIN', position: 'ENGINEERING' },
    { name: 'JENG KOL', position: 'DESIGNER' },
    { name: 'PET ROMAK', position: 'MARKETING' },
  ];

  const teamGrid = document.getElementById('team-grid');

  teamGrid.innerHTML = teamData
    .map(
      (m) => `
    <div class="team-card">
      <div class="team-card__image"></div>
      <div class="team-card__info">
        <p class="team-card__name">${m.name}</p>
        <p class="team-card__position">${m.position}</p>
      </div>
    </div>
  `
    )
    .join('');
}
