const categories = {
  'AI i dane': { color: '#b86b53', icon: '✦' },
  'Web i strony': { color: '#577d92', icon: '◌' },
  'Kod i narzędzia': { color: '#7c6d9c', icon: '⌘' },
  'Tekst i treść': { color: '#9b8054', icon: 'Aa' },
  'Komputer': { color: '#5f9676', icon: '▣' },
  'Projektowanie': { color: '#ad7181', icon: '◇' },
};

const seedTerms = [
  { id: 'prompt', title: 'Prompt', category: 'AI i dane', definition: 'Instrukcja lub polecenie przekazane modelowi AI. Dobry prompt mówi, co ma powstać, dla kogo, w jakim formacie i z jakimi ograniczeniami.', context: 'Prompt jest jak brief dla współpracownika — im jaśniejszy cel i kontekst, tym mniej zgadywania po drugiej stronie.', example: 'Napisz opis produktu w 3 zdaniach. Ton: spokojny i konkretny. Odbiorca: osoba początkująca.', tags: ['AI', 'instrukcja'], related: ['LLM', 'RAG', 'Fine-tuning'] },
  { id: 'llm', title: 'LLM', category: 'AI i dane', definition: 'Large Language Model — duży model językowy, który rozpoznaje wzorce w języku i generuje tekst na podstawie kontekstu.', context: 'Chatboty, tłumacze i asystenci tekstowi korzystają z LLM. Model nie „myśli” jak człowiek — przewiduje najbardziej prawdopodobną kolejną część wypowiedzi.', example: 'ChatGPT, Claude i Gemini to aplikacje korzystające z modeli językowych.', tags: ['AI', 'model'], related: ['Prompt', 'Token', 'API'] },
  { id: 'rag', title: 'RAG', category: 'AI i dane', definition: 'Retrieval-Augmented Generation — sposób pracy, w którym AI najpierw wyszukuje informacje w wybranych źródłach, a dopiero potem buduje odpowiedź.', context: 'RAG pomaga ograniczyć zmyślanie i pozwala odpowiadać na podstawie Twoich dokumentów, instrukcji albo bazy wiedzy.', example: 'Pytanie → wyszukanie fragmentów w dokumentacji → odpowiedź AI z wykorzystaniem tych fragmentów.', tags: ['AI', 'wyszukiwanie'], related: ['LLM', 'Embedding', 'Baza danych'] },
  { id: 'token', title: 'Token', category: 'AI i dane', definition: 'Mały fragment tekstu, na który model językowy dzieli zdanie. Tokenem może być całe słowo, jego część, znak lub spacja.', context: 'Liczba tokenów wpływa na długość kontekstu i koszt korzystania z API. Token to nie zawsze jedno słowo.', example: 'Zdanie „To jest test.” zostanie podzielone na kilka tokenów — zależnie od modelu i języka.', tags: ['AI', 'tekst'], related: ['LLM', 'Kontekst', 'API'] },
  { id: 'api', title: 'API', category: 'Kod i narzędzia', definition: 'Application Programming Interface — ustalony sposób, w jaki jeden program może poprosić inny program o dane lub wykonanie operacji.', context: 'API jest jak menu w restauracji: opisuje, co można zamówić i w jakiej formie, bez pokazywania, jak działa kuchnia.', example: 'Aplikacja pogodowa pobiera aktualną temperaturę, wysyłając zapytanie do API serwisu pogodowego.', tags: ['kod', 'integracje'], related: ['Endpoint', 'JSON', 'HTTP'] },
  { id: 'html', title: 'HTML', category: 'Web i strony', definition: 'Język znaczników, który opisuje strukturę strony internetowej: nagłówki, akapity, linki, obrazy, formularze i sekcje.', context: 'HTML mówi, czym jest element. CSS określa, jak wygląda, a JavaScript — jak reaguje.', example: '<h1>Moja strona</h1>\n<p>To jest pierwszy akapit.</p>', tags: ['web', 'struktura'], related: ['CSS', 'DOM', 'Semantyka'] },
  { id: 'css', title: 'CSS', category: 'Web i strony', definition: 'Cascading Style Sheets — język stylów opisujący wygląd strony: kolory, odstępy, układ, typografię i zachowanie na różnych ekranach.', context: 'CSS pozwala oddzielić treść od prezentacji. Dzięki media queries strona może wyglądać dobrze na komputerze i telefonie.', example: '.card {\n  padding: 24px;\n  border-radius: 12px;\n  background: #fff;\n}', tags: ['web', 'design'], related: ['HTML', 'Flexbox', 'Responsive'] },
  { id: 'javascript', title: 'JavaScript', category: 'Kod i narzędzia', definition: 'Język programowania używany między innymi do dodawania interakcji i logiki na stronach oraz w aplikacjach webowych.', context: 'JavaScript może reagować na kliknięcia, zmieniać treść strony, pobierać dane i zapisywać ustawienia użytkownika.', example: "button.addEventListener('click', () => {\n  console.log('Działa!');\n});", tags: ['kod', 'web'], related: ['DOM', 'Frontend', 'TypeScript'] },
  { id: 'frontend', title: 'Frontend', category: 'Web i strony', definition: 'Część aplikacji, którą widzi i obsługuje użytkownik: ekrany, przyciski, formularze, animacje i reakcje na działanie.', context: 'Frontend działa zwykle w przeglądarce. Dobra warstwa frontendowa łączy czytelny interfejs z logiką aplikacji.', example: 'Widok wyszukiwarki, karta hasła i przycisk „Dodaj” należą do frontendu.', tags: ['web', 'interfejs'], related: ['Backend', 'UI', 'JavaScript'] },
  { id: 'backend', title: 'Backend', category: 'Kod i narzędzia', definition: 'Część aplikacji działająca po stronie serwera: przechowuje dane, wykonuje operacje i udostępnia je frontendowi.', context: 'Użytkownik zwykle nie widzi backendu bezpośrednio, ale to on obsługuje konta, bazy danych i reguły aplikacji.', example: 'Po zapisaniu nowego hasła backend może zweryfikować dane i umieścić je w bazie.', tags: ['kod', 'serwer'], related: ['Frontend', 'Baza danych', 'Endpoint'] },
  { id: 'dom', title: 'DOM', category: 'Web i strony', definition: 'Document Object Model — drzewiasty model dokumentu HTML, który JavaScript może odczytywać i zmieniać.', context: 'Kiedy skrypt podmienia tekst nagłówka albo dodaje nową kartę, pracuje na DOM-ie strony.', example: "document.querySelector('h1').textContent = 'Nowy tytuł';", tags: ['web', 'JavaScript'], related: ['HTML', 'JavaScript', 'Event'] },
  { id: 'json', title: 'JSON', category: 'Kod i narzędzia', definition: 'Lekki format zapisu danych oparty na parach klucz–wartość. Jest czytelny dla ludzi i łatwy do przetwarzania przez programy.', context: 'JSON jest częstym językiem wymiany danych między frontendem, backendem i API.', example: '{\n  "title": "CSS",\n  "category": "Web i strony"\n}', tags: ['dane', 'format'], related: ['API', 'JavaScript', 'Baza danych'] },
  { id: 'git', title: 'Git', category: 'Kod i narzędzia', definition: 'System kontroli wersji, który zapisuje historię zmian w plikach i pozwala bezpiecznie pracować nad kodem.', context: 'Git pozwala wrócić do wcześniejszej wersji, porównać zmiany i współpracować bez nadpisywania pracy innych osób.', example: 'git add .\ngit commit -m "Dodaj wyszukiwarkę"', tags: ['narzędzia', 'wersje'], related: ['Repository', 'Branch', 'Deploy'] },
  { id: 'repository', title: 'Repository', category: 'Kod i narzędzia', definition: 'Repozytorium — katalog projektu śledzony przez Git, zawierający pliki oraz historię ich zmian.', context: 'Repozytorium może być lokalne na komputerze albo przechowywane zdalnie, np. na GitHubie.', example: 'Repozytorium aplikacji zawiera kod, pliki stylów, instrukcję i konfigurację.', tags: ['Git', 'projekt'], related: ['Git', 'Branch', 'GitHub'] },
  { id: 'responsive', title: 'Responsive', category: 'Web i strony', definition: 'Projektowanie strony tak, aby układ i elementy dopasowywały się do szerokości ekranu — od telefonu po duży monitor.', context: 'Responsywność to nie tylko zmniejszanie elementów. To także priorytetyzowanie treści, wygodne dotykanie i czytelna nawigacja.', example: '@media (max-width: 720px) {\n  .layout { grid-template-columns: 1fr; }\n}', tags: ['web', 'mobile'], related: ['CSS', 'Mobile first', 'UI'] },
  { id: 'ui', title: 'UI', category: 'Projektowanie', definition: 'User Interface — interfejs użytkownika, czyli wizualna i interaktywna warstwa produktu: układ, kolory, typografia i kontrolki.', context: 'Dobre UI pomaga zrozumieć, co można zrobić i co wydarzy się po kliknięciu.', example: 'Przycisk, pole wyszukiwania i karta wyniku to elementy UI.', tags: ['design', 'interfejs'], related: ['UX', 'Komponent', 'Accessibility'] },
  { id: 'ux', title: 'UX', category: 'Projektowanie', definition: 'User Experience — doświadczenie użytkownika podczas korzystania z produktu: łatwość, logika, tempo i poczucie kontroli.', context: 'UX zaczyna się przed wyglądem. Pytanie brzmi: czy użytkownik bez zastanawiania osiągnie swój cel?', example: 'Wyszukiwarka, która działa od razu po wpisaniu słowa, poprawia UX leksykonu.', tags: ['design', 'użyteczność'], related: ['UI', 'Flow', 'Accessibility'] },
  { id: 'accessibility', title: 'Accessibility', category: 'Projektowanie', definition: 'Dostępność — projektowanie produktu tak, aby mogły z niego korzystać osoby o różnych potrzebach i sposobach obsługi.', context: 'To między innymi odpowiedni kontrast, klawiatura, opisy dla czytników ekranu i czytelne komunikaty.', example: 'Przycisk z etykietą „Wyczyść wyszukiwanie” jest lepszy niż sam ozdobny znak bez opisu.', tags: ['design', 'web'], related: ['UI', 'UX', 'Semantyka'] },
  { id: 'ssd', title: 'SSD', category: 'Komputer', definition: 'Solid State Drive — szybki dysk oparty na pamięci flash, bez ruchomych części mechanicznych.', context: 'SSD przyspiesza uruchamianie systemu, aplikacji i plików. Jest zwykle szybszy i cichszy niż starszy dysk HDD.', example: 'Przeniesienie programu do uruchamiania z SSD często wyraźnie skraca czas startu.', tags: ['sprzęt', 'dysk'], related: ['RAM', 'CPU', 'Backup'] },
  { id: 'ram', title: 'RAM', category: 'Komputer', definition: 'Pamięć operacyjna komputera, w której tymczasowo przechowywane są dane używane przez uruchomione programy.', context: 'Więcej RAM-u pomaga pracować z większą liczbą aplikacji jednocześnie. Po wyłączeniu komputera zawartość RAM-u znika.', example: 'Przeglądarka z wieloma kartami i edytor grafiki mogą potrzebować dużo RAM-u.', tags: ['sprzęt', 'pamięć'], related: ['SSD', 'CPU', 'Cache'] },
  { id: 'cache', title: 'Cache', category: 'Komputer', definition: 'Pamięć podręczna — szybkie miejsce na dane, które mogą przydać się ponownie, aby nie pobierać lub nie obliczać ich od początku.', context: 'Cache przyspiesza aplikacje, ale czasem stara kopia danych powoduje, że nie widzisz najnowszej wersji strony.', example: 'Wyczyszczenie cache przeglądarki może pomóc, gdy strona wyświetla nieaktualne pliki.', tags: ['wydajność', 'dane'], related: ['RAM', 'CDN', 'Cookies'] },
  { id: 'markdown', title: 'Markdown', category: 'Tekst i treść', definition: 'Prosty sposób formatowania tekstu za pomocą znaków, np. # dla nagłówka, ** dla pogrubienia i - dla listy.', context: 'Markdown jest popularny w dokumentacji, notatkach, README i narzędziach dla programistów.', example: '# Tytuł\n\nTo jest **ważna** informacja.\n\n- pierwszy punkt', tags: ['tekst', 'dokumentacja'], related: ['HTML', 'README', 'CMS'] },
  { id: 'seo', title: 'SEO', category: 'Web i strony', definition: 'Search Engine Optimization — działania, które pomagają stronie być lepiej rozumianą i znajdowaną w wyszukiwarkach.', context: 'SEO obejmuje treść, strukturę HTML, szybkość, linki i dopasowanie strony do intencji osoby szukającej.', example: 'Opisowa nazwa strony, sensowny nagłówek i użyteczna odpowiedź są lepsze niż upychanie słów kluczowych.', tags: ['web', 'treść'], related: ['HTML', 'Meta tag', 'Keyword'] },
  { id: 'deploy', title: 'Deploy', category: 'Web i strony', definition: 'Publikacja aplikacji lub strony w środowisku, z którego mogą korzystać inni użytkownicy.', context: 'Deploy może oznaczać wysłanie nowej wersji do hostingu, uruchomienie jej i sprawdzenie, czy działa poprawnie.', example: 'Po deployu leksykon jest dostępny pod publicznym adresem zamiast tylko na Twoim komputerze.', tags: ['web', 'publikacja'], related: ['Hosting', 'Build', 'Git'] },
  { id: 'build', title: 'Build', category: 'Kod i narzędzia', definition: 'Proces przygotowania kodu do uruchomienia lub publikacji: kompilacja, optymalizacja i spakowanie plików.', context: 'Wynikiem buildu są zwykle pliki produkcyjne, które można wdrożyć na serwerze.', example: 'npm run build', tags: ['narzędzia', 'publikacja'], related: ['Deploy', 'Frontend', 'npm'] },
  { id: 'cms', title: 'CMS', category: 'Web i strony', definition: 'Content Management System — system do tworzenia, edytowania i publikowania treści bez ręcznej zmiany kodu.', context: 'CMS oddziela treść od technicznej budowy strony, dzięki czemu artykuły może dodawać także osoba nietechniczna.', example: 'WordPress, Ghost i Sanity to przykłady systemów CMS.', tags: ['web', 'treść'], related: ['SEO', 'Markdown', 'Backend'] },
];

