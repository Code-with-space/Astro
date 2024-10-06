let ticketBook = document.getElementsByClassName('ticket-book');

function openSecondPage() {
    window.location.href = "ticket-book.html";
}


for (let i = 0; i < ticketBook.length; i++) {
    ticketBook[i].addEventListener('click', function() {
        openSecondPage();
    });
}
