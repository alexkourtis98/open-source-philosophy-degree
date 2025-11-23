# Changelog

All notable changes to the Open Source Philosophy Degree project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Modern Beautiful Design**
  - Complete CSS overhaul with contemporary, professional styling
  - Gradient-based color scheme featuring philosophical purples and blues
  - Smooth transitions and hover effects throughout
  - Responsive design optimized for all screen sizes
  - Improved typography with better readability

- **Dark Mode Support**
  - Fully implemented dark theme with system preference detection
  - Toggle button for manual theme switching
  - Persistent theme preference using localStorage
  - Optimized colors for reduced eye strain in low-light conditions
  - Smooth theme transitions

- **Course Progress Tracking**
  - Interactive checkboxes to mark courses as completed
  - Real-time progress statistics and completion percentage
  - Progress data persists using browser localStorage
  - Filter courses by completion status (All, Completed, In Progress)
  - Visual progress indicators for each category
  - Reset progress functionality

- **Enhanced Course Catalog**
  - 13 new high-quality philosophy courses added
  - Expanded coverage of:
    - Political Philosophy (Modern Political Thought, Democracy and its Critics)
    - Continental Philosophy (Existentialism, Medieval Philosophy)
    - Philosophy of Language & Logic
    - Philosophy of Religion
    - Aesthetics & Philosophy of Art
    - Advanced Ethics (Moral Psychology, Environmental Ethics)
    - Social & Applied Philosophy (Philosophy of Technology)
  - Improved course card design with better visual hierarchy
  - Metadata badges for difficulty, category, and platform

- **New Documentation Pages**
  - Comprehensive "Other Curricula & Resources" page
  - Links to alternative learning paths and complementary resources
  - Curated list of philosophy reading lists, podcasts, and communities
  - This CHANGELOG for tracking project evolution

- **Docker Improvements**
  - Updated to use port 8342 for better compatibility
  - Maintained LiveReload functionality
  - Optimized build process

### Changed
- Redesigned filter controls with modern button styling
- Improved course list layout with better spacing
- Enhanced mobile responsiveness across all pages
- Updated custom-head.html to include new CSS and JavaScript
- Reorganized course categories with new specialized sections

### Technical
- Added custom.css (655 lines) with comprehensive theming system
- Implemented dark-mode.js for theme management
- Created progress-tracker.js (300 lines) for course tracking
- Enhanced catalog-filter.js with completion filtering
- All JavaScript uses strict mode and follows best practices
- localStorage-based persistence for user preferences

## [2.0.0] - 2024-11-20

### Added
- Production-ready philosophy education platform
- Complete course catalog with filtering
- Docker support for easy deployment
- Jekyll-based static site generation

## [1.0.0] - Initial Release

### Added
- Basic course curriculum
- Initial course listings
- Project documentation