const state = { terms: [], query: '', view: 'all', activeCategory: null, layout: 'grid', selectedId: null, dark: localStorage.getItem('slowo-dark') === 'true' };
const els = {};

function loadTerms() {
  const custom = JSON.parse(localStorage.getItem('slowo-custom-terms') || '[]');
  const removed = JSON.parse(localStorage.getItem('slowo-removed-terms') || '[]');
  state.terms = [...seedTerms.filter(term => !removed.includes(term.id)), ...custom];
}

function getFavorites() { return JSON.parse(localStorage.getItem('slowo-favorites') || '[]'); }
function getRecent() { return JSON.parse(localStorage.getItem('slowo-recent') || '[]'); }
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function isFavorite(id) { return getFavorites().includes(id); }
function categoryStyle(category) { return `--category-color: ${categories[category]?.color || '#668270'}`; }
function pluralize(count) { return `${count} ${count === 1 ? 'hasło' : count > 1 && count < 5 ? 'hasła' : 'haseł'}`; }

function filteredTerms() {
  let list = [...state.terms];
  if (state.view === 'favorites') list = list.filter(term => isFavorite(term.id));
  if (state.view === 'recent') { const recent = getRecent(); list = recent.map(id => state.terms.find(term => term.id === id)).filter(Boolean); }
  if (state.activeCategory) list = list.filter(term => term.category === state.activeCategory);
  const query = state.query.trim().toLocaleLowerCase('pl-PL');
  if (query) list = list.filter(term => [term.title, term.category, term.definition, term.context, term.example, ...(term.tags || [])].join(' ').toLocaleLowerCase('pl-PL').includes(query));
  return list;
}

