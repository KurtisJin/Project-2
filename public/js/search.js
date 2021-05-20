
const searchHandler = async (event) =>{
    event.preventDefault();
    const query = document.querySelector("#search-input").value.trim();

  if (query) {
    document.location.replace(`/results/${query}`);
  } else {
    alert('Failed to create festival');
  }
}
document.querySelector("#search-form").addEventListener("submit", searchHandler)