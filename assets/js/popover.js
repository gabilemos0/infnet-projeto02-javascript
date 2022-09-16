const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
)

const popoverList = [...popoverTriggerList].map(
  popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl)
)

const popoverEmail = document.getElementById('popover-email')
const popover = new bootstrap.Popover(popoverEmail, options)