function renderCategories() {
  const counts = Object.fromEntries(Object.keys(categories).map(category => [category, state.terms.filter(term => term.category === category).length]));
  els.categoryList.innerHTML = Object.entries(categories).map(([name, info]) => `<button class="category-item ${state.activeCategory === name ? 'active' : ''}" data-category="${name}" type="button" style="${categoryStyle(name)}"><span></span><strong>${name}</strong><b>${counts[name] || 0}</b></button>`).join('');
  els.categorySelect.innerHTML = Object.keys(categories).map(name => `<option>${name}</option>`).join('');
}

function renderNav() {
  document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === state.view && !state.activeCategory));
  els.allCount.textContent = state.terms.length;
  els.favoriteCount.textContent = getFavorites().filter(id => state.terms.some(term => term.id === id)).length;
  els.recentCount.textContent = getRecent().filter(id => state.terms.some(term => term.id === id)).length;
}

function termCardMarkup(term) {
  return `<article class="term-card" style="${categoryStyle(term.category)}" data-id="${term.id}">
    <div class="term-top"><span class="category-pill"><i></i>${term.category}</span><button class="favorite-button ${isFavorite(term.id) ? 'active' : ''}" data-favorite="${term.id}" type="button" aria-label="${isFavorite(term.id) ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}">${isFavorite(term.id) ? '★' : '☆'}</button></div>
    <h3>${term.title}</h3><p class="term-definition">${term.definition}</p>
    <div class="term-bottom"><div class="term-tags">${(term.tags || []).slice(0, 2).map(tag => `<span class="term-tag">${tag}</span>`).join('')}</div><button class="open-term" data-open="${term.id}" type="button">Otwórz →</button></div>
  </article>`;
}

