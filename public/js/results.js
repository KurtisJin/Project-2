

const festivalButtonClickHandler = async (event) => {
    const response = await fetch(`/api/festivals`, {
        method: 'POST',
        body: JSON.stringify({ ticketmaster_id: event.target.dataset.id }),
        headers: {
        'Content-Type': 'application/json',
        },
    });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to create festival');
  }
}


  document
  .querySelector('.festival_button')
  .addEventListener('click', festivalButtonClickHandler );