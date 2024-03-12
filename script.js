 document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenCards = document.querySelectorAll('.hidden');

    showMoreBtn.addEventListener('click', function() {
      hiddenCards.forEach(function(card) {
        card.classList.remove('hidden');
      });
    
      showMoreBtn.style.display = 'none';
    });
  });



  function showSuccessMessage() {
    // استخدام SweetAlert2 لعرض رسالة نجاح
    Swal.fire({
      icon: 'success',
      title: 'Book Successfully ',
      text: ' thank you for choosing!!',
      confirmButtonColor: '#28a745',
    });
  }


  