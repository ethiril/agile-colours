var defaultColourRules = [
  {
    colour: 'lightgreen',
    labels: ['story', 'enhancement']
  },
  {
    colour: 'lightcoral',
    labels: ['bug','Critical']
  },
  {
     colour: 'lightyellow',
     labels: ['chore', 'documentation', 'question']
  }
]


var colourRules = defaultColourRules

function repaint() {
  var cards = document.getElementsByClassName('zhc-issue-card');
  let sidebar = document.getElementsByClassName('zhc-sidebar')[0];
  chrome.storage.sync.get('toggles', function(data) {
    if (data.toggles.hidesidebar) {
      sidebar.setAttribute('style', "visibility: hidden; width: 0;");
    } else {
      sidebar.removeAttribute('style');
    }
    for (var i = 0, l = cards.length; i < l; i++) {
      var card = cards[i];
      var spans = card.getElementsByTagName('span');
      for (var j= 0; j< spans.length; j++) {
        paintCard(spans[j], card, !data.toggles.colourissue);
      }
    }
  });
}

function paintCard(span, card, reset) {
  if (reset) {
    card.style.backgroundColor = 'white';
  } else {
    colourRules.forEach(function(rule) {
        if (rule.labels.indexOf(span.textContent) >= 0) {
          card.style.backgroundColor = rule.colour;
        }
    })
  }
}

let painting = false
const paintDebounce = 5

function check () {
  setTimeout(() => {
    if (!document.getElementsByClassName('zh-app__workspace')[0]) {
      check()
    } else {
      document.getElementsByClassName('zh-app__workspace')[0].addEventListener('DOMSubtreeModified', () => {
        if (!painting) {
          painting = true
            repaint();
          setTimeout(() => {
            painting = false
          }, paintDebounce)
        }
      });
    }
  }, paintDebounce);
}

check();
