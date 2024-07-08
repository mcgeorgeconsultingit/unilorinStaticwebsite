const links = document.querySelectorAll('.admissionPageLinks');
const admissionItem = document.querySelectorAll('.admissionItem');
const requirements = document.getElementById('admissionGenRequirementsContent');
const courses = document.getElementById('admissionCourses');
const aboutLocation = document.getElementById('admissionApplicationLink');
const coreValues = document.getElementById('admissionApplication');
const ranking = document.getElementById('aboutUsRanking');
const awards = document.getElementById('aboutUsAwards');
const menu = document.getElementById('flush-collapseOne');
const accordionWrapper = document.querySelector('#accordionWrapper');
const accordionHeader = document.querySelector('.accordionItemContent');
const button = document.getElementById('buttonIcon');
const buttonContent = document.getElementById('accordion-button1');

window.onload = function() {
    window.scrollTo(0, 0);
};

links.forEach(link => {
    link.addEventListener('click', (event) => {
        links.forEach(subLink => {            
            if (subLink.classList.contains('admission-active-page-link')) {
                subLink.classList.remove('admission-active-page-link');
            }
        })
        admissionItem.forEach(item => {
            if (item.classList.contains('admissionContentActive')) {
                item.classList.remove('admissionContentActive');
            }
            // console.log('working');
        })
        if (event.target.classList.contains('requirements')){
            // ranking.classList.add('admissionContentActive');
            requirements.classList.toggle('admissionContentActive');
            event.target.classList.toggle('admission-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('history')){
            history.classList.add('admissionContentActive');
            event.target.classList.toggle('admission-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('courses')){
            courses.classList.add('admissionContentActive');
            event.target.classList.toggle('admission-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('location')){
            aboutLocation.classList.add('admissionContentActive');
            event.target.classList.toggle('admission-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('coreValues')){
            coreValues.classList.add('admissionContentActive');
            event.target.classList.toggle('admission-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('ranking')){
            ranking.classList.add('admissionContentActive');
            event.target.classList.toggle('admission-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('awards')){
            awards.classList.add('admissionContentActive');
            event.target.classList.toggle('admission-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        // console.log(event.target.classList);
    });
})


accordionWrapper.addEventListener('click', () => {
    if(accordionWrapper.classList.contains('collapsed')){
        accordionHeader.textContent = `Section Menu`;
    }
    else{
        accordionHeader.textContent = `Hide Menu`;
    }
});