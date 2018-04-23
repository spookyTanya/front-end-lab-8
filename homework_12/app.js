const model = {
    currentPerson: {},
    allPersons: [
        {
            name: 'Lily Butler',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
        }, {
            name: 'Waller Perry',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
        }, {
            name: 'Tammi Donovan',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
        }, {
            name: 'Doreen Flowers',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
        }, {
            name: 'Price Pace',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
        }, {
            name: 'Larson Maldonado',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
        }, {
            name: 'Berg Bolton',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
        }, {
            name: 'Mack Lott',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
        }, {
            name: 'Rosanna Mcleod',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
        }, {
            name: 'Rosalie Rice',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
        }, {
            name: 'Virginia Buchanan',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
        }, {
            name: 'Lorna Stein',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
        }, {
            name: 'Rosalie Steele',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
        }, {
            name: 'Wilcox Boyd',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
        }, {
            name: 'Ollie Rice',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
        }
    ]
};

const control = {
    init: function() {
        sorting.init();
        listView.init();
        listView.render();

        scoresView.init();
        scoresView.render();

        profileView.init();
    },
    getAllNames: function() {
        return model.allPersons.map(el=>el.name);
    },
    getAllScores: function() {
        return model.allPersons.map(el=>el.score);
    },
    setCurrentPerson: function(index) {
        model.currentPerson = model.allPersons[index];
        this.viewCurrentProfile();
    },
    getCurrentPerson: function() {
        return model.currentPerson;
    },
    viewCurrentProfile: function() {
        profileView.render();
    },
    setCurrentPersonScore: function(value) {
        model.currentPerson.score = value;
        $('span')[2].style.color = 'black';
        profileView.render();
        scoresView.render();
    }
    
};

const listView = {
    init: function() {
        this.$container = $('.names');
        this.handleClicks();
    },
    render: function() {
        let template = control.getAllNames().reduce((acc, cur, i) => {
            return acc += `<li>${cur}</li>`;
        }, '');
        this.$container.html(template);
    },
    handleClicks: function() {
        this.$container.on('click','li', function(e) {
            let currentIndex = $(e.target).index();
            control.setCurrentPerson(currentIndex);
        });
    }
};

const scoresView = {
    init: function() {
        this.$container = $('.scores');
        this.handleClicks();
    },
    render: function() {
        let template = control.getAllScores().reduce((acc, cur) => {
            return acc += `
                <li>
                    <span>${cur}</span>
                    <input class="hidden score-input" type="text" value="${cur}">
                </li>
            `
        }, '');
        this.$container.html(template);
    },
    handleClicks: function() {
        this.$container.on('click', 'li', function(e) {
            let $currentLi = $(e.target);
            let $currentSpan = $currentLi.find('span');
            let $currentInput = $currentLi.find('input.score-input');
            let currentIndex = $currentLi.index();
            if (!$currentInput.is('.hidden')) {
                return false;
            }
            control.setCurrentPerson(currentIndex);
            $currentSpan.addClass('hidden');
            $currentInput.removeClass('hidden').focus();
        });
        this.$container.on('focusout .score-input', function(e) {
            let newScore = $(e.target).val();
            control.setCurrentPersonScore(newScore);
            $('span')[2].style.color = 'black';
            $('span')[3].style.color = 'black';
        });
    }
};

const profileView = {
    init: function() {
        this.$container = $('.profile');
    },
    render: function() {
        let currentPerson = control.getCurrentPerson();
        let template = `
            <img src="${currentPerson.photoUrl}">
            <h3>${currentPerson.name}</h3>
            <p>Score:${currentPerson.score}</p>
        `
        this.$container.html(template);
    }
};


const sorting = {
    init: function(){
        $('.sort-controls').empty();
        var divname = document.createElement('div');
        divname.innerHTML = 'Name'; 
        $('.sort-controls').append(divname);
        divname.className = "sortList";

        var sort = document.createElement('div');
        divname.append(sort);
        sort.className = 'sort';

        var sortup = document.createElement('span');
        sortup.innerHTML = "&#x25b2;";
        sort.append(sortup);
        sortup.addEventListener('click', ()=>{
            sorting.sortByNameAsc();       
            $('span').removeClass('active');
            sortup.className = 'active';});

        var sortdown = document.createElement('span');
        sortdown.innerHTML = "&#x25bc;";
        sort.append(sortdown);
        sortdown.addEventListener('click', ()=>{
            sorting.sortByNameDesc();   
            $('span').removeClass('active');
            sortdown.className = 'active';});

        var divname2 = document.createElement('div');
        divname2.innerHTML = 'Score'; 
        $('.sort-controls').append(divname2);
        divname2.className = "sortScore";

        var sort2 = document.createElement('div');
        divname2.append(sort2);
        sort2.className = 'sort';
        
        var sortup2 = document.createElement('span');
        sortup2.innerHTML = "&#x25b2;";
        sort2.append(sortup2);
        sortup2.addEventListener('click', ()=>{
            sorting.sortByScoreAsc();        
            $('span').removeClass('active');
            sortup2.className = 'active';});

        var sortdown2 = document.createElement('span');
        sortdown2.innerHTML = "&#x25bc;";
        sort2.append(sortdown2);
        sortdown2.addEventListener('click', ()=>{
            sorting.sortByScoreDesc();
            $('span').removeClass('active');
            sortdown2.className = 'active';});
    },
    sortAllNames: function(key, order='asc'){
        return function(a, b) {
            if(!a.hasOwnProperty(key) || 
               !b.hasOwnProperty(key)) {
              return 0; 
            }
        
            const varA = (typeof a[key] === 'string') ? 
              a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ? 
              b[key].toUpperCase() : b[key];
              
            let comparison = 0;
            if (varA > varB) {
              comparison = 1;
            } else if (varA < varB) {
              comparison = -1;
            }
            return (
              (order == 'desc') ? 
              (comparison * -1) : comparison

            );
        }
    },
    sortByNameAsc: function(){
        model.allPersons.sort(sorting.sortAllNames('name'));
        listView.render();
        scoresView.render();
    },
    sortByNameDesc: function(){
        model.allPersons.sort(sorting.sortAllNames('name','desc'));
        listView.render();
        scoresView.render();
    },
    sortByScoreAsc: function(){
        model.allPersons.sort(sorting.sortAllNames('score'));
        listView.render();
        scoresView.render();
    },
    sortByScoreDesc: function(){
        model.allPersons.sort(sorting.sortAllNames('score', 'desc'));
        listView.render();
        scoresView.render();
    }
}

control.init();

