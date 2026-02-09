/* ===============================
   uni.js (clean)
   Strong search + dropdown filters
   =============================== */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('universitySearch');
  const regionFilter = document.getElementById('regionFilter');
  const majorFilter = document.getElementById('majorFilter');
  const typeFilter = document.getElementById('typeFilter');
  const sortBy = document.getElementById('sortBy'); // optional
  const resultCount = document.getElementById('resultCount');
  const noResults = document.getElementById('noResults');
  const activeFiltersDiv = document.getElementById('activeFilters'); // optional
  const grid = document.getElementById('universitiesGrid');
  const filterBar = document.getElementById('filterBar');

  if (!searchInput || !regionFilter || !majorFilter || !typeFilter || !grid) return;

  const norm = (s) =>
    (s ?? '')
      .toString()
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();

  // Your HTML uses values like "All Regions" etc. [file:59]
  const isAll = (v) => {
    const x = norm(v);
    return x === '' || x.startsWith('all ');
  };

  const getCards = () => Array.from(document.querySelectorAll('.university-card'));

  function updateResultCount(count) {
    if (!resultCount) return;
    resultCount.textContent = `${count} universities found`;
  }

  function updateActiveFilters() {
    if (!activeFiltersDiv) return;
    activeFiltersDiv.innerHTML = '';

    const filters = [
      { el: regionFilter, label: 'Region' },
      { el: majorFilter, label: 'Major' },
      { el: typeFilter, label: 'Type' }
    ];

    filters.forEach(({ el, label }) => {
      if (!isAll(el.value)) {
        const selectedText = el.options[el.selectedIndex]?.text || el.value;
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `${label}: ${selectedText} <button type="button" data-clear="${el.id}">×</button>`;
        activeFiltersDiv.appendChild(tag);
      }
    });

    activeFiltersDiv.querySelectorAll('button[data-clear]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-clear');
        const el = document.getElementById(id);
        if (!el) return;

        // reset to "All" (first option)
        el.selectedIndex = 0;
        filterUniversities();
      });
    });
  }

  function filterUniversities() {
    const term = norm(searchInput.value);
    const selectedRegion = regionFilter.value;
    const selectedMajor = majorFilter.value;
    const selectedType = typeFilter.value;

    let visible = 0;

    getCards().forEach(card => {
      const uniRegion = norm(card.getAttribute('data-region'));
      const uniMajor = norm(card.getAttribute('data-major')); // can be multi values [file:59]
      const uniType = norm(card.getAttribute('data-type'));

      // Strong search: use visible text + attributes (so "Shan" matches "Shan State") [file:59]
      const cardText = norm(card.textContent);
      const searchable = `${cardText} ${uniRegion} ${uniMajor} ${uniType}`;
      const matchesSearch = !term || searchable.includes(term);

      const matchesRegion = isAll(selectedRegion) || uniRegion === norm(selectedRegion);
      const matchesMajor = isAll(selectedMajor) || uniMajor.includes(norm(selectedMajor));
      const matchesType = isAll(selectedType) || uniType === norm(selectedType);

      const show = matchesSearch && matchesRegion && matchesMajor && matchesType;

      // IMPORTANT: show with '' so CSS grid keeps UI
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    updateResultCount(visible);
    updateActiveFilters();
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  function sortUniversities() {
    if (!sortBy) return;
    const sortValue = sortBy.value;
    const cards = getCards();

    cards.sort((a, b) => {
      if (sortValue === 'name') {
        const aName = (a.querySelector('h3')?.textContent || '').trim();
        const bName = (b.querySelector('h3')?.textContent || '').trim();
        return aName.localeCompare(bName);
      }
      if (sortValue === 'region') {
        const aRegion = (a.getAttribute('data-region') || '').trim();
        const bRegion = (b.getAttribute('data-region') || '').trim();
        return aRegion.localeCompare(bRegion);
      }
      return 0;
    });

    cards.forEach(card => grid.appendChild(card));
  }

  // Read homepage search ?search=... [web:7]
  function applyUrlSearch() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('search');
    if (q) searchInput.value = q;

    filterUniversities();

    // optional scroll to filters
    const filterSection = document.querySelector('.filter-section');
    if (q && filterSection) {
      setTimeout(() => {
        filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 250);
    }
  }

  // Events (remove inline onkeyup/onchange in HTML) [file:59]
  searchInput.addEventListener('input', filterUniversities);
  regionFilter.addEventListener('change', filterUniversities);
  majorFilter.addEventListener('change', filterUniversities);
  typeFilter.addEventListener('change', filterUniversities);
  if (sortBy) sortBy.addEventListener('change', sortUniversities);

  // Auto-hide filter bar
  (function () {
    if (!filterBar) return;
    let last = 0;
    const threshold = 120;

    filterBar.classList.add('visible');
    filterBar.classList.remove('hidden');

    window.addEventListener('scroll', () => {
      const cur = window.pageYOffset || document.documentElement.scrollTop;

      if (cur <= threshold) {
        filterBar.classList.add('visible');
        filterBar.classList.remove('hidden');
        last = cur;
        return;
      }
      if (cur > last) {
        filterBar.classList.add('hidden');
        filterBar.classList.remove('visible');
      } else {
        filterBar.classList.add('visible');
        filterBar.classList.remove('hidden');
      }
      last = cur;
    }, { passive: true });
  })();

  applyUrlSearch();
});
