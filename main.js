window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showHeaderShaddow()
    showBackToTopButtonOnScroll()
}

function showHeaderShaddow() {
    const navigation = document.getElementById('navigation')
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    const backToTopButton = document.getElementById('backToTopButton') 
    if (scrollY > 600) {
        backToTopButton.classList.add('scroll')
    } else {
        backToTopButton.classList.remove('scroll')
    }
}