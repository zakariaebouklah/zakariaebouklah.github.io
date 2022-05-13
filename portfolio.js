$(document).ready(function () {

    const sections = $('.section');
    const sectBtns = $('.controls');
    const sectBtn = $('.control');
    const allSections = $('section');

    console.log(typeof(sectBtn))

    function PageTransitions() {

        sectBtn.each(function () {
            $(this).on('click', function(){
                $('.active-btn').removeClass('active-btn');
                this.className += ' active-btn';
                // console.log($(this).data('id'))
                sections.removeClass('active')

                let id = $(this).data('id')

                $('#'+ id).addClass('active')
                if (id === 'skills') {
                    ProgressBarAnimation();
                }
            })  
        })
    
        console.log(allSections)
    
        
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

});
