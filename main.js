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
    const backUpButton = document.getElementById('backUpButton') 
    if (scrollY > 600) {
        backUpButton.classList.add('scroll')
    } else {
        backUpButton.classList.remove('scroll')
    }
}