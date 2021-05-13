const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#festival-name').value.trim();
  const needed_funding = document.querySelector('#festival-funding').value.trim();
  const description = document.querySelector('#festival-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/festivals`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
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
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/festivals/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete festival');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
