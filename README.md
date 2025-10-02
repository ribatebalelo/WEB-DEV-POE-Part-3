# HealthCare+ Website

## Project Overview
This document provides detailed documentation of the **HealthCare+** website project, a comprehensive healthcare appointment booking system. The website was created by **Tebalelo Riba (ST10477225)** and includes a fully responsive website with multiple interconnected pages.

## Project Description
The HealthCare+ website is a patient-centered healthcare platform that enables users to:
- Browse medical services and specialist doctors
- View detailed doctor profiles with qualifications and availability
- Book appointments through an intuitive online system
- Learn about the healthcare facility and its mission
- Contact the healthcare provider directly

## CSS Enhancements and Customizations

### Base Styles and Reset
The CSS begins with a comprehensive reset to ensure consistent rendering across browsers:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
This reset eliminates default browser styling and establishes the border-box model for more predictable sizing calculations (MDN Web Docs, 2025).

### Typography System
The website implements a carefully selected typography hierarchy:
- **Headings**: Roboto Bold for a modern, clean appearance
- **Body Text**: Open Sans Regular for optimal screen readability
- **Color Contrast**: High contrast between headings, subheadings, and body content to ensure accessibility

These choices align with Material Design typography guidelines (Material Design, 2025) and digital usability best practices (Krug, 2014; Norman & Nielsen, 2020).

### Color Scheme
The color palette follows healthcare design conventions with psychological considerations:
- **Primary**: Blue (#1E88E5) - represents trust and dependability
- **Secondary**: Green (#43A047) - symbolizes wellness and health
- **Neutral**: White (#FFFFFF) and Grey (#F5F5F5) - create a clean, modern aesthetic

This color selection is informed by established design principles relating color to psychological associations in healthcare contexts (Lidwell, Holden & Butler, 2010).

### Responsive Design Implementation
The CSS includes comprehensive responsive design features:
- Mobile-first grid system using CSS Grid and Flexbox
- Breakpoints at 768px and 480px for tablet and mobile optimization
- Responsive typography that scales appropriately across devices
- Flexible image handling with object-fit properties

These implementations ensure universal accessibility across smartphones, tablets, and desktops, complying with WCAG 2.1 accessibility standards (NHS Digital, 2021).

### Interactive Elements
Enhanced user experience through thoughtful animations and transitions:
- Smooth hover effects on cards and buttons
- Subtle transform animations for interactive elements
- Gradient overlays on doctor images for visual interest
- Custom scrollbar styling for a cohesive experience

These micro-interactions improve user engagement while maintaining professional appropriateness for a healthcare context (Norman & Nielsen, 2020).

### Navigation System
Custom Bootstrap navbar styling with:
- Gradient background for visual appeal
- Animated hover effects with sliding highlights
- Mobile-responsive collapse functionality
- Sticky positioning for persistent access

### Form Styling
Comprehensive form styling includes:
- Consistent input field styling
- Visual validation indicators
- Custom radio button implementation for time slots
- Accessible focus states

### Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Custom styles with Flexbox and Grid layouts
- **Bootstrap 5.3.0**: Framework for responsive components

### Browser Compatibility
The website has been tested and is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Considerations
- Optimized image delivery with appropriate sizing
- Minimal external dependencies
- Efficient CSS with reusable classes
- Responsive image handling

## Reference List

British Medical Association (BMA). (2022) *Improving digital access to healthcare*. [Online] Available at: https://www.bma.org.uk [Accessed 4 Aug. 2025].

Krug, S. (2014) *Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability*. 3rd ed. New Riders.

Lidwell, W., Holden, K. & Butler, J. (2010) *Universal Principles of Design*. Revised and updated edition. Rockport Publishers.

Material Design. (2025) *Color and Typography Guidelines*. [Online] Available at: https://material.io/design/ [Accessed 19 August 2025].

MDN Web Docs. (2025) *HTML: HyperText Markup Language*. [Online] Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML [Accessed 19 August 2025].

MDN Web Docs. (2025) *JavaScript Basics*. [Online] Available at: https://developer.mozilla.org/en-US/docs/Learn/JavaScript [Accessed 19 August 2025].

National Health Service (NHS) Digital. (2021) *Data Security and Protection Toolkit*. [Online] Available at: https://digital.nhs.uk/data-security [Accessed 4 Aug. 2025].

Norman, D.A. & Nielsen, J. (2020) *The Design of Everyday Things*. Revised and expanded edition. MIT Press.

World Health Organization (WHO). (2023) *Digital health*. [Online] Available at: https://www.who.int/health-topics/digital-health [Accessed 4 Aug. 2025].


