document.querySelectorAll('.courseNav ul li a').forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'active' class from all items
        document.querySelectorAll('.courseNav ul li a').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked item
        this.classList.add('active');
    });
});
