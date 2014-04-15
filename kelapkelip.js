/*
fungsi sederhana untuk membuat efek seperti lampu flip flop. 
kelap kelip seperti bintang di surga.. (halah..)
created by: Martin Lilik
martinlilik.blogspot.com
*/

(function($) { 
    
                
    $.fn.kelapkelip = function(options) {
        var settings =$.extend({
            backgroundColor:'white',
            staticbg:false,
            timer:1000
        },options);
        
        // Iterate and reformat each matched element.
        
        return this.each(function() {
            var kk=getRandomColor();
            var kk2=getRandomColor();
            var elem = $( this );
            var thisvalue=$(this).html();
            
            function getRandomColor() {
                var letters = '0123456789ABCDEF'.split('');
                var colorrandom = '#';
                for (var i = 0; i < 6; i++ ) {
                    colorrandom += letters[Math.round(Math.random() * 15)];
                }
                return colorrandom;
            }
            
            function flipflop(){
                var color1=getRandomColor();
                var color2=getRandomColor();
                
                if(settings.staticbg==false){
                    var bglain=getRandomColor();
                    var bglain2=getRandomColor();
                }
                else{
                    var bglain=settings.backgroundColor;
                }
                
                if(settings.backgroundColor==''){
                    elem.css({
                        color: color1,
                        backgroundColor: bglain
                    });
                }
                else{
                    elem.css({
                        color: color2,
                        backgroundColor: bglain
                    });
                }
            }

            window.setInterval(flipflop,settings.timer);
        });    
            
         
    };
 
}(jQuery));