function renderCards() {
  const terms = filteredTerms();
  els.termGrid.classList.toggle('list-layout', state.layout === 'list');
  const grouped = state.view === 'all' && !state.activeCategory && !state.query;
  if (grouped) {
    els.termGrid.innerHTML = Object.keys(categories).filter(category => terms.some(term => term.category === category)).map(category => {
      const groupTerms = terms.filter(term => term.category === category);
      const info = categories[category];
      return `<section class="category-group" style="${categoryStyle(category)}">
        <header class="category-group-header"><div><span class="category-group-symbol" aria-hidden="true">${info.icon}</span><h3>${category}</h3><span class="category-group-count">${pluralize(groupTerms.length)}</span></div><button data-group-category="${category}" type="button">Pokaż tylko →</button></header>
        <div class="category-group-grid">${groupTerms.map(termCardMarkup).join('')}</div>
      </section>`;
    }).join('');
  } else {
    els.termGrid.innerHTML = terms.map(termCardMarkup).join('');
  }
  els.emptyState.hidden = terms.length > 0;
  els.termGrid.hidden = terms.length === 0;
  const title = state.query ? `Wyniki dla „${state.query}”` : state.activeCategory || ({ all: 'Wszystkie hasła', favorites: 'Ulubione', recent: 'Ostatnio oglądane' }[state.view]);
  els.resultsTitle.textContent = title;
  els.resultCount.textContent = pluralize(terms.length);
  els.resultsSubtitle.textContent = state.query ? 'Hasła dopasowane do nazwy, definicji, kategorii i tagów.' : 'Wybierz hasło, żeby zobaczyć definicję i przykład.';
  els.breadcrumbCurrent.textContent = title;
}

