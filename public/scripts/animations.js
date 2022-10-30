const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hide')
hiddenElements.forEach((el) => observer.observe(el))

const navi = document.querySelector('.nav')
const heading = document.querySelector('.hero-heading')


const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navi.classList.add('show-nav');
        }
        else {
            navi.classList.remove('show-nav');
        }
    })
})

headingObserver.observe(heading)

const signupBtns = document.querySelectorAll('.signup-btn-initial');
const exitBtn = document.querySelector('.exit-btn-container')
const popup_signup = document.querySelector('.popup-signup')

signupBtns.forEach((e) => {
    e.addEventListener('click', () => {
        popup_signup.style = 'display: flex;';
    })
})

exitBtn.addEventListener('click', () => {
    popup_signup.style = 'display: none;'
})

    