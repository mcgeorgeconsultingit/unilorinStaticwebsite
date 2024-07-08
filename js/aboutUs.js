const links = document.querySelectorAll('.aboutPageLinks');
const aboutUsItem = document.querySelectorAll('.aboutUsItem');
const leadership = document.getElementById('aboutUsLeadershipContent');
const history = document.getElementById('aboutUsHistoryContent');
const visionAndMission = document.getElementById('aboutUsVisionAndMission');
const aboutLocation = document.getElementById('aboutUsLocation');
const coreValues = document.getElementById('aboutUsCoreValues');
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
            if (subLink.classList.contains('about-active-page-link')) {
                subLink.classList.remove('about-active-page-link');
            }
        })
        aboutUsItem.forEach(item => {
            if (item.classList.contains('aboutUsContentActive')) {
                item.classList.remove('aboutUsContentActive');
            }
            // console.log('working');
        })
        if (event.target.classList.contains('leadership')){
            // ranking.classList.add('aboutUsContentActive');
            leadership.classList.toggle('aboutUsContentActive');
            event.target.classList.toggle('about-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('history')){
            history.classList.add('aboutUsContentActive');
            event.target.classList.toggle('about-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('visionAndMission')){
            visionAndMission.classList.add('aboutUsContentActive');
            event.target.classList.toggle('about-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('location')){
            aboutLocation.classList.add('aboutUsContentActive');
            event.target.classList.toggle('about-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('coreValues')){
            coreValues.classList.add('aboutUsContentActive');
            event.target.classList.toggle('about-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('ranking')){
            ranking.classList.add('aboutUsContentActive');
            event.target.classList.toggle('about-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        else if (event.target.classList.contains('awards')){
            awards.classList.add('aboutUsContentActive');
            event.target.classList.toggle('about-active-page-link');
            menu.classList.toggle('show');
            accordionHeader.textContent = `Show Menu`;
            accordionWrapper.classList.toggle('collapsed');
            button.classList.toggle('collapsed');
            buttonContent.classList.toggle('collapsed');
        }
        // console.log(event.target.classList);
    });
})

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onError': function (event) {
                event.target.src += '';
            },
            // 'onStateChange': function (event) {
            //     if(event.data === YT.PlayerState BUFFERING){
            //         if(!player.getVideoUrl()) {
            //             event.target.src += '';
            //         }
            //     }
            // }
        }
    });
}
 if(window.YT) {
    onYouTubeIframeAPIReady();
 }else {
    var tag = document.createElement
 }



accordionWrapper.addEventListener('click', () => {
    if(accordionWrapper.classList.contains('collapsed')){
        accordionHeader.textContent = `Section Menu`;
    }
    else{
        accordionHeader.textContent = `Hide Menu`;
    }
});
// accordionHeader.textContent = accordionHeader.textContent === 'Hide Menu' ? 'Section Menu' : 'Hide Menu';
