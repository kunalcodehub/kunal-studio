// Portfolio Configuration
// Update these values to personalize your portfolio

import profilePhoto from '../assets/profile-photo.svg';

export const portfolioConfig = {
  // Personal Info
  name: 'John Doe',
  title: 'Full Stack Developer',
  tagline: 'Crafting Digital Excellence',
  position: 'Senior Software Engineer',
  company: 'Tech Corp',
  
  // Profile Photo
  // Option 1: Use a URL (recommended for external images)
  // profilePhoto: 'https://your-image-url.com/photo.jpg',
  // 
  // Option 2: Use a local image in /public folder
  // profilePhoto: '/profile-photo.jpg',
  //
  // Using local asset (replace with your own photo in src/assets/)
  profilePhoto: profilePhoto as string | null,
  
  // Fallback emoji if no photo is set
  profileEmoji: '👨‍💻',
  
  // Social Links
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:hello@example.com',
  },
  
  // Contact Info
  contact: {
    email: 'hello@johndoe.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
  },
  
  // Resume/CV
  resumeFile: '/John_Doe_Resume.pdf',
  
  // WhatsApp
  whatsapp: {
    number: '+1234567890', // Replace with your WhatsApp number (include country code)
    defaultMessage: 'Hi! I found your portfolio and would like to connect with you.',
  },
};

export default portfolioConfig;
