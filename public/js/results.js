const festivalButtonClickHandler = async (event) => {
  event.preventDefault();
    const response = await fetch(`/api/festivals`, {
        method: 'POST',
        body: JSON.stringify({ ticketmaster_id: event.target.dataset.id }),
        headers: {
        'Content-Type': 'application/json',
      },
    });

  if (response.ok) {
    alert('Added to your favorites!')
  } else {
    alert('Failed to create festival');
  }
}

var festivalButtons = document.getElementsByClassName('festival_button')

for (let i = 0; i < festivalButtons.length; i++) {
  festivalButtons[i].addEventListener('click', festivalButtonClickHandler);
};
