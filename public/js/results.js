const festivalButtonClickHandler = async (event) => {
  event.preventDefault();
    const response = await fetch(`/api/festivals`, {
        method: 'POST',
        body: JSON.stringify({ ticketmaster_id: event.target.dataset.id }),
        headers: {
        'Content-Type': 'application/json',
      },
    });
  console.log(response);
  // const retrieve = await fetch(`/api/results`, {
  //       method: `GET`,
  //       body: JSON.stringify({  })
  //       })

  if (response.ok) {
    document.location.replace('/results');
  } else {
    alert('Failed to create festival');
  }
}


  document
  .querySelector('.festival_button')
  .addEventListener('click', festivalButtonClickHandler );