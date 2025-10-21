export function initTeam() {
  const teamData = [
    { name: 'Semf ucuk', position: 'CEO & FOUNDER', avatar: '/src/assets/images/avatars/avatar-1.png' },
    { name: 'DIK ADALIN', position: 'ENGINEERING', avatar: '/src/assets/images/avatars/avatar-2.png' },
    { name: 'JENG KOL', position: 'DESIGNER', avatar: '/src/assets/images/avatars/avatar-3.png' },
    { name: 'PET ROMAK', position: 'MARKETING', avatar: '/src/assets/images/avatars/avatar-4.png' },
  ];

  const teamGrid = document.getElementById('team-grid');

  teamGrid.innerHTML = teamData
    .map(
      (m) => `
    <div class="team-card">
      <div class="team-card__image">
        <img src="${m.avatar}" alt="${m.name}" />
      </div>
      <div class="team-card__info">
        <p class="team-card__name">${m.name}</p>
        <p class="team-card__position">${m.position}</p>
      </div>
    </div>
  `
    )
    .join('');
}
