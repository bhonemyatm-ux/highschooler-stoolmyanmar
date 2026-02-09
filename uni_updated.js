
// uni_updated.js

// Read search parameter from URL when page loads
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get('search');

  const searchInput = document.getElementById('universitySearch');
  if (searchInput && searchTerm) {
    searchInput.value = searchTerm;
    filterUniversities();

    setTimeout(() => {
      const filterSection = document.querySelector('.filter-section');
      if (filterSection) {
        filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }

  // Handle URL parameter for major
  const major = urlParams.get('major');
  const majorFilter = document.getElementById('majorFilter');
  if (majorFilter && major) {
    const majorValue = major.toLowerCase().replace(/\s+/g, '-');
    majorFilter.value = majorValue;
    filterUniversities();
  }
});

// Elements
const searchInput = document.getElementById('universitySearch');
const regionFilter = document.getElementById('regionFilter');
const majorFilter = document.getElementById('majorFilter');
const typeFilter = document.getElementById('typeFilter');
const sortBy = document.getElementById('sortBy');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');
const activeFiltersDiv = document.getElementById('activeFilters');

function getUniversityCards() {
  return Array.from(document.querySelectorAll('.university-card'));
}

function tokenize(value) {
  return (value || '')
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function updateResultCount(count) {
  const total = (count === undefined) ? getUniversityCards().length : count;
  if (resultCount) resultCount.textContent = `${total} institutions found`;
}

function updateActiveFilters() {
  if (!activeFiltersDiv) return;
  activeFiltersDiv.innerHTML = '';

  const filters = [
    { element: regionFilter, label: 'Region' },
    { element: majorFilter, label: 'Major' },
    { element: typeFilter, label: 'Type' }
  ];

  filters.forEach(filter => {
    if (filter.element && filter.element.value) {
      const selectedText = filter.element.options[filter.element.selectedIndex].text;
      const tag = document.createElement('div');
      tag.className = 'filter-tag';
      tag.innerHTML = `${filter.label}: ${selectedText} <button onclick="clearFilter('${filter.element.id}')">×</button>`;
      activeFiltersDiv.appendChild(tag);
    }
  });
}

function clearFilter(filterId) {
  const el = document.getElementById(filterId);
  if (el) el.value = '';
  filterUniversities();
}

function filterUniversities() {
  const cards = getUniversityCards();

  const searchTerm = (searchInput?.value || '').toLowerCase().trim();
  const selectedRegion = regionFilter?.value || '';
  const selectedMajor = majorFilter?.value || '';
  const selectedType = typeFilter?.value || '';

  let visibleCount = 0;

  cards.forEach(card => {
    const uniName = (card.querySelector('h3')?.textContent || '').toLowerCase();
    const uniRegion = (card.getAttribute('data-region') || '').toLowerCase();
    const uniMajors = tokenize(card.getAttribute('data-major'));
    const uniTypes = tokenize(card.getAttribute('data-type'));

    const matchesSearch = !searchTerm || uniName.includes(searchTerm);
    const matchesRegion = !selectedRegion || uniRegion === selectedRegion;
    const matchesMajor = !selectedMajor || uniMajors.includes(selectedMajor);
    const matchesType = !selectedType || uniTypes.includes(selectedType);

    const show = matchesSearch && matchesRegion && matchesMajor && matchesType;
    card.style.display = show ? 'block' : 'none';
    if (show) visibleCount++;
  });

  updateResultCount(visibleCount);
  updateActiveFilters();

  if (noResults) noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
}

function sortUniversities() {
  const sortValue = sortBy?.value || 'name';
  const grid = document.getElementById('universitiesGrid');
  if (!grid) return;

  const cardsArray = getUniversityCards();

  cardsArray.sort((a, b) => {
    if (sortValue === 'name') {
      const nameA = a.querySelector('h3')?.textContent || '';
      const nameB = b.querySelector('h3')?.textContent || '';
      return nameA.localeCompare(nameB);
    }

    if (sortValue === 'region') {
      const regionA = (a.getAttribute('data-region') || '');
      const regionB = (b.getAttribute('data-region') || '');
      return regionA.localeCompare(regionB);
    }

    return 0;
  });

  cardsArray.forEach(card => grid.appendChild(card));
  filterUniversities();
}

// Event wiring (safe-guards)
if (searchInput) searchInput.addEventListener('input', filterUniversities);
if (regionFilter) regionFilter.addEventListener('change', filterUniversities);
if (majorFilter) majorFilter.addEventListener('change', filterUniversities);
if (typeFilter) typeFilter.addEventListener('change', filterUniversities);
if (sortBy) sortBy.addEventListener('change', sortUniversities);

// Initial update
updateResultCount();
filterUniversities();
