
var parallaxHeaders = document.querySelectorAll('.veilHome h1');
var parallaxArr = Array.from(parallaxHeaders);
var veil = document.querySelectorAll('.veil');
var veilArr = Array.from(veil);
var mqSmall = (window.matchMedia("(max-width: 991px)"));
var mqLarge = (window.matchMedia("(min-width: 992px)"));

for(i = 0; i < parallaxArr.length; i++){
    parallaxArr[i].addEventListener('mouseover', function(){
        this.parentNode.style.backgroundColor = 'rgba(0,0,0,0)';
        this.addEventListener('mouseleave', function(){
            this.parentNode.style.backgroundColor = 'rgba(0,0,0,0.6)';
        })
    })
}

function popup() {
    if(mqSmall.matches){
        for(i = 0; i < veilArr.length; i++){
            var divs = Array.from(veilArr[i].querySelectorAll('div'));
            for(x = 0; x < divs.length; x++){
                divs[1].classList.remove("d-none");
                divs[0].classList.remove("d-none");
                divs[1].classList.add("animate");
                divs[0].classList.add('animate2');
            }
        }
    } else if(mqLarge.matches) {

        for(i = 0; i < veilArr.length; i++){
            var divs = Array.from(veilArr[i].querySelectorAll('div'));
            for(x = 0; x < divs.length; x++){
                divs[1].classList.add("d-none");
                divs[0].classList.add("d-none");
                divs[1].classList.remove("animate");
                divs[0].classList.remove('animate2');
            }
            veilArr[i].addEventListener('mouseover', function(){
                var divs = Array.from(this.querySelectorAll('div'));
                for(x = 0; x < divs.length; x++){
                    divs[1].classList.remove("d-none");
                    divs[0].classList.remove("d-none");
                    divs[1].classList.add("animate");
                    divs[0].classList.add('animate2');
                }
                this.addEventListener('mouseleave', function(){
                    for(x = 0; x < divs.length; x++){
                    divs[1].classList.add("d-none");
                    divs[0].classList.add("d-none");
                    divs[1].classList.remove("animate");
                    divs[0].classList.remove('animate2');
                }
                })
            })
        }
    }
}
mqSmall.addListener(popup);
mqLarge.addListener(popup());