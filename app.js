const bgGray = document.querySelectorAll(".bg-link");
let activeLink = null;
bgGray.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (activeLink) {
      activeLink.style.backgroundColor = "#ffffff";
    }
    activeLink = link;
    link.style.backgroundColor = "#e5e7eb";
  });
});

//phân trang
const table = document.getElementById("myTable");
const rows = table.rows;
const rowsPerPage = 1;
let currentPage = 1;

function displayRows(page) {
  for (let i = 1; i < rows.length; i++) {
    rows[i].style.display = "none";
  }
  for (
    let i = (page - 1) * rowsPerPage + 1;
    i < page * rowsPerPage + 1 && i < rows.length;
    i++
  ) {
    rows[i].style.display = "table-row";
  }
}

function updatePagination() {
  const pagination = document.getElementById("pagination");
  const numPages = Math.ceil((rows.length - 1) / rowsPerPage);

  let paginationHTML = "";

  // Nút "First"
  paginationHTML += `<a href="#" onclick="changePage(1)"><</a>`;

  for (let i = 1; i <= numPages; i++) {
    paginationHTML += `<a class="${
      i === currentPage ? "active" : ""
    }" href="#"  onclick="changePage(${i})">${i}</a>`;
  }

  // Nút "Last"
  paginationHTML += `<a href="#" onclick="changePage(${numPages})">></a>`;

  pagination.innerHTML = paginationHTML;
}

function changePage(page) {
  currentPage = page;
  displayRows(page);
  updatePagination();
}

displayRows(currentPage);
updatePagination();
//menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-opened');

    const overlay = document.getElementById('overlay');
    overlay.style.display = menu.classList.contains('menu-opened');
}