function render() { renderCategories(); renderNav(); renderCards(); }

function toggleFavorite(id) {
  const favorites = getFavorites();
  const next = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  save('slowo-favorites', next); render();
  if (state.selectedId === id) renderDetail(state.terms.find(term => term.id === id));
}

function openDetail(id) {
  const term = state.terms.find(item => item.id === id); if (!term) return;
  state.selectedId = id;
  const recent = getRecent().filter(item => item !== id); save('slowo-recent', [id, ...recent].slice(0, 8)); renderNav();
  renderDetail(term); els.overlay.hidden = false; els.detailDrawer.classList.add('open'); els.detailDrawer.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
}

function exampleFor(term) {
  if (term.example && term.example.trim()) return term.example.trim();
  const fallbackByCategory = {
    'AI i dane': `Przykład: zapisz, jak hasło „${term.title}” wykorzystujesz w swoim narzędziu AI.`,
    'Web i strony': `Przykład: wskaż miejsce, w którym „${term.title}” pojawia się na Twojej stronie.`,
    'Kod i narzędzia': `Przykład: dodaj krótką komendę lub sytuację, w której używasz „${term.title}”.`,
    'Tekst i treść': `Przykład: pokaż jedno zdanie albo fragment tekstu z użyciem „${term.title}”.`,
    'Komputer': `Przykład: opisz sytuację, w której „${term.title}” wpływa na pracę komputera.`,
    'Projektowanie': `Przykład: pokaż element interfejsu, w którym widać zasadę „${term.title}”.`,
  };
  return fallbackByCategory[term.category] || `Przykład użycia hasła „${term.title}”.`;
}

