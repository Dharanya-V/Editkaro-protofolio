 const slider=document.getElementById("slider")
        let scrollSpeed=1
        let slideWidth;
        function animate(){
            slider.scrollLeft+=scrollSpeed
            if (slider.scrollLeft>=slider.scrollWidth/2){
                slider.scrollLeft=0
            }
            requestAnimationFrame(animate)
        }
        window.onload=()=>{
            animate()
        }

const scriptURL = 'https://script.google.com/macros/s/AKfycbw_oEbo_Wb5YGVWekJXuQzxUtRGOlmlHNAV3r618hA8gCzeGaRgFVM9u98n1iBDQj8VAA/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
