/* ============================================
   Course Progress Tracking System
   Uses localStorage to persist progress
   ============================================ */

(function() {
  'use strict';

  const STORAGE_KEY = 'philosophy_course_progress';

  // Progress tracking object
  const ProgressTracker = {
    // Get all completed courses from localStorage
    getCompletedCourses: function() {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    },

    // Save completed courses to localStorage
    saveCompletedCourses: function(completed) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    },

    // Check if a course is completed
    isCourseCompleted: function(courseId) {
      const completed = this.getCompletedCourses();
      return completed.includes(courseId);
    },

    // Toggle course completion status
    toggleCourse: function(courseId) {
      let completed = this.getCompletedCourses();

      if (completed.includes(courseId)) {
        // Remove from completed
        completed = completed.filter(id => id !== courseId);
      } else {
        // Add to completed
        completed.push(courseId);
      }

      this.saveCompletedCourses(completed);
      return !completed.includes(courseId); // Return new state (completed or not)
    },

    // Get completion statistics
    getStats: function(totalCourses) {
      const completed = this.getCompletedCourses();
      const completedCount = completed.length;
      const percentage = totalCourses > 0 ? Math.round((completedCount / totalCourses) * 100) : 0;

      return {
        completed: completedCount,
        total: totalCourses,
        remaining: totalCourses - completedCount,
        percentage: percentage
      };
    }
  };

  // Initialize progress tracking when DOM is ready
  function initProgressTracking() {
    const courseList = document.getElementById('courseList');

    if (!courseList) {
      return; // Not on catalog page
    }

    const courses = courseList.querySelectorAll('.course-item');

    if (courses.length === 0) {
      return;
    }

    // Add progress container at the top
    createProgressDisplay(courses.length);

    // Add checkboxes to each course
    courses.forEach(function(course, index) {
      const courseId = generateCourseId(course, index);
      addCheckboxToCourse(course, courseId);

      // Apply completed styling if course is completed
      if (ProgressTracker.isCourseCompleted(courseId)) {
        course.classList.add('course-completed');
      }
    });

    // Update progress display
    updateProgressDisplay(courses.length);

    // Add filter for completed/incomplete courses
    addCompletionFilter();
  }

  // Generate unique ID for course
  function generateCourseId(course, index) {
    // Try to get course title from the heading
    const heading = course.querySelector('a');
    const title = heading ? heading.textContent.trim() : '';

    // Create ID from title or use index as fallback
    return title ? title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() : 'course-' + index;
  }

  // Add checkbox to course card
  function addCheckboxToCourse(course, courseId) {
    const heading = course.querySelector('h3');

    if (!heading) {
      return;
    }

    // Create checkbox container
    const checkboxContainer = document.createElement('div');
    checkboxContainer.style.marginBottom = '1rem';
    checkboxContainer.style.display = 'flex';
    checkboxContainer.style.alignItems = 'center';
    checkboxContainer.style.gap = '0.5rem';

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'course-checkbox';
    checkbox.id = 'checkbox-' + courseId;
    checkbox.checked = ProgressTracker.isCourseCompleted(courseId);

    // Create label
    const label = document.createElement('label');
    label.htmlFor = 'checkbox-' + courseId;
    label.style.cursor = 'pointer';
    label.style.fontWeight = '600';
    label.style.userSelect = 'none';
    label.textContent = checkbox.checked ? '✓ Completed' : 'Mark as Complete';

    // Add event listener
    checkbox.addEventListener('change', function() {
      ProgressTracker.toggleCourse(courseId);

      // Update UI
      if (checkbox.checked) {
        course.classList.add('course-completed');
        label.textContent = '✓ Completed';
      } else {
        course.classList.remove('course-completed');
        label.textContent = 'Mark as Complete';
      }

      // Update progress display
      updateProgressDisplay(document.querySelectorAll('.course-item').length);

      // Trigger custom event for filtering
      document.dispatchEvent(new CustomEvent('progressChanged'));
    });

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);

    // Insert before heading
    heading.parentNode.insertBefore(checkboxContainer, heading);
  }

  // Create progress display container
  function createProgressDisplay(totalCourses) {
    const courseList = document.getElementById('courseList');
    const courseCount = document.getElementById('courseCount');

    const progressContainer = document.createElement('div');
    progressContainer.id = 'progressContainer';
    progressContainer.className = 'progress-container';

    progressContainer.innerHTML = `
      <h3 style="margin-top: 0; color: var(--primary-color); font-size: 1.5rem;">📊 Your Progress</h3>

      <div class="progress-bar-container">
        <div class="progress-bar" id="progressBar" style="width: 0%;">
          <span id="progressPercentage">0%</span>
        </div>
      </div>

      <div class="progress-stats">
        <div class="progress-stat">
          <span class="progress-stat-value" id="completedCount">0</span>
          <span class="progress-stat-label">Completed</span>
        </div>
        <div class="progress-stat">
          <span class="progress-stat-value" id="remainingCount">${totalCourses}</span>
          <span class="progress-stat-label">Remaining</span>
        </div>
        <div class="progress-stat">
          <span class="progress-stat-value" id="totalCount">${totalCourses}</span>
          <span class="progress-stat-label">Total Courses</span>
        </div>
      </div>
    `;

    // Insert after course count
    if (courseCount && courseCount.nextSibling) {
      courseList.parentNode.insertBefore(progressContainer, courseCount.nextSibling);
    } else {
      courseList.parentNode.insertBefore(progressContainer, courseList);
    }
  }

  // Update progress display
  function updateProgressDisplay(totalCourses) {
    const stats = ProgressTracker.getStats(totalCourses);

    const progressBar = document.getElementById('progressBar');
    const progressPercentage = document.getElementById('progressPercentage');
    const completedCount = document.getElementById('completedCount');
    const remainingCount = document.getElementById('remainingCount');

    if (progressBar) {
      progressBar.style.width = stats.percentage + '%';
    }

    if (progressPercentage) {
      progressPercentage.textContent = stats.percentage + '%';
    }

    if (completedCount) {
      completedCount.textContent = stats.completed;
    }

    if (remainingCount) {
      remainingCount.textContent = stats.remaining;
    }
  }

  // Add completion status filter
  function addCompletionFilter() {
    const filterControls = document.querySelector('.filter-controls');

    if (!filterControls) {
      return;
    }

    // Create completion filter
    const completionFilterContainer = document.createElement('label');
    completionFilterContainer.innerHTML = `
      <strong>Status:</strong>
      <select id="completionFilter">
        <option value="all">All Courses</option>
        <option value="incomplete">Not Completed</option>
        <option value="completed">Completed</option>
      </select>
    `;

    filterControls.appendChild(completionFilterContainer);

    // Add event listener
    const completionFilter = document.getElementById('completionFilter');
    completionFilter.addEventListener('change', function() {
      // Trigger the existing filter function
      if (window.filterCourses) {
        window.filterCourses();
      }
    });

    // Also listen for progress changes
    document.addEventListener('progressChanged', function() {
      if (window.filterCourses) {
        window.filterCourses();
      }
    });
  }

  // Export filter function to be used by catalog-filter.js
  window.getCompletionFilter = function() {
    const completionFilter = document.getElementById('completionFilter');
    return completionFilter ? completionFilter.value : 'all';
  };

  window.matchesCompletionFilter = function(course) {
    const completionFilter = window.getCompletionFilter();

    if (completionFilter === 'all') {
      return true;
    }

    const isCompleted = course.classList.contains('course-completed');

    if (completionFilter === 'completed') {
      return isCompleted;
    } else if (completionFilter === 'incomplete') {
      return !isCompleted;
    }

    return true;
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProgressTracking);
  } else {
    initProgressTracking();
  }
})();