function renderDetail(term) {
  if (!term) return;
  els.detailContent.innerHTML = `<div class="detail-header" style="${categoryStyle(term.category)}"><span class="category-pill"><i></i>${term.category}</span><h2>${term.title}</h2><p>${term.definition}</p></div>
    <div class="detail-section"><h3>W praktyce</h3><p>${term.context || 'Dodaj własny kontekst, kiedy będziesz rozbudowywać to hasło.'}</p></div>
    <div class="detail-section"><h3>Przykład</h3><div class="code-block">${exampleFor(term)}</div></div>
    ${(term.related || []).length ? `<div class="detail-section"><h3>Powiązane hasła</h3><div class="related-list">${term.related.map(name => `<button class="related-term" data-related="${name}" type="button">${name} ↗</button>`).join('')}</div></div>` : ''}
    <div class="detail-actions"><button class="detail-favorite ${isFavorite(term.id) ? 'active' : ''}" data-detail-favorite="${term.id}" type="button">${isFavorite(term.id) ? '★ W ulubionych' : '☆ Dodaj do ulubionych'}</button></div>`;
}

function closeDetail() { els.detailDrawer.classList.remove('open'); els.detailDrawer.setAttribute('aria-hidden', 'true'); els.overlay.hidden = true; document.body.style.overflow = ''; }

function addCustomTerm(form) {
  const data = new FormData(form); const title = data.get('title').trim();
  const term = { id: `custom-${Date.now()}`, title, category: data.get('category'), definition: data.get('definition').trim(), context: 'To hasło zostało dodane do Twojej prywatnej Słowobazy.', example: data.get('example').trim(), tags: ['własne'], related: [] };
  const custom = JSON.parse(localStorage.getItem('slowo-custom-terms') || '[]'); save('slowo-custom-terms', [...custom, term]); state.terms.push(term); form.reset(); els.addDialog.close(); state.view = 'all'; state.activeCategory = null; openDetail(term.id); render();
}

