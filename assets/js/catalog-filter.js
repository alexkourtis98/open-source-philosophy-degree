document.addEventListener('DOMContentLoaded', function() {
  // Get filter elements
  const searchInput = document.getElementById('courseSearch');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const categoryFilter = document.getElementById('categoryFilter');
  const platformFilter = document.getElementById('platformFilter');
  const courseList = document.getElementById('courseList');
  const courseCount = document.getElementById('courseCount');

  if (!searchInput || !courseList) {
    console.log('Catalog elements not found on this page');
    return;
  }

  // Get all course items
  const courses = courseList.querySelectorAll('.course-item');

  // Initialize course count
  updateCourseCount();

  // Add event listeners
  searchInput.addEventListener('input', filterCourses);
  difficultyFilter.addEventListener('change', filterCourses);
  categoryFilter.addEventListener('change', filterCourses);
  platformFilter.addEventListener('change', filterCourses);

  function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDifficulty = difficultyFilter.value;
    const selectedCategory = categoryFilter.value;
    const selectedPlatform = platformFilter.value;

    let visibleCount = 0;

    courses.forEach(function(course) {
      // Get the parent element (h3) and its following content
      const courseHeader = course;
      const courseDifficulty = course.getAttribute('data-difficulty');
      const courseCategory = course.getAttribute('data-category');
      const coursePlatform = course.getAttribute('data-platform');

      // Get all content between this course and the next (or end)
      let currentElement = courseHeader;
      const courseElements = [courseHeader];

      // Collect all elements that are part of this course entry
      while (currentElement.nextElementSibling &&
             !currentElement.nextElementSibling.classList.contains('course-item') &&
             currentElement.nextElementSibling.tagName !== 'H2') {
        currentElement = currentElement.nextElementSibling;
        courseElements.push(currentElement);
      }

      // Get course text content for search
      const courseText = courseElements.map(el => el.textContent).join(' ').toLowerCase();

      // Check if course matches all filters
      const matchesSearch = searchTerm === '' || courseText.includes(searchTerm);
      const matchesDifficulty = selectedDifficulty === 'all' || courseDifficulty === selectedDifficulty;
      const matchesCategory = selectedCategory === 'all' || courseCategory === selectedCategory;
      const matchesPlatform = selectedPlatform === 'all' || coursePlatform === selectedPlatform;

      // Check completion filter (if progress tracker is loaded)
      const matchesCompletion = window.matchesCompletionFilter ? window.matchesCompletionFilter(course) : true;

      const isVisible = matchesSearch && matchesDifficulty && matchesCategory && matchesPlatform && matchesCompletion;

      // Show or hide course and all its associated elements
      courseElements.forEach(function(element) {
        element.style.display = isVisible ? '' : 'none';
      });

      // Also hide/show the following HR if it exists
      if (currentElement.nextElementSibling && currentElement.nextElementSibling.tagName === 'HR') {
        currentElement.nextElementSibling.style.display = isVisible ? '' : 'none';
      }

      if (isVisible) visibleCount++;
    });

    updateCourseCount(visibleCount);
    updateCategoryHeaders();
  }

  // Export filterCourses for use by progress tracker
  window.filterCourses = filterCourses;

  function updateCategoryHeaders() {
    // Hide category headers (H2) if all courses in that category are hidden
    const categoryHeaders = courseList.querySelectorAll('h2');

    categoryHeaders.forEach(function(header) {
      let nextElement = header.nextElementSibling;
      let hasVisibleCourses = false;

      // Check if any course items after this header are visible
      while (nextElement && nextElement.tagName !== 'H2') {
        if (nextElement.classList.contains('course-item') &&
            nextElement.style.display !== 'none') {
          hasVisibleCourses = true;
          break;
        }
        nextElement = nextElement.nextElementSibling;
      }

      header.style.display = hasVisibleCourses ? '' : 'none';
    });
  }

  function updateCourseCount(count) {
    const total = courses.length;
    const displayCount = count !== undefined ? count : total;

    if (displayCount === total) {
      courseCount.textContent = `Showing all ${total} courses`;
    } else if (displayCount === 1) {
      courseCount.textContent = `Showing 1 course (${total} total)`;
    } else if (displayCount === 0) {
      courseCount.textContent = `No courses found (${total} total)`;
    } else {
      courseCount.textContent = `Showing ${displayCount} of ${total} courses`;
    }

    courseCount.style.fontWeight = 'bold';
    courseCount.style.margin = '1em 0';
    courseCount.style.padding = '0.5em';
    courseCount.style.backgroundColor = '#f0f0f0';
    courseCount.style.borderRadius = '4px';
  }

  // Add smooth scrolling for better UX
  const enrollButtons = courseList.querySelectorAll('a[href^="http"]');
  enrollButtons.forEach(function(button) {
    button.setAttribute('target', '_blank');
    button.setAttribute('rel', 'noopener noreferrer');
  });
});
