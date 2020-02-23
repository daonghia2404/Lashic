window.onload = function() {
    const pagination = {
        init: function(){
            this.click();
        },
        click:function(){
            const items = document.querySelectorAll('.pagination li');
            items.forEach(item => item.addEventListener('click', function(){
                items.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }))
        }
    }
    pagination.init();
}