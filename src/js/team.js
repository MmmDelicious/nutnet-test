import avatar1 from '../assets/images/avatars/avatar-1.png';
import avatar2 from '../assets/images/avatars/avatar-2.png';
import avatar3 from '../assets/images/avatars/avatar-3.png';
import avatar4 from '../assets/images/avatars/avatar-4.png';

export function initTeam() {
  const teamData = [
    { name: 'Semf ucuk', position: 'CEO & FOUNDER', avatar: avatar1 },
    { name: 'DIK ADALIN', position: 'ENGINEERING', avatar: avatar2 },
    { name: 'JENG KOL', position: 'DESIGNER', avatar: avatar3 },
    { name: 'PET ROMAK', position: 'MARKETING', avatar: avatar4 },
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