function setup() {
  Object.assign(els, { categoryList: document.querySelector('#categoryList'), categorySelect: document.querySelector('#categorySelect'), allCount: document.querySelector('#allCount'), favoriteCount: document.querySelector('#favoriteCount'), recentCount: document.querySelector('#recentCount'), searchInput: document.querySelector('#searchInput'), clearSearch: document.querySelector('#clearSearch'), termGrid: document.querySelector('#termGrid'), emptyState: document.querySelector('#emptyState'), resultsTitle: document.querySelector('#resultsTitle'), resultsSubtitle: document.querySelector('#resultsSubtitle'), resultCount: document.querySelector('#resultCount'), breadcrumbCurrent: document.querySelector('#breadcrumbCurrent'), overlay: document.querySelector('#overlay'), detailDrawer: document.querySelector('#detailDrawer'), detailContent: document.querySelector('#detailContent'), addDialog: document.querySelector('#addDialog'), addForm: document.querySelector('#addForm') });
  loadTerms(); document.body.classList.toggle('dark-mode', state.dark); render();
  els.searchInput.addEventListener('input', event => { state.query = event.target.value; els.clearSearch.classList.toggle('visible', Boolean(state.query)); renderCards(); });
  els.searchInput.addEventListener('keydown', event => { if (event.key === 'Enter' && filteredTerms()[0]) openDetail(filteredTerms()[0].id); });
  els.clearSearch.addEventListener('click', () => { state.query = ''; els.searchInput.value = ''; els.clearSearch.classList.remove('visible'); renderCards(); els.searchInput.focus(); });
  els.categoryList.addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (!button) return; state.activeCategory = state.activeCategory === button.dataset.category ? null : button.dataset.category; state.view = 'all'; render(); });
  document.querySelector('.main-nav').addEventListener('click', event => { const button = event.target.closest('[data-view]'); if (!button) return; state.view = button.dataset.view; state.activeCategory = null; render(); });
  els.termGrid.addEventListener('click', event => { const group = event.target.closest('[data-group-category]'); if (group) { state.activeCategory = group.dataset.groupCategory; state.view = 'all'; render(); return; } const favorite = event.target.closest('[data-favorite]'); if (favorite) return toggleFavorite(favorite.dataset.favorite); const open = event.target.closest('[data-open]'); if (open) openDetail(open.dataset.open); });
  document.querySelector('.view-controls').addEventListener('click', event => { const button = event.target.closest('[data-layout]'); if (!button) return; state.layout = button.dataset.layout; document.querySelectorAll('.view-button').forEach(item => item.classList.toggle('active', item === button)); renderCards(); });
  document.querySelector('#focusSearchButton').addEventListener('click', () => els.searchInput.focus());
  document.querySelector('#themeButton').addEventListener('click', () => { state.dark = !state.dark; document.body.classList.toggle('dark-mode', state.dark); save('slowo-dark', state.dark); });
  document.querySelector('#closeDrawer').addEventListener('click', closeDetail); els.overlay.addEventListener('click', closeDetail);
  els.detailContent.addEventListener('click', event => { const fav = event.target.closest('[data-detail-favorite]'); if (fav) return toggleFavorite(fav.dataset.detailFavorite); const related = event.target.closest('[data-related]'); if (related) { const term = state.terms.find(item => item.title.toLocaleLowerCase('pl-PL') === related.dataset.related.toLocaleLowerCase('pl-PL')); if (term) openDetail(term.id); } });
  document.querySelectorAll('#openAddButton, #emptyAddButton').forEach(button => button.addEventListener('click', () => els.addDialog.showModal()));
  els.addForm.addEventListener('submit', event => { event.preventDefault(); addCustomTerm(els.addForm); });
  document.querySelector('#mobileMenu').addEventListener('click', () => document.querySelector('#sidebar').classList.toggle('open'));
  document.querySelector('#resetButton').addEventListener('click', () => { if (!confirm('Usunąć własne hasła i przywrócić przykładową zawartość?')) return; localStorage.removeItem('slowo-custom-terms'); localStorage.removeItem('slowo-removed-terms'); state.terms = [...seedTerms]; state.view = 'all'; state.activeCategory = null; render(); });
  document.addEventListener('keydown', event => { if (event.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') { event.preventDefault(); els.searchInput.focus(); } if (event.key === 'Escape') closeDetail(); });
}

setup();
