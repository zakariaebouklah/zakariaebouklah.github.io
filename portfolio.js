$(document).ready(function () {

    const sections = $('.section');
    const sectBtns = $('.controls');
    const sectBtn = $('.control');
    const allSections = $('section');

    function PageTransitions() {

        sectBtn.each(function () {
            $(this).on('click', function(){
                $('.active-btn').removeClass('active-btn');
                this.className += ' active-btn';
                sections.removeClass('active')

                let id = $(this).data('id')

                $('#'+ id).addClass('active')
                if (id === 'skills') {
                    ProgressBarAnimation();
                }
            })  
        })
        
    }
    
    PageTransitions();

    function ProgressBarAnimation() {
        let prgrss  =  $('.progress-inner')

        prgrss.innerWidth(0)

        prgrss.each(function () {
        let percentage = $(this).parent().prev().children('p').html();
            $(this).animate({
            'width' : (150 * percentage)/100
        }, 3000);
        });
    }

    // dark-light mode
    const themeCtrl = document.querySelector(".themes");
    themeCtrl.addEventListener('click',() => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });


});

